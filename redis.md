## Software:

![Redis](https://cdn.iconscout.com/icon/free/png-128/redis-3-1175053.png)

| Name           | Redis   |
| -------------- |:-------:|
| Version        | 5.0.3-4 |

## Server

| IP                   | 192.168.1.220              |
| -------------------- |:--------------------------:|
| Role                 | Master                     |
| SSH Username         | pi                         |
| SSH Password         | raspberry                  |
| Redis Username       |                            |
| Redis Password       |                            |
| Redis Connection URL | redis://192.168.1.220:6379 |

## Raspberry Pi Hardware

| Name         | Raspberry Pi 1 |
| ------------ |:--------------:|
| Release Date | Q4 2012        |
| CPU          | BCM2835        |
| Cores        | 1              |
| Code         | 000e           |
| Model        | B              |
| Revision     | 2.0            |
| RAM          | 512MB          |
| Manufacturer | Sony UK        |

Raspberry Pi 1 Model B

## Raspberry Pi OS:

| Name           | Raspbian Buster Lite |
| -------------- |:--------------------:|
| Version        | July 2019            |
| Release date   | 2019-07-10           |
| Kernel version | 4.19                 |
| Size           | 426 MB               |

[2019-07-10-raspbian-buster-lite.zip](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2019-07-12/2019-07-10-raspbian-buster-lite.zip)

## Setup

Update sources.

```
sudo apt-get update
```

Install `vim v2:8.1.0875-5`.

```
sudo apt-get install vim
```

Install `redis-server`.

```
sudo apt-get install redis-server
```

Configure `redis-server`.

To allow remote connections need edit `redis.conf` file.

```
sudo vi /etc/redis/redis.conf
```

After

```
bind 127.0.0.1 ::1
```

Before

```
bind 0.0.0.0 ::1
```

Restart `redis-server` service and `Raspberry Pi`.

```
sudo systemctl restart redis.service
sudo reboot
```
