const { CarShipping, DroneShipping, ShipShipping } = require('../Shipping');

const shipment = {
    weight: 200,
    distance: 5000,
};

test('shipping app', () => {
    const shipment1 = new CarShipping(shipment);
    const shipment2 = new DroneShipping(shipment);
    const shipment3 = new ShipShipping(shipment);

    expect(shipment1.calculateShippingPrice()).toEqual(60);
    expect(shipment2.calculateShippingPrice()).toEqual(100);
    expect(shipment3.calculateShippingPrice()).toEqual(180);
});
