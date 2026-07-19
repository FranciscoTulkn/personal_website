# Portfolio DevOps Pipeline

Infraestructura de despliegue automatizado para mi portafolio personal (Next.js 16 + TypeScript), construida como proyecto de aprendizaje práctico en arquitecturas DevOps reales — CI/CD completo, contenerización, hardening de servidor y observabilidad básica.

**Autor:** Francisco Javier Tulcán Rodríguez
**GitHub:** [github.com/FranciscoTulkn](https://github.com/FranciscoTulkn)
**LinkedIn:** [linkedin.com/in/franciscotulkn-lib-dev](https://www.linkedin.com/in/franciscotulkn-lib-dev/)

---

## Descripción

Este proyecto despliega mi portafolio personal en una instancia AWS EC2 mediante un pipeline CI/CD completamente automatizado: cada `push` a la rama `master` dispara un build de Docker, despliegue del contenedor, verificación de salud (healthcheck) y, si algo falla, rollback automático a la versión anterior — sin intervención manual.

El objetivo no fue solo "que funcione", sino construir algo representativo de cómo se despliega software en un entorno profesional: seguridad por capas, automatización real, y documentación honesta de los problemas que surgieron en el camino (todos reales, no simulados).

## Arquitectura

```
GitHub (push a master)
        │
        ▼
    Webhook (IP allowlist: rangos oficiales de GitHub)
        │
        ▼
    Jenkins (EC2, puerto 8080 restringido)
        │
        ├─► git pull
        ├─► docker build (multi-stage, imagen ~150-250MB)
        ├─► guarda tag de imagen anterior (para rollback)
        ├─► docker compose up -d --force-recreate
        ├─► healthcheck (10 intentos, 5s cada uno)
        │     ├── OK      → cleanup de imágenes viejas
        │     └── FALLA   → rollback automático a imagen anterior
        │
        ▼
    Nginx (reverse proxy, puerto 80)
        ├─► gzip, headers de seguridad, cache de assets estáticos
        ├─► rate limiting (10 req/s, burst 20, respuesta 429)
        │
        ▼
    Contenedor Docker (portfolio-app, healthcheck activo, solo en 127.0.0.1:3000)
```

## Tecnologías

| Categoría | Tecnología |
|---|---|
| Frontend | Next.js 16, TypeScript, TailwindCSS |
| Contenedores | Docker, Docker Compose (multi-stage build) |
| Servidor | AWS EC2 (t3.micro, Ubuntu Server 24.04) |
| Reverse Proxy | Nginx (gzip, headers de seguridad, cache, rate limiting) |
| CI/CD | Jenkins (Pipeline as Code, Jenkinsfile declarativo) |
| Seguridad | UFW, Fail2ban, Security Groups, SSH hardening, IP allowlisting |
| Infraestructura | Elastic IP, Security Groups, swap configurado para builds |

## Instalación / Despliegue

> Documentación paso a paso completa de cada fase disponible en `docs/`.

### Requisitos previos
- Cuenta AWS con Free Tier disponible
- Repositorio en GitHub
- Cliente SSH

### Resumen de fases

1. **Infraestructura AWS** — Instancia EC2 t3.micro, Key Pair (ED25519), Security Group con mínimo privilegio, Elastic IP.
2. **Hardening del servidor** — Usuario no-root con sudo, SSH solo por llave (sin password, sin root), UFW como segunda capa de firewall, Fail2ban contra fuerza bruta, actualizaciones automáticas.
3. **Dockerización** — Dockerfile multi-stage (deps → build → runner en Alpine), usuario no-root dentro del contenedor, `output: standalone` de Next.js, healthcheck, restart policy, logging con rotación.
4. **Nginx Reverse Proxy** — Compresión gzip, headers de seguridad (X-Frame-Options, X-Content-Type-Options, etc.), cache de assets estáticos con hash, logs separados por sitio.
5. **Dominio/HTTPS** — *(Pendiente / omitido en esta iteración del proyecto — el servicio corre actualmente sobre la IP pública de la instancia; queda documentado como mejora futura con Let's Encrypt + Certbot.)*
6. **Jenkins** — Instalación desde repositorio oficial, usuario administrador propio, plugins de Docker/GitHub, credenciales con permisos mínimos, webhook restringido a los rangos IP oficiales de GitHub (`api.github.com/meta`).
7. **Pipeline CI/CD** — Jenkinsfile declarativo: checkout, build con tag por commit, deploy, healthcheck con reintentos, cleanup de imágenes, rollback automático en `post { failure { ... } }`.
8. **Extras de producción** — Rotación de logs a nivel de daemon Docker y Jenkins, rate limiting en Nginx (10r/s, burst 20, HTTP 429).

### Variables de entorno

```bash
# .env.example
NODE_ENV=production
PORT=3000
# Agregar aquí las variables específicas que la app requiera
```

## Pipeline (Jenkinsfile)

Cada push a `master` ejecuta:

1. **Checkout** — clona el commit exacto, captura el hash corto para etiquetar la imagen.
2. **Save Previous Image Tag** — guarda qué imagen está corriendo actualmente (base del rollback).
3. **Build Image** — construye la imagen Docker etiquetada con `latest` y con el hash del commit.
4. **Deploy** — `docker compose up -d --force-recreate`.
5. **Health Check** — hasta 10 intentos (50s) esperando el estado `healthy` del contenedor.
6. **Cleanup** — elimina imágenes antiguas, conservando solo `latest` y la del commit actual.
7. **Post / failure** — si cualquier etapa falla, revierte automáticamente a la imagen previa.

## Troubleshooting (problemas reales resueltos durante el desarrollo)

Esta sección documenta incidentes reales encontrados durante la construcción del proyecto — no son hipotéticos, quedan como evidencia de resolución de problemas en infraestructura real:

- **Rotación de llave de firma del repositorio de Jenkins**: en diciembre de 2025, Jenkins rotó su llave GPG de firma de paquetes (`jenkins.io-2023.key` → `jenkins.io-2026.key`), causando error `NO_PUBKEY` en `apt update`. Se corrigió actualizando a la llave vigente.
- **`Missing privilege separation directory: /run/sshd`**: tras editar `sshd_config`, el directorio `/run/sshd` (tmpfs) no existía. Se creó manualmente y se agregó una regla en `/etc/tmpfiles.d/` para persistirlo entre reinicios.
- **Conflicto de nombre de contenedor en Jenkins**: al ejecutar el pipeline por primera vez, Docker Compose desde el workspace de Jenkins generaba un proyecto distinto al usado en pruebas manuales, causando conflicto con el `container_name` fijo. Se resolvió eliminando el contenedor levantado manualmente y dejando que Jenkins sea la única fuente de verdad del despliegue.
- **Variables de entorno en Jenkinsfile (`MissingPropertyException`)**: la pre-declaración de variables vacías en el bloque `environment{}` junto con referencias sin el prefijo `env.` causaba errores intermitentes de tipo `null`. Se corrigió eliminando la pre-declaración y usando `env.VARIABLE` consistentemente en todo el pipeline.
- **Ruta incorrecta del Dockerfile en el build de Jenkins**: el pipeline asumía `docker/Dockerfile`, pero el archivo real vivía en la raíz del repo. Se ajustó la referencia en el Jenkinsfile.
- **Webhook de GitHub sin acceso al puerto de Jenkins**: al restringir el puerto 8080 a una IP personal, los servidores de GitHub (con IPs propias, no la del usuario) no podían entregar el webhook. Se resolvió consultando en vivo los rangos oficiales de GitHub vía `api.github.com/meta` y permitiendo el acceso únicamente desde esos rangos + la IP personal para administración.
- **Memoria limitada en build de Docker (t3.micro, 1GB RAM)**: el build de Next.js requirió configurar swap para completarse de forma estable.

## Mejoras futuras

- Configurar dominio propio y HTTPS (Let's Encrypt + Certbot) — actualmente pendiente.
- Monitoreo con Prometheus + Grafana para métricas de servidor y contenedores.
- Blue-Green deployment para despliegues sin downtime.
- Watchtower para actualización automática de imágenes base.
- Restringir el acceso a Jenkins vía túnel SSH en vez de exposición directa del puerto 8080.
- Cloudflare como capa adicional de CDN/DDoS protection una vez configurado el dominio.

## Licencia

MIT