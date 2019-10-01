const Car = require('./Car');
const Truck = require('./Truck');
const Boat = require('./Boat');

const Factory = function(listOfProducts){
    const products = {};
    
    listOfProducts.forEach(function(product){
        products[product.name] = product
    });
    
    return products;
};

module.exports = Factory([Car, Boat, Truck])
