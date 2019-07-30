# Ubuntu Bionic Beaver

## Static Ip

Install dependencies.

```bash
sudo apt-get update
sudo apt-get install wireless-tools
sudo apt-get install wpasupplicant
```

Config `interfaces`.

```bash
vi /etc/network/interfaces
```

Add this lines:

> Change `THE_SSID` AND `THE_PASSWORD` with the you're wifi info.

```
auto eth0
iface eth0 inet static
  address 192.168.1.230
  netmask 255.255.255.0
  gateway 192.168.1.1
  dns-nameservers 8.8.8.8 8.8.4.4

auto wlan0
iface wlan0 inet static
  address 192.168.1.230
  netmask 255.255.255.0
  gateway 192.168.1.1
  dns-nameservers 8.8.8.8 8.8.4.4
wpa-ssid THE_SSID
wpa-psk THE_PASSWORD
```

Restart system.

```bash
sudo reboot
```
