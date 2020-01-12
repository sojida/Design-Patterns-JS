const { clientApp: RentalManagerApp, RentHome} = require('../App');
const Apartment = require('../Apartment');
const { DeleteAppartmentCommand, AddApartmentCommand} = require('../ConcreteCommands');


test('Rental Manager App', () => {
    const Amity = new Apartment('Amity');
    const Rome = new Apartment('Rome');
    const Milan = new Apartment('Milan');
    const NewTown = new Apartment('New Town');

    RentalManagerApp.executeCommand(AddApartmentCommand, Amity);
    RentalManagerApp.executeCommand(AddApartmentCommand, Rome);
    RentalManagerApp.executeCommand(AddApartmentCommand, Milan);
    RentalManagerApp.executeCommand(AddApartmentCommand, NewTown);

    expect(RentHome.apartments.length).toEqual(4)

    RentalManagerApp.executeCommand(DeleteAppartmentCommand, Rome);

    expect(RentHome.apartments.length).toEqual(3)

    RentalManagerApp.undo()

    expect(RentHome.apartments.length).toEqual(4)

})

