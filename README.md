# pi-servers
Raspberry Pi Servers

## Servicios

* [PostgreSQL](postgresql.md)
* [Redis](redis.md)
* [MongoDB](mongodb.md)

## Configuraciones

* [SSH](ssh.md)

## Test

Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) after execute test.

```bash
yarn test
```

## CLI

shutdown

```bash
yarn pi postgresql --shutdown
yarn pi redis --shutdown
yarn pi memcached --shutdown
```

storage

```bash
yarn pi postgresql --storage
yarn pi redis --storage
yarn pi memcached --storage
```

## Disclaimer

The settings are for personal use, they may not apply to your environment.
