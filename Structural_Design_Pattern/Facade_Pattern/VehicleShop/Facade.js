const vhServices = require('./VehicleServices');

const facade = function(){
    const buyUpdateStoreVehicle = function(name){
        const newVehicle = vhServices.getNewVehicle()
        const updatedVehicle = vhServices.patchVehicleName(newVehicle, name);
        vhServices.storeVehicle(updatedVehicle)

        return updatedVehicle;
    }

    return { buyUpdateStoreVehicle }
}

module.exports = facade;