const { Decorator } = require('./bases')


const mailService = function(comp, infomation){
    const component = Decorator(comp, infomation);

    component.notify = function(info){
        console.log('Sending message via mail....', info)
    }

    return component
}


const SMSservice = function(comp, infomation) {
    const component = Decorator(comp, infomation);

    component.notify = function(info){
        console.log('sending message via sms...', info);
    }


    return component;
}

const InAppService = function(comp, infomation){
    const component = Decorator(comp, infomation);
    

    component.notify = function(info) {
        console.log('sending message in app....', info)  
    }


    return component;
}


module.exports = {mailService, InAppService, SMSservice}