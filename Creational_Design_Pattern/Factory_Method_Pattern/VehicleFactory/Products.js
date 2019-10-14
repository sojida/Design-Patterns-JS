const Vehicle = function(type){
    this.type = type;
    this.drive = function(){
       return `${this.type} is driving`
    }
};

const Boat = function(){
    Vehicle.call(this, 'Boat')
    this.config = {
        land: false,
        water: true,
        air: false,
    };
};

const Car = function(){
    Vehicle.call(this, 'Car');
    this.config = {
        land: true,
        water: false,
        air: false,
    };
};

const JamesBondCar = function(){
    Vehicle.call(this, 'JamesBondCar');
    this.config = {
        land: true,
        water: true,
        air: true,
    };
};

module.exports = { Car, Boat, JamesBondCar }
