const notifyUser = require('../App');
const notifierInterface = require('../notifierInterface');

test('Notifier', () => {
    const sam = {
        sms: true,
        mail: true,
        inApp: true,
    }
    
    const peter = {
        sms: true,
        mail: false,
        inApp: true,
    }
    
    const james = {
        sms: false,
        mail: false,
        inApp: true,
    }
    
    const phil = {
        sms: false,
        mail: false,
        inApp: false,
    }

    notifyUser(sam, 'Sam, we are open for business');
    notifyUser(peter, 'Peter, we are open for business');
    notifyUser(james, 'James, we are closed for business');
    notifyUser(phil, 'Phil, we are closed for business');

    expect(notifierInterface.notify()).toEqual(undefined)
    
    
})

