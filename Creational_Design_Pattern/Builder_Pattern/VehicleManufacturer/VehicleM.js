const Manufacture = function(newbuilder){
    let builder = newbuilder;

    const setBuilder = function(newbuilder){
        builder = newbuilder
    }

    const createCar = function(){
        builder.reset();
        builder.createVehicle('car');
        builder.addParts('tyres', 4)
        builder.addParts('doors', 4)
    }

    const createBicycle = function(){
        builder.reset();
        builder.createVehicle('bicycle');
        builder.addParts('tyres', 2)
        builder.addParts('doors', null)
    }
    
    const createTrain = function(){
        builder.reset();
        builder.createVehicle('train');
        builder.addParts('tyres', null)
        builder.addParts('doors', 50)
    }

    return{
        setBuilder,
        createCar,
        createBicycle,
        createTrain,
    }
}


module.exports = Manufacture;
