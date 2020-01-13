const Command = function (execute) {
    this.execute = execute;
    this.params = null;
    this.currentState = null;
}

module.exports = Command;
