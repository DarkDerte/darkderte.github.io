---
title: "Nano-RSS"
description: "Un lector RSS de terminal que muestra titulares y recuerda lecturas localmente, sin publicidad ni recomendaciones algorítmicas."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI", "RSS"]
icon: "◉"
---

## Qué hace

`rssmini` consulta feeds RSS indicados por el usuario, presenta los artículos en texto y conserva localmente cuáles se han leído.

No ordena el contenido con algoritmos ni incorpora publicidad o seguimiento. La lista de feeds y el estado de lectura se guardan en archivos sencillos que se pueden respaldar o editar.

Las consultas ocurren cuando se ejecuta el lector, no mediante un servicio residente.
