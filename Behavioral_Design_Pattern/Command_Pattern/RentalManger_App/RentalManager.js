const RentalManager = function(){
    this.commands = [];
    this.apartments = [];
}

RentalManager.prototype.execute = function(command){
    const args = Array.prototype.slice.call(arguments, 1)

    command.currentState = command.execute.apply(null, args)
    command.params = args
    this.apartments = command.currentState;
    this.commands.push(command);
}


RentalManager.prototype.undo = function(){
    if (this.commands.length){
        console.log(this.commands)
        this.commands.pop();
        const lastCommand = this.commands[this.commands.length - 1]
        this.apartments = lastCommand.currentState;
    }
}

module.exports = RentalManager;
