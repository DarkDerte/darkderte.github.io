---
title: "sendfile"
description: "Una transferencia directa de archivos entre dos equipos con streaming, autenticación y verificación de checksum."
category: "Herramienta"
status: "idea"
stack: ["Rust", "TCP"]
icon: "⇧"
---

## Qué hace

`sendfile` envía un archivo directamente entre dos equipos, sin nube ni cuenta. El contenido se transmite por bloques y el receptor comprueba un checksum al finalizar.

La autenticación debe ser explícita y la herramienta debe avisar qué dirección y puerto usará. Un límite de velocidad opcional permite compartir la conexión con otras tareas.

La seguridad del protocolo se diseña antes de publicar una versión utilizable; no se presentan conexiones sin protección como seguras.
