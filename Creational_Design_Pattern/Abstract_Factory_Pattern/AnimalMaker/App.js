const AbstractFactory = require('./AbstractFactory');
const { Lion, Tiger, Ball } = require('./AbstractProducts');

const AnimalMaker = AbstractFactory(['eat'])

AnimalMaker.registerProducts([Lion, Tiger])

AnimalMaker.createProduct('Lion', {color: 'black', name: 'Scar'})
AnimalMaker.createProduct('Tiger', {type: 'indian', name: 'Kash'})

module.exports = { AbstractFactory, Lion, Tiger, Ball }

