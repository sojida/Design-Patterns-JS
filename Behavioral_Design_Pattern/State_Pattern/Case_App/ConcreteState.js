const State = require('./State');

const LowerCaseState = function(){
    State.call(this);

    this.write = function(statement){
        this.context.setState(new UpperCaseState());
        return statement.toLowerCase()
    };
};


const UpperCaseState = function(){
    State.call(this);
    this.count = 0;
    this.write = function(statement){
        if (this.count >= 1){
            this.count = 0;
            this.context.setState(new LowerCaseState());
        } else {
            this.count++;
        }
        return statement.toUpperCase();
    };
};

module.exports = { LowerCaseState, UpperCaseState };
