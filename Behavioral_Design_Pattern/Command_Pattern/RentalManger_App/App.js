const RentalManger = require('./RentalManager');

const RentHome = new RentalManger();

const client = function(app) {
    this.app = app;
    this.executeCommand = function(command, params) {
        const commandToExecute = new command()
        app.execute(commandToExecute, params)
    };

    this.undo = function(){
        app.undo()
    };
};

const clientApp = new client(RentHome);


module.exports = { clientApp, RentHome };
