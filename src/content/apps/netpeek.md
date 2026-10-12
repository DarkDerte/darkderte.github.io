---
title: "netpeek"
description: "Un inspector puntual de conexiones de red que consulta al sistema y muestra direcciones y puertos sin monitorización residente."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI"]
icon: "⇄"
---

## Qué hace

`netpeek` presenta las conexiones activas que el sistema operativo permita consultar, con direcciones, puertos y estado.

Se ejecuta solo cuando se solicita. No instala un servicio, no transmite resultados y no mantiene una vigilancia continua.

## Portabilidad

Las fuentes de datos varían entre sistemas operativos; la herramienta debe indicar claramente cuándo una métrica no está disponible en la plataforma actual.
