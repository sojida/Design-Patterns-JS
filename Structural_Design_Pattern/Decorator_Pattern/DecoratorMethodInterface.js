const Vehicle = require('./Vehicle');

Vehicle.decorators = {};

Vehicle.prototype.decorate = function(decorator) {
    this.decorators_list.push(decorator)
}

Vehicle.decorators.colour = {
   updateColour: function (newColour) {
        return newColour
    }
}

Vehicle.prototype.updateColour = function(newColour){
    console.log('Updating colour...')
    const max = this.decorators_list.length;
    let name;
    for (let i = 0; i < max; i += 1) {
    name = this.decorators_list[i];
    this.colour = Vehicle.decorators[name].updateColour(newColour);
 }

 return this;
}

const car = new Vehicle()

car.decorate('colour')

console.log(car.colour)
console.log(car.updateColour('red'))
console.log(car.colour)