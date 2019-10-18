const Lion = function(){
    this.name = 'Lion'
    this.roar = function(){
        return 'Rooooooaaaarrr'
    }
}


const Dog = function(){
    this.name = 'Dog'
    this.bark = function(){
        return 'Wooof'
    }
}

module.exports = { Lion, Dog };
