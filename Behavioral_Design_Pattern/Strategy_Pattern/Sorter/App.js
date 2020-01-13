const Context = require('./Context');

const RandomNumsInArr = function(amount){
    let count = 0;
    let arr = []
    while(count < amount){
       arr.push(Math.floor(Math.random() * amount));
       count++;
    };
    return arr;
};

const arr = RandomNumsInArr(100)
const sorter = new Context(arr);

module.exports = sorter;
