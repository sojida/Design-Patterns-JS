const Vehicle = require('./Vehicle');

Vehicle.decorators = {};

Vehicle.prototype.decorate = function (decorator) {
    const F = function () {}
    const overrides = this.constructor.decorators[decorator];

    F.prototype = this;
    const newobj = new F();
    
    for (let i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newobj[i] = overrides[i];
        }
    }

    return newobj;
};

Vehicle.decorators.colour = {
    updateColour: function(newColour){
        const oldColour = this.colour
        console.log(`Changing ${oldColour} to ${newColour}`)
        this.colour = newColour
    }
}

const car = new Vehicle()

const newcar = car.decorate('colour')

console.log(newcar.colour)
console.log(newcar.updateColour('red'))
console.log(newcar.colour)
