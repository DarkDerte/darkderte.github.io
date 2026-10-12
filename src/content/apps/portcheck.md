---
title: "portcheck"
description: "Un comprobador de conectividad para un host y puerto, con timeout configurable y salida apta para scripts."
category: "Herramienta"
status: "idea"
stack: ["Rust", "CLI", "TCP"]
icon: "⇢"
---

## Qué hace

`portcheck` intenta conectar con un host y un puerto durante un intervalo configurable, y devuelve un resultado claro.

Los códigos de salida permiten distinguir conexión correcta, timeout y error de resolución. La herramienta no escanea rangos de puertos ni ejecuta sondeos repetidos sin que el usuario lo pida.

Está pensada para diagnóstico puntual y scripts de administración.
