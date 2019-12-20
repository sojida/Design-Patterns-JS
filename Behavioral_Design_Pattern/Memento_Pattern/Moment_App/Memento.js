function Memento(state){
    this.state = JSON.stringify(state);
}

Memento.prototype.getState = function(){
    return JSON.parse(this.state)
}

module.exports = Memento;