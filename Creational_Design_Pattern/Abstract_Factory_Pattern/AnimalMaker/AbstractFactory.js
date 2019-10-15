const AbstractFactory = function(factoryRequirements){
    const products = {};
    const requirements = factoryRequirements

    const registerProducts = function(listOfProducts){
            listOfProducts.forEach(function(product){
            const { valid, productName } = canBeRegistered(product)
            if (valid){
                products[product.name] = product
            } else{
                return `${productName} cannot be registered to the factory`
            }
        });
        return AbstractFactory

    };

    const canBeRegistered = function(product){
        const values = {
            valid: true,
        }
        const proto = product.prototype;
        requirements.forEach(function(required){
            if (!proto[required]){
                values.valid = false
                values.productName = product.name
            };
        });

        return values;
    };

    // =============> Registers one product <===================
    // const registerProduct = function(product){
    //     const { valid, productName } = canBeRegistered(product)
    //     if (valid){
    //         products[product.name] = product
    //     } else{
    //         console.log(`${productName} cannot be registered to the factory`)
    //     }
        
    //     return AbstractFactory
    // }

    const createProduct = function(productName, productCofig){
        const product = products[productName]

        return product ? (new product(productCofig)) : null
    }

    return {
        registerProducts,
        createProduct
    };
};

module.exports = AbstractFactory;
