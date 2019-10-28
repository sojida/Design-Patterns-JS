const notifierInterface = require('./notifierInterface');

const setNotifier = function(){
    const baseNotifierInterface = Object.assign({}, notifierInterface)

    return baseNotifierInterface;
}

const Decorator = function(comp, info){
    const component = comp;
    const newNotifierInterface = Object.assign({}, notifierInterface);

    component.notify(info);
    return newNotifierInterface
}

module.exports = { setNotifier, Decorator };
