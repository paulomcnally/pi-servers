const meow = require('meow');
const Commands = require('./commands');

const cli = meow(``, {
  flags: {
    shutdown: {
      type: 'boolean',
    },
    storage: {
      type: 'boolean',
    }
  }
});

const commands = new Commands(cli.input, cli.flags);
