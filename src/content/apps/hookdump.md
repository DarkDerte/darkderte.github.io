---
title: "hookdump"
description: "Un receptor local de webhooks para depurar integraciones y guardar las solicitudes en archivos rotativos."
category: "Herramienta"
status: "idea"
stack: ["Rust", "HTTP"]
icon: "⇣"
---

## Qué hace

`hookdump` escucha en una dirección local, recibe solicitudes HTTP y guarda método, cabeceras y cuerpo para facilitar pruebas de integraciones.

El tamaño de solicitud y el espacio de almacenamiento tienen límites configurables. Los archivos rotativos evitan crecimiento sin control, y la salida permite revisar los datos sin un panel web.

Por defecto escucha solo donde se indique; la herramienta no expone el servicio a Internet por sorpresa.
