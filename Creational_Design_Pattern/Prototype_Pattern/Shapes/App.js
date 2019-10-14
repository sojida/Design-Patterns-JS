const { Circle, Triangle, Square } = require('./ConcreteShapes');

const circle = new Circle(5);
const anoterCircle = circle.clone();

console.log(anoterCircle, '<<>>' ,circle)

const triangle = new Triangle(3,4,5);
const anotherTriangle = triangle.clone();

console.log(anotherTriangle, '<<>>' ,triangle);


const square = new Square(3,4);
const anotheSquare = square.clone();

console.log(anotheSquare, '<<>>', square);
