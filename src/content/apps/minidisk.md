---
title: "minidisk"
description: "Un analizador de espacio en disco que encuentra directorios grandes bajo demanda y exporta un informe de texto."
category: "Utilidad"
status: "idea"
stack: ["Rust", "CLI"]
icon: "▤"
---

## Qué hace

`minidisk` recorre una ruta, calcula tamaños y ordena los directorios para ayudar a localizar qué ocupa espacio.

## Principios

- Sin indexación persistente ni daemon.
- Permitir limitar profundidad y excluir rutas.
- Informar sobre permisos y enlaces simbólicos con cuidado.
- Exportar texto apto para scripts.

El informe explica que los tamaños pueden variar mientras otros procesos crean o modifican archivos.
