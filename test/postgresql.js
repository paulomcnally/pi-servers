const chai = require('chai');
const { Client } = require('pg');

const assert = chai.assert;

process.env.PGHOST = '192.168.1.210';
process.env.PGUSER = 'postgres';
process.env.PGPASSWORD = ''
process.env.PGDATABASE = 'postgres'
process.env.PGPORT = 5432;

const client = new Client();

describe('PostgreSQL', function() {
  before(async function() {
    await client.connect();
  });

  describe('Connection', function() {
    it('Valid', async function() {
      const res = await client.query('SELECT NOW()');
      assert.typeOf(res.rows[0].now.toString(), 'string');
    });
  });

  after(async function() {
    await client.end();
  });
})
