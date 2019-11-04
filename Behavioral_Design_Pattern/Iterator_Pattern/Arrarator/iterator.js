const iterator = {
    next: function(){return},
    hasNext: function(){return false},
}

const ArrayIteraror = function(items) {
    const iteratorInterface = Object.assign({}, iterator);
    const state = items;
    let index = 0;

    iteratorInterface.next = function(){
        return state[index++]
    }

    iteratorInterface.hasNext = function(){
        return index < state.length
    }

    return iteratorInterface;
}

const ReverseArrayIteraror = function(items) {
    const iteratorInterface = Object.assign({}, iterator);
    const state = items;
    let index = items.length - 1;

    iteratorInterface.next = function(){
        return state[index--]
    }

    iteratorInterface.hasNext = function(){
        return index >= 0
    }

    return iteratorInterface;
}

module.exports = { ArrayIteraror, ReverseArrayIteraror, iterator }
