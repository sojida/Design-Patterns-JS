const { ClothingShop, FoodShop, ElectronicsShop } = require('./handler');

const OderingApp = function(item){
    const cloth = new ClothingShop();
    const electrics = new ElectronicsShop()
    const food = new FoodShop;

    cloth.setNext(electrics)
    electrics.setNext(food)
    food.setNext(null)

    return cloth.handle(item)
}


module.exports = OderingApp;