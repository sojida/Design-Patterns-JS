const Context = function(sentence){
    this.input = sentence;
    this.output = 'Could not interpret text';
};

Context.prototype = {
    hasExpression: function(text){
        return this.input.toLowerCase().includes(text)
    }
}

module.exports = Context;
