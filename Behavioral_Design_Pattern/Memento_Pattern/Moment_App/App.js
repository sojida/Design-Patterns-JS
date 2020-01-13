const Caretaker = require('./Caretaker');
const Originator = require('./Originator');

const PersonStore = new Caretaker();
const Person = new Originator({name: 'Adesoji Daniel', age: 21});



module.exports = { PersonStore, Person };
