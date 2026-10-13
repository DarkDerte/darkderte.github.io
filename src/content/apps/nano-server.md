---
title: "Nano-Server"
description: "Servidor HTTP ligero escrito en Rust para publicar sitios estáticos desde una carpeta, con configuración INI mínima."
category: "Herramienta"
status: "en desarrollo"
stack: ["Rust", "HTTP", "TLS"]
size: "0,7–1,2 MB"
icon: "↗"
repo: "https://github.com/DarkDerte/Nano-Server"
destacado: true
---

## Qué es

Nano-Server convierte una carpeta de archivos en un sitio web. Nada más. No hay base de datos, ni motor de plantillas, ni sistema de plugins: solo un ejecutable pequeño que toma un directorio y lo publica por HTTP.

Está escrito en Rust y se configura con un único archivo INI legible a simple vista. La idea es que puedas montar y entender todo el servidor en unos minutos, sin instalar dependencias ni arrastrar una pila de servicios.

## Para qué sirve

Pensado para sitios estáticos, demos y pruebas locales: documentación, portafolios, prototipos o cualquier conjunto de HTML, CSS, imágenes y documentos. También vale como servidor de archivos en una red local o para servir varias webs distintas desde una sola máquina.

Si lo único que necesitas es entregar archivos que ya tienes, Nano-Server evita toda la maquinaria de un servidor de aplicaciones.

## Qué ofrece

- **Varios sitios en un solo proceso.** Cada dominio se define en su propio bloque y se sirve desde su carpeta, seleccionado por el encabezado `Host`.
- **HTTPS opcional** con TLS 1.3, activable con un certificado y su clave.
- **Caché y compresión.** gzip para texto cuando el cliente lo admite, junto con `ETag` y `Cache-Control` para no reenviar lo que no ha cambiado.
- **Redirecciones** por sitio, con códigos 301 y 302.
- **Descargas parciales.** Soporta peticiones por rango de bytes, útil para reanudar descargas.
- **Tipos MIME ampliables** por extensión, sin tocar el código.
- **Recarga en caliente.** Al cambiar la configuración, el servidor la vuelve a leer y aplica los cambios sin reiniciar; si algo está mal, conserva la última versión válida.

Todo con límites sensatos y un registro por solicitud en la consola.

## Binarios

Se compila para múltiples plataformas. Cada binario pesa alrededor de un megabyte, incluidas las versiones estáticas para Linux.

| Target | Tamaño (MB) | Ruta |
| --- | --- | --- |
| x86_64-pc-windows-msvc | 1,064 | `target/x86_64-pc-windows-msvc/release/Nano-Server.exe` |
| i686-pc-windows-msvc | 0,688 | `target/i686-pc-windows-msvc/release/Nano-Server.exe` |
| x86_64-unknown-linux-gnu (glibc) | 1,224 | `target/x86_64-unknown-linux-gnu/release/Nano-Server` |
| x86_64-unknown-linux-musl (estático) | 1,237 | `target/x86_64-unknown-linux-musl/release/Nano-Server` |
| aarch64-unknown-linux-musl (ARM64, estático) | 1,045 | `target/aarch64-unknown-linux-musl/release/Nano-Server` |
| i686-unknown-linux-musl (x86 32-bit, estático) | 0,940 | `target/i686-unknown-linux-musl/release/Nano-Server` |
| armv7-unknown-linux-musleabihf (ARMv7, estático) | 0,890 | `target/armv7-unknown-linux-musleabihf/release/Nano-Server` |

## Por qué

La mayoría de servidores estáticos modernos asumen que necesitas mucho más de lo que realmente usas. Nano-Server apuesta por lo contrario: un binario de apenas un megabyte que hace una cosa, la hace bien y se puede leer entero. Es la pieza que completa el resto del ecosistema Nano para publicar sin depender de nada externo.

Su código es abierto y se distribuye bajo licencia MIT.
