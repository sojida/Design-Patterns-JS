const Factory = require('./Factory');
const Products = require('./Products');

const VehicleFactory = new Factory(Products)

VehicleFactory.createProduct('Car')
VehicleFactory.createProduct('Boat');
VehicleFactory.createProduct('JamesBondCar')

module.exports = VehicleFactory;
