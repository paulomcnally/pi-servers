# SSH

Para poder acceder a los servidores sin necesidad de contraseña se debe hacer la configuración siguiente.

## En tu maquina local.

Escribe estos tres comandos en la terminal para crear la carpeta `.ssh` en caso de que aún no exista y para crear tu llave SSH.

```bash
$ mkdir ~/.ssh
$ cd ~/.ssh
$ ssh-keygen -t rsa
```

Solo debes presionar la tecla Enter, no debes establecer una contraseña.

Luego debes crear y configurar el archivo `config`.

```bash
touch config
vi config
```

```
Host postgresql
User pi
Hostname 192.168.1.210
IdentityFile ~/.ssh/id_rsa

Host redis
User pi
Hostname 192.168.1.220
IdentityFile ~/.ssh/id_rsa

Host mongodb
User ubuntu
Hostname 192.168.1.230
IdentityFile ~/.ssh/id_rsa
```

## En los servidores.

Ahora estableceremos nuestras llaves públicas en cada uno de los servidores.

**IMPORTANTE**

> Es en cada uno de los servidores que se harán los pasos a continuación.

Accedemos a cada servidor vía SSH. (Uno a la vez).

```bash
ssh pi@192.168.1.210
ssh pi@192.168.1.220
ssh pi@192.168.1.230
```

Creamos el archivo `authorized_keys`.

```bash
mkdir ~/.ssh/
touch ~/.ssh/authorized_keys
```

Dentro de ese archivo pondremos el contenido del archivo `id_rsa.pub` de nuestra computadora. (**NO LA DEL SERVIDOR**).

En nuestra maquina local ejecutamos:

```bash
cat ~/.ssh/id_rsa.pub
```

El texto es largo, copialo todo y procura no copiar espacios en blanco al inicio o al final.

El texto que copias lo pegas en el archivo `authorized_keys` en cada servidor.

```bash
vi ~/.ssh/authorized_keys
```

## Acceder a los servidores vía SSH sin contraseña.

```bash
ssh pi@192.168.1.210
ssh pi@192.168.1.220
ssh pi@192.168.1.230
```

ó

```bash
ssh pi@postgresql
ssh pi@redis
ssh pi@mongodb
```
