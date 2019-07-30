const mongoose = require('mongoose');
const assert = require('assert');

// Connection URL
const url = 'mongodb://192.168.1.230:27017/test';
const Schema = mongoose.Schema;

describe('MongoDB', function() {
  before(async function() {
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  describe('Connection', function() {
    it('Valid', async function(done) {
      const Test = mongoose.connection.model('Test', new Schema({ name: String }));
      assert.equal(Test.modelName, 'Test');
      done();
    });
  });

  after(async function() {
    await  mongoose.connection.close();
  });
})
