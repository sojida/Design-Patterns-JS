const Context = function(defaultState){
    this.state = defaultState;
    defaultState.setContext(this);

    this.write = function(statement){
        return this.state.write(statement)
    }

    this.setState = function(newState){
        this.state = newState;
        newState.setContext(this);
    }
};

module.exports = Context;
