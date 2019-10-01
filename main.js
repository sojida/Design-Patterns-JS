const Car = require('./Creational_Design_Pattern/Factory_Patterns/Car');
const Truck = require('./Creational_Design_Pattern/Factory_Patterns/Truck');
const Boat = require('./Creational_Design_Pattern/Factory_Patterns/Boat');
const Person = require('./Creational_Design_Pattern/Constructor_Pattern/Person')
const AbstractFactory = require('./Creational_Design_Pattern/Factory_Patterns/AbstractFactory')

const Fact = AbstractFactory()

Fact.registerProducts([Car, Truck])
Fact.registerProducts([Boat])
console.log(Fact)


Fact.Car.drive();

