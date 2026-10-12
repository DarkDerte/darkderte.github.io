---
title: "Nano-JSON"
description: "Un inspector JSON de terminal para consultar claves y filtrar datos desde archivos o tuberías, con atención a documentos grandes."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI", "JSON"]
icon: "{}"
---

## Qué hace

`jlesser` lee JSON de un archivo o de la entrada estándar y permite recorrer claves y filtrar valores. Un modo sin color mantiene la salida útil en terminales simples.

## Eficiencia

Para documentos grandes, el diseño debe evitar conservar copias innecesarias en memoria y permitir consultas progresivas cuando el formato lo permita.

No necesita servidor, cuenta ni una sintaxis de consultas más compleja que la tarea que resuelve.
