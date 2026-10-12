---
title: "Nano-Hex"
description: "Un visor hexadecimal que inspecciona offsets y bytes por bloques, incluso en archivos demasiado grandes para cargar en memoria."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI"]
icon: "0x"
---

## Qué hace

`hexpeek` muestra el contenido binario como offsets, valores hexadecimales y caracteres imprimibles. Se puede saltar a una posición y limitar la cantidad leída.

## Lectura acotada

El visor lee bloques pequeños desde el archivo en vez de cargarlo entero. Esto hace que el uso de memoria no dependa directamente del tamaño total del archivo.

La salida se mantiene clara y estable para facilitar inspecciones manuales y automatizadas.
