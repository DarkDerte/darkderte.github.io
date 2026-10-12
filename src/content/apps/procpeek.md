---
title: "procpeek"
description: "Un monitor de procesos para terminal que consulta CPU y memoria al abrirse, sin panel web ni servicio permanente."
category: "Herramienta"
status: "idea"
stack: ["Rust", "TUI"]
icon: "▥"
---

## Qué hace

`procpeek` presenta procesos activos y métricas básicas del sistema en una tabla de terminal que se actualiza a intervalos elegidos.

## Interfaz

- Ordenar por CPU o memoria.
- Pausar y actualizar la lectura manualmente.
- Salir sin dejar procesos en segundo plano.

La pantalla debe priorizar texto legible y controles de teclado; no hacen falta gráficos ni un panel de administración.
