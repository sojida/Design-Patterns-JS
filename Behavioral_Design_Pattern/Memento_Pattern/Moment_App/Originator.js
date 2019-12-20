const Memento = require('./Memento');

const Originator = function(state){
    this.state = state;
}

Originator.prototype.createMemento = function(){
    return new Memento(this.state);
};

Originator.prototype.setState = function(memento){
    this.state = memento.getState();
};



module.exports = Originator;
