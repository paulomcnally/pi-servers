# Raspbian Buster Lite

## Install VIM Editor.

```bash
sudo apt-get update
sudo apt-get install vim
```

## Static Ip

Config `dhcpcd.conf`.

```bash
vi /etc/dhcpcd.conf
```

Add this lines:

> Change `THE_SSID` AND `THE_PASSWORD` with the you're wifi info.

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
