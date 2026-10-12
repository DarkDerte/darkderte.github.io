---
title: "imgmeta"
description: "Un inspector de imágenes que lee dimensiones, formato y metadatos EXIF sin alterar ni mostrar la imagen."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI", "EXIF"]
icon: "▧"
---

## Qué hace

`imgmeta` extrae dimensiones, formato y metadatos disponibles de archivos de imagen. Presenta resultados en texto y puede procesar lotes para catalogación.

No modifica los originales ni carga las imágenes a un servicio. Los formatos admitidos y las limitaciones se documentan; los archivos dañados producen errores puntuales sin detener necesariamente todo el lote.
