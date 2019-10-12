const Command = require('./Command');
const Receiver = require('./Receiver');

const addApartmentCommand = function(){
    return new Command(Receiver.AddAppartment)
}

const deleteAppartmentCommand = function(){
    return new Command(Receiver.deleteApartment)
}

module.exports = {
    deleteAppartmentCommand,
    addApartmentCommand,
}
