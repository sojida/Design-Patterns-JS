const Animal = function(animalName){
    this.name = animalName 
}

Animal.prototype.eat = function(){
    return `${this.name} is eating`
}

const Lion = function(props){
    Animal.call(this, 'Lion')
    this.props = props
}

Lion.prototype = Animal.prototype

const Tiger = function(props){
    Animal.call(this, 'Tiger')
    this.props = props
}

Tiger.prototype = Animal.prototype

const Ball = function(props){
    this.props = props
}

module.exports = { Lion, Tiger, Ball };
