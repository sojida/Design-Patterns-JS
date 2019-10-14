const { Circle, Triangle, Square } = require('../ConcreteShapes');

test('Shape test', () => {
    const circle = new Circle(5);
    const anoterCircle = circle.clone();

    const triangle = new Triangle(3,4,5);
    const anotherTriangle = triangle.clone();

    const square = new Square(3,4);
    const anotheSquare = square.clone();

    expect(circle).toEqual(anoterCircle)
    expect(triangle).toEqual(anotherTriangle)
    expect(square).toEqual(anotheSquare)
});
