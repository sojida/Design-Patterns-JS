const Factory = require('../App');

test('VehicleFactory test', () => {
    const car = Factory.createProduct('Car')
    const boat = Factory.createProduct('Boat')
    const superCar = Factory.createProduct('JamesBondCar')
    const invibleCar = Factory.createProduct('invisibleCar')

    expect(car.type).toEqual('Car')
    expect(car.drive()).toEqual('Car is driving')
    expect(car.config).toEqual({
        land: true,
        water: false,
        air: false,
    })

    expect(boat.type).toEqual('Boat')
    expect(boat.drive()).toEqual('Boat is driving')
    expect(boat.config).toEqual({
        land: false,
        water: true,
        air: false,
    })

    expect(superCar.type).toEqual('JamesBondCar')
    expect(superCar.drive()).toEqual('JamesBondCar is driving')
    expect(superCar.config).toEqual({
        land: true,
        water: true,
        air: true,
    })

    expect(invibleCar).toEqual(false)
})

