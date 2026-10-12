---
title: "Nano-Búsqueda"
description: "Un buscador de archivos por nombre, extensión o tamaño que recorre el disco cuando se ejecuta, sin indexación permanente."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI"]
icon: "⌕"
---

## Qué hace

`fscan` busca archivos recorriendo las rutas que indique el usuario. Se puede limitar por nombre, extensión, tamaño o profundidad.

## Enfoque

- Sin índice que consuma espacio ni servicio residente.
- Recorrido concurrente configurable, con límites para no saturar el equipo.
- Salida de texto estable para poder usarla en tuberías y scripts.

Los errores de permisos se muestran como avisos y no detienen el resto de la búsqueda.
