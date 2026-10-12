---
title: "Nano-Dedup"
description: "Un detector de archivos duplicados que agrupa candidatos por tamaño y confirma coincidencias con hashes, sin borrar por defecto."
category: "Utilidad"
status: "idea"
stack: ["Rust", "CLI"]
icon: "⧉"
---

## Qué hace

`dedup` recorre rutas elegidas, agrupa archivos del mismo tamaño y calcula hashes para encontrar duplicados probables. Puede comparar contenido antes de mostrar una coincidencia definitiva.

El modo inicial solo informa. Cualquier acción de borrado requeriría confirmación explícita y mostraría qué copia se conservaría.

No mantiene un índice permanente: cada análisis refleja los archivos actuales y no una base de datos antigua.
