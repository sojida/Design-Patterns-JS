const Shape = function(shape){
    this.shape = shape;

    this.clone = function(){
        return this;
    }
}

module.exports = Shape;
