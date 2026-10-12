---
title: "Nano-CSVCut"
description: "Una herramienta de terminal para seleccionar columnas, filtrar filas y cambiar delimitadores procesando datos progresivamente."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI", "CSV"]
icon: "⊞"
---

## Qué hace

`csvcut` selecciona columnas, aplica filtros sencillos y convierte delimitadores desde archivos o tuberías.

El procesamiento por registros evita cargar el fichero completo en memoria. Las comillas, separadores y saltos de línea se manejan según las reglas del formato, no con sustituciones frágiles.

La salida es texto estándar y puede alimentar otras herramientas.
