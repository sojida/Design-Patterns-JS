const AbstractProduct = function(color, factoryRequirements){
    const products = {};
    const requirements = factoryRequirements
    const factoryColor = color

    const registerProducts = function(listOfProducts){
            listOfProducts.forEach(function(product){
            const props = new product();

            if (isFamilyColor(props) && canBeRegistered(props)){
                products[props.type] = product
            } else{
                console.log(`${product.name} cannot be registered to the factory`);
            }
        });
        return AbstractProduct

    };

    const isFamilyColor = function(obj){
        return obj.color === factoryColor ? true : false
    }

    const canBeRegistered = function(props){
            for (required = 0; required < requirements.length; required++)
            {
                if (!props[requirements[required]]){
                    return false
                };
            }
        return true;
    };

    const createProduct = function(productName, productCofig){
        const product = products[productName]
        return product ? (new product(productCofig)) : null
    };

    return {
        registerProducts,
        createProduct
    };
};

module.exports = AbstractProduct;
