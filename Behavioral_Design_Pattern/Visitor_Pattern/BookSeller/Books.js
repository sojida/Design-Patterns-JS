const Books = function(name, price){
    this.name = name;
    this.price = price;
};

Books.prototype = {
    accept: function(visitor){
        visitor.visit(this)
    },
    setPrice: function(newPrice){
        this.price = newPrice;
    },
    getPrice: function(){
        return this.price
    },
};

const BookCollection = [new Books('Harry Potter', 1000), new Books('Game of Thrones', 1200)];


module.exports = BookCollection;
