const { Decorator } = require('./bases')
const notifierInterface = require('./interface');


const mailService = function(comp){
    const component = Decorator(comp);
    const messageInterface = Object.assign({}, notifierInterface)
    
    messageInterface.notify = function(info){
        console.log('Sending message via mail....', info)
        component.notify(info)
    }

    return messageInterface
}


const SMSservice = function(comp) {
    const component = Decorator(comp, 'notify');
    const messageInterface = Object.assign({}, notifierInterface)


    messageInterface.notify = function(info){
        console.log('Sending message via SMS....', info)
        component.notify(info)

    }

    return messageInterface
}

const InAppService = function(comp){
    const component = Decorator(comp, 'notify');
    const messageInterface = Object.assign({}, notifierInterface)


    messageInterface.notify = function(info){
        console.log('Sending message in App....', info)        
        component.notify(info)

    }

    messageInterface.getMsg = function (msg){

        const newMsg = msg + 'aGESSSS'
        return component.getMsg(newMsg)
    }

    return messageInterface
}


module.exports = {mailService, InAppService, SMSservice}