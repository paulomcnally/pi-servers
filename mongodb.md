## Software:

![MongoDB](https://cdn.iconscout.com/icon/free/png-128/mongodb-226029.png)

| Name           | MongoDB |
| -------------- |:-------:|
| Version        | 4.0.11  |

## Server

| IP                     | 192.168.1.230                 |
| ---------------------- |:-----------------------------:|
| Role                   | Master                        |
| SSH Username           | ubuntu                        |
| SSH Password           | raspberry                     |
| MongoDB Username       |                               |
| MongoDB Password       |                               |
| MongoDB Connection URL | mongodb://192.168.1.230:27017 |

## Raspberry Pi Hardware

| Name         | Raspberry Pi 3 |
| ------------ |:--------------:|
| Release Date | Q4 2016        |
| CPU          | BCM2837        |
| Cores        | 4              |
| Code         | a32082         |
| Model        | 3B             |
| Revision     | 1.2            |
| RAM          | 1GB            |
| Manufacturer | Sony Japan     |

## Raspberry Pi OS:

| Name           | Ubuntu Bionic Beaver |
| -------------- |:--------------------:|
| Version        | 18.04.2              |
| Release date   | 2019-02-10           |
| Kernel version | 4.15.0-1031-raspi2   |
| Size           | 419 MB               |

[ubuntu-18.04.2-preinstalled-server-arm64+raspi3.img.xz](http://cdimage.ubuntu.com/ubuntu/releases/bionic/release/ubuntu-18.04.2-preinstalled-server-arm64+raspi3.img.xz)

## Raspberry OS Setup.

**IMPORTANT**

> After insert SD card on Raspberry Pi. See the next step.

On local machine, insert the SD card with the ubuntu image and edit `config.txt`.

Comment the line `device_tree_address`, edit line `kernel` and add line `initramfs`.

```
kernel=vmlinuz
initramfs initrd.img followkernel
```

This fix boot. More info on [https://wiki.ubuntu.com/ARM/RaspberryPi](https://wiki.ubuntu.com/ARM/RaspberryPi).

## Setup

Update sources.

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
```

Install MongoDB.

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

sudo apt-get update
sudo apt-get upgrade
sudo apt-get install libcurl3
sudo apt-get install -y mongodb-org
```

To allow remote connections need edit `mongod.conf` file.

```bash
vi /etc/mongod.conf
```

After

```bash
net:
  bindIp: 127.0.0.1
```

Before

```bash
net:
  bindIp: 0.0.0.0
```

Enable start MongoDB Service on system start.

```
sudo systemctl enable mongod.service
sudo reboot
```
