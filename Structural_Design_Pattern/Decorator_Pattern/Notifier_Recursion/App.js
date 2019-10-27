const { mailService, InAppService, SMSservice } = require('./concreteDecors');
const { setNotifier } = require('./bases');



const NotifyApp = function(){
    const notifyUser = function(user, infomation){
        let notifyService = setNotifier(user);
            
        if (user.sms){
            notifyService = SMSservice(notifyService)
        }
    
        if (user.mail){
            notifyService = mailService(notifyService)
        }
    
        if (user.inApp){
            notifyService = InAppService(notifyService)
        }
    
        return notifyService.notify(infomation)
    
    }

    const getMSg = function(user, msg){
        let getService = setNotifier();
    
        if (user.sms){
            getService = SMSservice(getService)
        }
    
        if (user.mail){
            getService = mailService(getService)
        }
    
        if (user.inApp){
            getService = InAppService(getService)
        }
    
        return getService.getMsg(msg)
    
    }

    return {
        getMSg,
        notifyUser
    }

}

module.exports = NotifyApp;
