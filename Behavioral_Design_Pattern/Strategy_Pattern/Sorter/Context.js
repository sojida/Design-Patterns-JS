const Context = function(item){
    this.item = item;
    this.sorter = null;
}

Context.prototype.setStrategy = function(stategy){
    this.sorter = stategy
};

Context.prototype.sort = function(){
    return this.sorter.sort(this.item)
};

module.exports = Context;
