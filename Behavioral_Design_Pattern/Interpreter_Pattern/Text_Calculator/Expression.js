const Expression = function(name, action){
    this.name = name;
    this.action = action;
};

Expression.prototype = {
    interpret: function(context){
        if (!context.input.length){
            return;
        } else if (context.hasExpression(this.name)) {
            context.output = context.input.split(' ')
            .filter((item) => Number(item))
            .map((item) => Number(item))
            .reduce(this.action)
        }
    }
};

module.exports = Expression;
