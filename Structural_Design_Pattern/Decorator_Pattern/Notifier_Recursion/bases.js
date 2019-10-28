const notifierInterface = require('./interface');

const setNotifier = function(info){
    const baseNotifierInterface = Object.assign({}, notifierInterface)

    baseNotifierInterface.notify = function(info){
        console.log('Message sent')
    }

    baseNotifierInterface.getMsg = function(msg){
        return msg
    }

    return baseNotifierInterface;
}

const Decorator = function(comp){
    const component = comp;
    const newNotifierInterface = Object.assign({}, notifierInterface);

    newNotifierInterface.notify = function(info){
        component.notify(info)
    }

    newNotifierInterface.getMsg = function(msg){
        return component.getMsg(msg)
    }

    
    return newNotifierInterface


}

module.exports = { setNotifier, Decorator };
