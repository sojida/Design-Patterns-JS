const commands = require('./ConcreteCommands');
const RentalManger = require('./RentalManager');
const Apartment = require('./Apartment');
const Receiver = require('./Receiver')

const RentHome = new RentalManger();
const Amity = new Apartment('Amity');
const Rome = new Apartment('Rome');
const Milan = new Apartment('Milan');
const NewTown = new Apartment('New Town');

const addPlace = commands.addApartmentCommand()
const removePlace = commands.deleteAppartmentCommand()

RentHome.execute(addPlace, Amity);
RentHome.execute(addPlace, Rome);
RentHome.execute(addPlace, Milan);
RentHome.execute(addPlace, NewTown)
console.log(Receiver.getApartments())


RentHome.execute(removePlace, Rome);

console.log(Receiver.getApartments())
console.log(RentHome.undo(), 'undo')
