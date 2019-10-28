const { mailService, InAppService, SMSservice } = require('./concreteDecorators');
const { setNotifier } = require('./bases');


const notifyUser = function(user, infomation){
    let notifyService = setNotifier();
        
    if (user.sms){
        notifyService = SMSservice(notifyService, infomation)
    }

    if (user.mail){
        notifyService = mailService(notifyService, infomation)
    }

    if (user.inApp){
        notifyService = InAppService(notifyService, infomation)
    }

    return notifyService.notify(infomation)

}

const sam = {
    sms: false,
    mail: false,
    inApp: false,
}


notifyUser(sam, 'Sam, we are open for business');

module.exports = notifyUser;
