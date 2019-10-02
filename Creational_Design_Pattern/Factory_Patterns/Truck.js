const Truck = function(){
    this.name = 'truck';
    this.props = {
        land: false,
        water: true,
        air: false,
    }
}

Truck.prototype.drive = function(){
    console.log(`${this.name} is driving`)
}

module.exports = Truck;
