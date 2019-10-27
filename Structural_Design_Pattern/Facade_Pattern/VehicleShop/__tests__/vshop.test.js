const vShop = require('../App');

test('VShop', () => {
    const samVehicle = vShop.buyUpdateStoreVehicle('Sam')

    expect(samVehicle).toEqual({ owner: 'Sam', colour: 'Black', doors: 4, cost: 100 })
});
