const { LowerCaseState } = require('./ConcreteState');
const Context = require('./Context');

const defautState = new LowerCaseState();
const caseContext = new Context(defautState);

module.exports = caseContext;

// Example got from: https://en.wikipedia.org/wiki/State_pattern
