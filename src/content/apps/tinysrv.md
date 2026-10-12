---
title: "tinysrv"
description: "Un servidor HTTP estático para servir archivos locales sin base de datos, plugins ni motor de plantillas."
category: "Herramienta"
status: "idea"
stack: ["Rust", "HTTP"]
icon: "↗"
---

## Qué hace

`tinysrv` sirve HTML, CSS, imágenes y documentos desde un directorio indicado. Está pensado para pruebas locales y sitios estáticos pequeños.

## Alcance

- Tipos de contenido y rutas correctamente manejados.
- Sin base de datos, plantillas ni sistema de plugins.
- Límites claros para rutas y archivos servidos.

Puede funcionar con E/S bloqueante o asíncrona según lo que requiera el uso real; la complejidad no se añade por anticipado.
