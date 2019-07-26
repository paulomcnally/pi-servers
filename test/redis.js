const assert = require('assert');
const redis = require('redis');
let client;

describe('Redis', function() {
  before(function () {
    client = null;
  });

  describe('Connection', function() {
    it('Valid', function(done) {
      client = redis.createClient({
        host: '192.168.1.220',
        port: 6379,
        connect_timeout: 1000
      });

      client.on('connect', function () {
        assert.strictEqual(client.stream.listeners('timeout').length, 0);
        client.on('ready', done);
      });
    });
  });

  after(function() {
    client.end(true);
  });
})
