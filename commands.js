const { execSync } = require('child_process');
const chalk = require('chalk');

class Commands {
  constructor(inputs, flags) {
    this.host = inputs[0];
    this.flags = flags;

    if (flags.shutdown) { this.shutdown() }
    if (flags.storage) { this.storage() }
  }

  /**
   * Flag methods
   */
  shutdown() {
    this.command = `ssh ${this.host} sudo shutdown -h now`;
    this.success('Turning off');
  }

  storage() {
    this.command = `ssh ${this.host} "df -h --total | grep 'total' | grep -oE \"[[:digit:]]*%"\"`;
    const used = this.execute();
    const free = `${100.0 - parseFloat(used)}%`

    this.title('STORAGE');
    this.error(`Used: ${used}`);
    this.success(`Free: ${free}`);
  }

  /**
   * Private methods
   */
  execute() {
    return execSync(this.command).toString().trim();
  }

  title(message) {
    console.log(chalk.yellow.bold(message));
  }

  success(message) {
    console.log(chalk.green(message));
  }

  error(message) {
    console.log(chalk.red(message));
  }
}

module.exports = Commands;
