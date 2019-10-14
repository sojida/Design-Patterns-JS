const Shape = require('./Shape');

const Circle = function(radius){
    Shape.call(this, 'Circle')
    this.radius = radius;
}

const Triangle = function(a, b, c){
    Shape.call(this, 'Triangle')
    this.a = a;
    this.b = b;
    this.c = c;
}

const Square = function(a, b){
    Shape.call(this, 'Square')
    this.a = a;
    this.b = b;
}

module.exports = { Circle, Triangle, Square }
