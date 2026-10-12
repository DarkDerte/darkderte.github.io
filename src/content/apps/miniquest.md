---
title: "MiniQuest"
description: "Un RPG por turnos con mapa generado proceduralmente, en menos de 10 KB. Rogue-like clásico sin imágenes externas: todo se dibuja con caracteres y canvas."
category: "Juego"
status: "idea"
stack: ["TypeScript", "Canvas"]
size: "9.6 KB"
icon: "⚔"
destacado: true
---

MiniQuest es un homenaje a los roguelikes de terminal: pocos recursos, mucha profundidad.

Un mundo generado al azar, cofres, enemigos, pociones y un final que siempre cambia. Todo en un paquete más pequeño que una foto de perfil de hace diez años.

## Decisiones de diseño

- El mapa se genera con un único generador de ruido, sin librerías.
- El motor de combate es un sistema de eventos puro, sin máquinas de estado infladas.
- Los sprites son glifos y primitivas: ninguna imagen ocupa memoria.

## Estado actual

En beta. El sistema de mapas y combate está terminado; estoy puliendo el balanceo de dificultad y añadiendo más enemigos.
