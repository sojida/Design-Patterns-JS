const VehicleBuilder = require('./Builders');
const Director = require('./VehicleM');

Manufacturer = Director(VehicleBuilder)

Manufacturer.createCar()
console.log(VehicleBuilder.getProduct())

Manufacturer.createBicycle()
console.log(VehicleBuilder.getProduct())

Manufacturer.createTrain()
console.log(VehicleBuilder.getProduct())