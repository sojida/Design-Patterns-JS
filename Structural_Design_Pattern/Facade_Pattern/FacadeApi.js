const Vehicle = function(){
    this.name = 'default_name'
    this.colour = 'Black';
    this.doors = 4;
    this.cost = 100;
}


const VehicleServices = function(){

    const getData = function(id) {
        console.log(`Getting data with id of ${id}`);
        return new Vehicle()
    };

    const postData = function(data){
        console.log(`Posting ${data.name}`)
    };

    const patchData = function(data){
        console.log(`Patching ${data.name}`)
    };

    const deleteData = function(id){
        console.log(`Deleteing data with id of ${id}`)
    };

    const updateAndSaveVehicleColour = function(vehicleid, newColour){
        const vehicle = this.getData(vehicleid)
        vehicle.colour = newColour
        this.patchData(vehicle)
    }

    return {
        getData,
        postData,
        patchData,
        deleteData,
        updateAndSaveVehicleColour,
    }
}

const vhServices = VehicleServices()
vhServices.updateAndSaveVehicleColour(1, 'red')
