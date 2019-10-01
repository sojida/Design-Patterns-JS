const AbstractFactory = function(config){
    const products = this;
    const requirements = ['drive']

    const registerProducts = function(listOfProducts){
            listOfProducts.forEach(function(product){
                console.log(product.name, '???????')
            const { valid, productName } = canBeRegistered(product)
            if (valid){
                products[product.name] = new product()
            } else{
                console.log(`${productName} cannot be registered to the factory`)
            }
        });

        return AbstractFactory

    };

    const canBeRegistered = function(product){
        console.log('checking registation requirements...')
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

    const registerProduct = function(product){
        const { valid, productName } = canBeRegistered(product)
        if (valid){
            products[product.name] = new product()
        } else{
            console.log(`${productName} cannot be registered to the factory`)
        }
        
        return AbstractFactory
    }
    
    console.log('returning object...')
    return {
        registerProduct,
        registerProducts,
    };
};

module.exports = new AbstractFactory()
