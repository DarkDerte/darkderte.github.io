---
title: "Nano-Logs"
description: "Un extractor de registros que filtra archivos de log grandes por fecha, nivel, expresión regular o palabra clave."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI"]
icon: "≋"
---

## Qué hace

`logslice` lee logs línea por línea y selecciona los registros que coinciden con criterios indicados. Puede escribir el resultado a la terminal o a otro proceso mediante una tubería.

Las opciones de fecha, nivel y texto se combinan de forma predecible. El consumo de memoria permanece acotado al tamaño de los buffers, no al archivo entero.

Sin interfaz web, base de datos de logs ni ingestión permanente.
