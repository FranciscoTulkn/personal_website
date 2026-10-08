# Contexto del Proyecto — Portfolio DevOps Pipeline

Documento de retoma para continuar el proyecto en cualquier momento. Última actualización: 19 de julio, 2026.

## Datos del proyecto

- **Autor:** Francisco Javier Tulcán Rodríguez
- **GitHub:** https://github.com/FranciscoTulkn
- **LinkedIn:** https://www.linkedin.com/in/franciscotulkn-lib-dev/
- **Repositorio del proyecto:** https://github.com/FranciscoTulkn/personal_website
- **Rama principal:** `master` (no `main`)
- **Servidor:** AWS EC2 t3.micro, Ubuntu Server 24.04, con Elastic IP asociada
- **Stack app:** Next.js 16 + TypeScript + TailwindCSS
- **Dockerfile:** ubicado en la **raíz** del repositorio (no en `docker/`)

## Objetivo general

Infraestructura DevOps completa para desplegar el portafolio personal como pieza de portafolio profesional para entrevistas: CI/CD automatizado, contenerización, hardening de servidor, reverse proxy con seguridad, y documentación honesta de problemas reales resueltos.

## Estado por fase

| Fase | Contenido | Estado |
|---|---|---|
| 1 | AWS EC2 — instancia, Key Pair, Security Group, Elastic IP | ✅ Completa |
| 2 | Hardening del servidor — usuario sudo, SSH por llave, UFW, Fail2ban, updates automáticos | ✅ Completa |
| 3 | Dockerización — Dockerfile multi-stage, docker-compose, healthcheck | ✅ Completa |
| 4 | Nginx Reverse Proxy — gzip, headers de seguridad, cache | ✅ Completa |
| 5 | Dominio y HTTPS (is-a.dev + Let's Encrypt) | ⏸️ **Omitida por decisión propia** — proyecto corre solo sobre IP pública |
| 6 | Jenkins — instalación, plugins, credenciales, webhook | ✅ Completa |
| 7 | Pipeline CI/CD completo — Jenkinsfile con build/deploy/healthcheck/rollback | ✅ Completa y validada en producción |
| 8.1 | Rotación de logs (Docker daemon + Jenkins) | ✅ Completa |
| 8.2 | Rate limiting en Nginx | ✅ Completa y validada (10r/s, burst 20, HTTP 429) |
| 8.3 | README final completo | ✅ Completo, generado y aplicado en la raíz del repo |
| 8.4 | Monitoreo (Prometheus + Grafana) | ⏳ **Pendiente de decisión** — evaluar si la t3.micro (1GB RAM) lo soporta bien |

## Pendientes explícitos para retomar

1. **Fase 8.4 — Prometheus + Grafana**: decidir si se instala (riesgo de saturar 1GB RAM) o se documenta como mejora futura.
2. **Fase 5 — Dominio/HTTPS**: sigue disponible para retomar cuando se quiera. Recomendación evaluada: `is-a.dev` (subdominio gratuito vía Pull Request a `is-a-dev/register`) + Let's Encrypt/Certbot para HTTPS con renovación automática.
3. Mejoras futuras ya identificadas y documentadas en el README: Blue-Green deployment, Watchtower, restringir Jenkins vía túnel SSH en vez de exposición del puerto 8080, Cloudflare como capa adicional una vez haya dominio.

## Problemas reales resueltos durante el proyecto (ya documentados en el README del repo)

- Rotación de llave GPG de Jenkins (`jenkins.io-2023.key` → `jenkins.io-2026.key`, cambio ocurrido en diciembre 2025).
- `Missing privilege separation directory: /run/sshd` al reiniciar SSH tras hardening.
- Typo en `sshd_config` (`PunkeyAuthentication` en vez de `PubkeyAuthentication`).
- Conflicto de `container_name` entre despliegue manual y despliegue vía Jenkins — se resolvió eliminando el contenedor manual y dejando a Jenkins como única fuente de verdad.
- `MissingPropertyException` en Jenkinsfile por pre-declarar variables vacías en `environment{}` y referenciarlas sin el prefijo `env.`.
- Ruta incorrecta del Dockerfile en el Jenkinsfile (`docker/Dockerfile` esperado vs. `Dockerfile` real en la raíz).
- Webhook de GitHub bloqueado por Security Group/UFW restringidos solo a IP personal — se resolvió consultando en vivo `api.github.com/meta` y permitiendo los rangos oficiales de GitHub para el puerto 8080.
- UFW quedó inactivo accidentalmente durante limpieza de reglas — se reconstruyó con `ufw reset` y reglas base + reglas específicas de GitHub.
- Memoria insuficiente en el build de Docker en t3.micro — se resolvió configurando swap.
- Rate limiting devolvía `503` en vez de `429` por defecto — se corrigió con la directiva `limit_req_status 429;`.

## Configuración de seguridad actual (Security Group + UFW)

| Puerto | Origen permitido | Propósito |
|---|---|---|
| 22 (SSH) | IP personal específica | Administración |
| 80 (HTTP) | 0.0.0.0/0 | Tráfico web público |
| 443 (HTTPS) | 0.0.0.0/0 | Reservado (sin certificado activo aún, Fase 5 pendiente) |
| 8080 (Jenkins) | Rangos oficiales de GitHub (`api.github.com/meta` → `hooks`) + IP personal | Webhook + administración de Jenkins |

**Nota:** los rangos de IP de GitHub deben revalidarse periódicamente (`curl -s https://api.github.com/meta | jq -r '.hooks[]'` desde el servidor), ya que GitHub los actualiza ocasionalmente.

## Estructura real del repositorio

```
personal_website/
├── Dockerfile              ← en la raíz, NO en docker/
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── Jenkinsfile
├── README.md                ← ya actualizado con documentación completa
├── next.config.ts           ← con output: "standalone"
└── src/
```

## Jenkinsfile actual (versión funcional validada)

El pipeline usa `env.VARIABLE` consistentemente (no variables sin prefijo), no pre-declara variables vacías en `environment{}`, y construye con `-f Dockerfile` (ruta raíz). Incluye: Checkout con captura de hash de commit, Save Previous Image Tag con verificación de existencia del contenedor, Build Image con doble tag (commit + latest), Deploy vía `docker compose up -d --force-recreate`, Health Check con reintentos (10 intentos x 5s), Cleanup de imágenes antiguas, y bloque `post { failure { ... } }` con rollback automático a la imagen previa.

## Próxima conversación — cómo continuar

Al retomar, decidir primero sobre la Fase 8.4 (monitoreo) y, si se desea, reactivar la Fase 5 (dominio/HTTPS). El resto del proyecto está funcional y documentado.