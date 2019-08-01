# Raspbian Buster Lite

## Install VIM Editor.

```bash
sudo apt-get update
sudo apt-get install vim
```

## Static Ip

Edit `dhcpcd.conf`.

```bash
vi /etc/dhcpcd.conf
```

Add this lines:

```
interface eth0
static ip_address=192.168.1.220/24
static routers=192.168.1.1
static domain_name_servers=8.8.4.4 8.8.8.8
```

Restart system.

```bash
sudo reboot
```

## WiFi

```bash
sudo raspi-config
```

Select the `Network Options` item from the menu, then the `Wi-fi` option.

> Could not communicate with wpa_supplicant.

Solutions: [https://raspberrypi.stackexchange.com/a/65628](https://raspberrypi.stackexchange.com/a/65628)
