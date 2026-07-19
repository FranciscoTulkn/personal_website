pipeline {
    agent any

    environment {
        IMAGE_NAME = "portfolio-devops"
        CONTAINER_NAME = "portfolio-app"
        COMPOSE_FILE = "docker-compose.yml"
    }

    options {
        timeout(time: 15, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_SHORT_COMMIT = sh(
                        script: "git rev-parse --short HEAD",
                        returnStdout: true
                    ).trim()
                    echo "Deploying commit: ${env.GIT_SHORT_COMMIT}"
                }
            }
        }

        stage('Save Previous Image Tag') {
            steps {
                script {
                    def exists = sh(
                        script: "docker ps -aq -f name=^${CONTAINER_NAME}\$",
                        returnStdout: true
                    ).trim()

                    if (exists) {
                        env.PREVIOUS_IMAGE_TAG = sh(
                            script: "docker inspect --format='{{.Config.Image}}' ${CONTAINER_NAME}",
                            returnStdout: true
                        ).trim()
                    } else {
                        env.PREVIOUS_IMAGE_TAG = "none"
                    }
                    echo "Previous image was: ${env.PREVIOUS_IMAGE_TAG}"
                }
            }
        }

        stage('Build Image') {
            steps {
                sh """
                    docker build -f Dockerfile \
                        -t ${env.IMAGE_NAME}:${env.GIT_SHORT_COMMIT} \
                        -t ${env.IMAGE_NAME}:latest .
                """
            }
        }

        stage('Deploy') {
            steps {
                sh "docker compose -f ${env.COMPOSE_FILE} up -d --force-recreate"
            }
        }

        stage('Health Check') {
            steps {
                script {
                    def healthy = false
                    def attempts = 0
                    def maxAttempts = 10

                    while (!healthy && attempts < maxAttempts) {
                        sleep(time: 5, unit: 'SECONDS')
                        def status = sh(
                            script: "docker inspect --format='{{.State.Health.Status}}' ${env.CONTAINER_NAME} || echo 'unknown'",
                            returnStdout: true
                        ).trim()
                        echo "Health status attempt ${attempts + 1}: ${status}"

                        if (status == 'healthy') {
                            healthy = true
                        } else if (status == 'unhealthy') {
                            error("Container reported unhealthy status")
                        }
                        attempts++
                    }

                    if (!healthy) {
                        error("Container did not become healthy within timeout")
                    }
                }
            }
        }

        stage('Cleanup Old Images') {
            steps {
                sh """
                    docker image prune -f
                    docker images ${env.IMAGE_NAME} --format '{{.Tag}}' | grep -v -E 'latest|${env.GIT_SHORT_COMMIT}' | xargs -r -I {} docker rmi ${env.IMAGE_NAME}:{} || true
                """
            }
        }
    }

    post {
        failure {
            script {
                echo "Deployment failed. Attempting rollback..."
                if (env.PREVIOUS_IMAGE_TAG && env.PREVIOUS_IMAGE_TAG != 'none') {
                    sh """
                        docker tag ${env.PREVIOUS_IMAGE_TAG} ${env.IMAGE_NAME}:latest || true
                        docker compose -f ${env.COMPOSE_FILE} up -d --force-recreate
                    """
                    echo "Rollback completed to previous image: ${env.PREVIOUS_IMAGE_TAG}"
                } else {
                    echo "No previous image available for rollback. Manual intervention required."
                }
            }
        }
        success {
            echo "Deployment successful! Commit ${env.GIT_SHORT_COMMIT} is live."
        }
        always {
            sh "docker compose -f ${env.COMPOSE_FILE} ps"
        }
    }
}