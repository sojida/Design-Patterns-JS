const Vehicle = function(){
    this.owner = 'default_name'
    this.colour = 'Black';
    this.doors = 4;
    this.cost = 100;
}


const VehicleServices = function(){
    const vehicleStore = [];

    const getNewVehicle = function() {
        return new Vehicle()
    };

    const storeVehicle = function(vehicle){
        vehicleStore.push(vehicle)
    }

    const patchVehicleName = function(vehicle, newName){
        vehicle.owner = newName
        return vehicle
        
    };


    return {
        getNewVehicle,
        storeVehicle,
        patchVehicleName,
    }
}

const vhServices = VehicleServices()


module.exports = vhServices;
