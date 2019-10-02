const Car = function(){
    this.name = 'car'
    this.props = {
        land: false,
        water: true,
        air: false,
    }
}

Car.prototype.drive = function(){
    console.log(`${this.name} is driving`)
}

module.exports = Car;
