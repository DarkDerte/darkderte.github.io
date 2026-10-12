---
title: "Nano-Backup"
description: "Una herramienta de copias incrementales que guarda archivos nuevos o modificados con manifiestos sencillos y locales."
category: "Utilidad"
status: "idea"
stack: ["Rust", "CLI"]
icon: "⧉"
---

## Qué hace

`snapcopy` compara el origen con un manifiesto local y copia solo lo que ha cambiado. Los manifiestos describen rutas, fechas y hashes para poder revisar cada instantánea.

## Seguridad y claridad

- Sin formato propietario ni servicio remoto obligatorio.
- Vista previa de cambios antes de escribir.
- Verificación de integridad al finalizar.

La eliminación de archivos no se propaga por defecto: una copia debe proteger datos, no borrarlos por sorpresa.
