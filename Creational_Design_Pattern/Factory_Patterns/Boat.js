const Boat = function(){
    this.name = 'boat';
    this.props = {
        land: false,
        water: true,
        air: false,
    }
}

Boat.prototype.drive = function(){
    console.log(`${this.name} is driving`)
}

module.exports = Boat;
