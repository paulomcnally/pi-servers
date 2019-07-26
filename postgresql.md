## Software:

![PostgreSQL](https://cdn.iconscout.com/icon/free/png-128/postgresql-11-1175122.png)

| Name           | PostgreSQL           |
| -------------- |:--------------------:|
| Version        | 11.4-1               |

## Server

| IP                        | 192.168.1.21                            |
| ------------------------- |:---------------------------------------:|
| Role                      | Master                                  |
| SSH Username              | pi                                      |
| SSH Password              | raspberry                               |
| PostgreSQL Username       | postgres                                |
| PostgreSQL Password       |                                         |
| PostgreSQL Connection URL | postgresql://postgres@192.168.1.21:5432 |

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

Install `postgresql`.

```
sudo apt-get install postgresql postgresql-contrib libpq-dev
```

Configure `postgresql`.

To allow remote connections need edit `postgresql.conf` file.

```
sudo vi /etc/postgresql/11/main/postgresql.conf
```

After

```
listen_addresses = 'localhost'
```

Before

```
listen_addresses = '*'
```

Now, edit `pg_hba.conf` file.

```
sudo vi /etc/postgresql/11/main/pg_hba.conf
```

After

```

# "local" is for Unix domain socket connections only
local   all             all                                        peer
# IPv4 local connections:
host    all             all             127.0.0.1/32               md5
# IPv6 local connections:
host    all             all             ::1/128                    md5
```

Before

```

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             0.0.0.0/0               trust
# IPv6 local connections:
host    all             all             ::1/128                 trust
```

Restart `postgresql` server and `Raspberry Pi`.

```
sudo /etc/init.d/postgresql restart
sudo reboot
```
