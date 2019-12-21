const State = function(){
    this.context = null;

    this.setContext = function(context){
        this.context = context;
    };
};

module.exports = State;
