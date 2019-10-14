const Factory = function(allProducts){
    this.products = allProducts;
};

Factory.prototype.createProduct = function(type){
    if (!this.products[type]){
        return false
    }

    const product = this.products[type]

    return new product()
}

module.exports = Factory;
