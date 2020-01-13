const Shipping = function(shipment){
    this.weight = shipment.weight;
    this.distance = shipment.distance;

    this.calculateWeightDistance = function (){
        return this.weight/this.distance * 1000;
    }

    this.calculateShippingPrice = function(){
        const weightDistance = this.calculateWeightDistance()
        return this.calculateMedium(weightDistance);
    }
}


const DroneShipping = function(shipment){
    Shipping.call(this, shipment);
    this.calculateMedium = function(weightDistance){
        return 2.5 * weightDistance;
    };
};

const CarShipping = function(shipment){
    Shipping.call(this, shipment);
    this.calculateMedium = function(weightDistance){
        return 1.5 * weightDistance;
    };
};

const ShipShipping = function(shipment){
    Shipping.call(this, shipment);
    this.calculateMedium = function(weightDistance){
        return 4.5 * weightDistance;
    };
};


module.exports = { DroneShipping, ShipShipping, CarShipping };
