const AbstractFactory = function(Factory){
    const currentFactory = Factory;

    const createProduct = function(type){
        return currentFactory.createProduct(type)
    }

    return {
        createProduct,
    }
};



module.exports = { AbstractFactory };
