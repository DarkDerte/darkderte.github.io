---
title: 'Servidor Raspberry-Pi'
description: 'Creación de un servidor en una Raspberry Pi, con interfaz gráfica Cockpit'
pubDate: '10/11/2024'
heroImage: '/img/2151704917.jpg'
linkImage: '<a href="https://www.freepik.es/imagen-ia-gratis/fondo-placa-base-neon_266580208.htm#fromView=search&page=1&position=22&uuid=9aaf1477-15f9-48f1-a415-39537a7bb753">Imagen de freepik</a>'
---

### Requisitos
- Un PC
- Una Raspberry Pi
- Una MicroSD

### Instalación del Sistema Operativo
Para empezar, en un ordenador que tengamos a mano, instalaremos el software de [Raspberry Pi Imager](https://www.raspberrypi.com/software/).

Según la versión que tengamos, deberemos seleccionar el que más se adapta a la placa. En nuestro caso es una Raspberry Pi 3b, y hemos escogido un ubuntu server.

Después de seleccionar el sistema operativo, deberemos configurar la wifi, el usuario por defecto y habilitar la conexión por SSH.

Una vez todo este configurado y se haya escrito en la MicroSD, nos preparamos para el primer arranque.

### Arranque e instalación del software Cockpit
Cuando conectemos la Raspberry Pi, se arrancará y se conectará a la red wifi. Par poder determinar que ip tiene, podemos hacer con software que busca dispositivos en la misma red o entrando en el router para saber que ip se le ha determinado.

Una vez tengamos la ip, nos conectaremos a ella indicando lo siguiente:
```
ssh {usuario por defecto}:{ip de la raspberrypi}
```

Posiblemente, salga un mensaje de aceptación de un certificado, es normal. Este certificado (autogenerado en nuestro caso) es para ser identificada y no ser objetivo de posibles ataques.

Ahora ya estamos dentro de la "maquinita". Entonces, lo primero de todo es actualizarla, y luego instalar el modulo de Cockpit.

Para ello, ejecutaremos las siguientes instrucciones:
```
sudo apt update
sudo apt upgrade
```

Una vez este todo actualizado y finalice, podremos instalar Cockpit con la siguiente instrucción.
```
sudo apt install cockpit
```
Si teneis algún problema, podéis mirar la documentación de [Cockpit](https://cockpit-project.org/running#ubuntu).

### Cockpit 
Ahora ya tenemos disponible nuestro acceso mediante el navegador. Este es un momento para decir si se desea anular el protocolo SSH o dejarlo.

En cualquier caso, desde un navegador podras acceder desde la ruta https://{ip de la raspberry pi}:9090/.
