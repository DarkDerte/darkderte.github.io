---
title: "hashbox"
description: "Un verificador de integridad que calcula hashes, compara archivos y valida manifiestos desde scripts o la terminal."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI", "SHA-256"]
icon: "#"
---

## Qué hace

`hashbox` calcula SHA-256 de uno o varios archivos, compara sumas y verifica manifiestos de texto. La salida debe distinguir de forma inequívoca entre coincidencia, diferencia y error de lectura.

## Automatización

Un modo silencioso con códigos de salida documentados permite incorporarlo a scripts. Los archivos se procesan por bloques para evitar consumir memoria en proporción a su tamaño.

El formato del manifiesto es simple y documentado; las dependencias criptográficas se mantendrían al mínimo necesario.
