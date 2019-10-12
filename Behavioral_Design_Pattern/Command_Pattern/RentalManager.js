const RentalManager = function(){
    this.commands = [];

}

RentalManager.prototype.execute = function(command){
    const args = Array.prototype.slice.call(arguments, 1)

    command.currentState = command.execute.apply(null, args)
    command.params = args
    this.commands.push(command);

}


RentalManager.prototype.undo = function(){
    this.commands.pop();
    const lastCommand = this.commands[this.commands.length - 1]
    return lastCommand.currentState;
}

module.exports = RentalManager;
