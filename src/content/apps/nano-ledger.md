---
title: "Nano-Ledger"
description: "Un registro de gastos en línea de comandos. Sin base de datos, sin API, sin interfaz: solo un binario de 300 KB y un archivo de texto plano."
category: "Productividad"
status: "idea"
stack: ["Rust"]
size: "300 KB"
icon: "₿"
---

Ledger Lite es la respuesta a la sobrecarga de las apps de finanzas: una para gestionar dinero no debería consumir más dinero en datos de los que ahorra.

Un único binario compilado en Rust. Tus datos viven en un archivo de texto que puedes leer, editar y versionar con git.

## Comandos

```bash
ledger add almuerzo 12.50
ledger sum --mes julio
ledger report --categoria transporte
```

## Por qué Rust

- Sin runtime, sin máquina virtual, sin 200 MB de dependencias.
- Compila a un binario que arranca en milisegundos.
- Tipos fuertes que convierten errores de dinero en errores de compilación.
