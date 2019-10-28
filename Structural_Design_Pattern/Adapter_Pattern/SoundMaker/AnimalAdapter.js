const { Lion, Dog } = require('./Animals')

const makeSound = function(fn){
    return fn()
}

const LionAdapter = function(){
    const lion = new Lion();
    return { makeSound: makeSound(lion.roar) }
};

const DogAdapter = function(){
    const dog = new Dog();
    return { makeSound: makeSound(dog.bark) }
}


module.exports = { DogAdapter, LionAdapter };
