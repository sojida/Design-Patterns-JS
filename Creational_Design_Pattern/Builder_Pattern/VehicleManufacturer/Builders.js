const Vehicle = function(name){
    this.name = name;
    this.doors = 4;
    this.tyres = 4;
}


const VehicleBuilder = function(){
  let product = new Vehicle('car');

  function reset(){
    product = new Vehicle('car');
  }

  function createVehicle(name){
    product = new Vehicle(name);
  }

  function addParts(key, value){
      product[key] = value
  }

  function getProduct(){
      const vehicle = product;
      reset()
      return vehicle
  }

  return{
      reset,
      addParts,
      getProduct,
      createVehicle,
  }
}

module.exports = VehicleBuilder()
