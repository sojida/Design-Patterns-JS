const VehicleBuilder = require('../Builders');
const Director = require('../VehicleM');

test('VehicleManufacturer test', () => {
    Manufacturer = Director(VehicleBuilder)

    Manufacturer.createCar()
    expect(VehicleBuilder.getProduct()).toEqual({name: 'car', doors: 4, tyres: 4 })

    Manufacturer.createBicycle()
    expect(VehicleBuilder.getProduct()).toEqual({name: 'bicycle', doors: null, tyres: 2 })

    Manufacturer.createTrain()
    expect(VehicleBuilder.getProduct()).toEqual({name: 'train', doors: 50, tyres: null })
    
    Manufacturer.setBuilder(VehicleBuilder)
})