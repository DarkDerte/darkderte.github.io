---
title: "Nano-Papelera"
description: "Una papelera de terminal para mover archivos, restaurarlos y eliminarlos definitivamente, sin daemon ni base de datos."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI"]
icon: "⌫"
---

## Qué hace

`dustbin` mueve archivos a una carpeta de papelera local en vez de borrarlos al instante. Permite listar el contenido, restaurar elementos y vaciar la papelera de forma explícita.

## Diseño mínimo

- Sin procesos en segundo plano ni base de datos.
- Metadatos simples para conservar la ruta original.
- Confirmación clara antes del borrado definitivo.

La herramienta debe preferir la seguridad ante una operación ambigua y explicar dónde guarda los archivos.
