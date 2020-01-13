const Command = require('./Command');
const Receiver = require('./Receiver');

const AddApartmentCommand = function(){
    Command.call(this, Receiver.AddAppartment)
}

const DeleteAppartmentCommand = function(){
    Command.call(this, Receiver.deleteApartment)
}


module.exports = {
    DeleteAppartmentCommand,
    AddApartmentCommand,
}
