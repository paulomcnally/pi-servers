# Ubuntu Bionic Beaver

## Static Ip

Edit `interfaces`.

```bash
vi /etc/network/interfaces
```

Add this lines:

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
```

Restart system.

```bash
sudo reboot
```

## WiFi

Since 18.04.2 the linux-firmware and linux-firmware-raspi2 packages now contain the necessary files for the built-in WiFi on the Pi 3B and 3B+. However, if you want the latest and greatest files:

```bash
mkdir wifi-firmware
cd wifi-firmware
# Pi 3B
wget https://github.com/RPi-Distro/firmware-nonfree/raw/master/brcm/brcmfmac43430-sdio.bin
wget https://github.com/RPi-Distro/firmware-nonfree/raw/master/brcm/brcmfmac43430-sdio.txt
# Pi 3B+
wget https://github.com/RPi-Distro/firmware-nonfree/raw/master/brcm/brcmfmac43455-sdio.bin
wget https://github.com/RPi-Distro/firmware-nonfree/raw/master/brcm/brcmfmac43455-sdio.clm_blob
wget https://github.com/RPi-Distro/firmware-nonfree/raw/master/brcm/brcmfmac43455-sdio.txt
sudo cp *sdio* /lib/firmware/brcm/
```

Install dependencies.

```bash
sudo apt-get update
sudo apt-get install wireless-tools
sudo apt-get install wpasupplicant
```

Edit `interfaces`.

```bash
vi /etc/network/interfaces
```

Add this lines:
> Change `THE_SSID` AND `THE_PASSWORD` with the you're wifi info.

```
wpa-ssid THE_SSID
wpa-psk THE_PASSWORD
```
