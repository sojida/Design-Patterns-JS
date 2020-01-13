const { ArrayCollection } = require('./Aggregate');
const { ArrayIteraror, ReverseArrayIteraror } = require('./iterator');


const Arrayrator = new ArrayCollection([1, 2, 3, 'sam', 'fred', 'james']);

module.exports = {Arrayrator, ArrayIteraror, ReverseArrayIteraror}
