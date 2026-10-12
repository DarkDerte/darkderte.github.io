---
title: "Nano-CfgDiff"
description: "Un comparador de configuraciones TOML, JSON y YAML que resalta cambios relevantes sin guardar los archivos."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI", "TOML", "JSON", "YAML"]
icon: "±"
---

## Qué hace

`cfgdiff` compara dos archivos de configuración y presenta claves añadidas, eliminadas o modificadas, en vez de limitarse a diferencias línea por línea.

El formato se detecta por extensión o se puede indicar manualmente. Los datos se procesan localmente, no se suben a un comparador web ni se guardan después de terminar.

La salida legible y los códigos de salida permiten usarlo tanto a mano como en automatizaciones.
