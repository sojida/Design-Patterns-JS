const Caretaker = function(){
    this.momentos = [];
};

Caretaker.prototype.addMomento = function(momento){
    this.momentos.push(momento);
};

Caretaker.prototype.getMomento = function(index){
    return this.momentos[index];
};

module.exports = Caretaker;
