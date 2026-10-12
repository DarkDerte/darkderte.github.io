---
title: "Nano-Markdown"
description: "Un lector de archivos Markdown que convierte texto a una vista legible sin exigir vista previa en vivo ni servicios externos."
category: "Herramienta"
status: "idea"
stack: ["Rust", "Markdown", "Interfaz nativa"]
icon: "M↓"
---

## Qué hace

Abre un archivo `.md` y presenta títulos, listas, enlaces y bloques de código con formato legible. La conversión puede hacerse de manera estática al abrir el documento.

La vista previa en vivo solo se incorporaría si mejora el uso de forma clara. El contenido local no se envía a un servidor y el HTML generado debe tratarse de forma segura.
