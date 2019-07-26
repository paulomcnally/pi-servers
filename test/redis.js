const chai = require('chai');
const redis = require('redis');

const expect = chai.expect;

const client = redis.createClient({
  host: '192.168.1.220',
  port: 6379
});

describe('Redis', function() {
  describe('Connection', function() {
    it('Valid', function() {
      expect(client.connected).to.equal(true);
    });
  });
})
