const Context = require('./Context');
const Expression = require('./Expression');

const TextCalculator = function (sentence){
    const context = new Context(sentence);
    const tree = [];

    tree.push(new Expression('add', (a, b) => a + b));

    tree.push(new Expression('subtract', (a, b) => a - b));

    tree.push(new Expression('multiply', (a, b) => a * b));

    tree.push(new Expression('divide', (a, b) => a / b));

    for(let i = 0; i < tree.length; i++){
        tree[i].interpret(context)
    };

    return context.output;
}


module.exports = TextCalculator;
