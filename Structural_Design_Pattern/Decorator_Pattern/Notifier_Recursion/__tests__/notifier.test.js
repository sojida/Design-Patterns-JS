const NotifyApp = require('../App');
const baseInterface = require('../interface')

test('Notifier App', () => {
    const app = NotifyApp();

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

    const phil = {
        sms: false,
        mail: false,
        inApp: false,
    }


    app.notifyUser(sam, 'Sam, we are open for business');
    app.notifyUser(peter, 'Peter, we are open for business');
    app.notifyUser(phil, 'Phil, we are open for business');
    const getMessage = app.getMSg(sam, 'message');
    const getMessage2 = app.getMSg(peter, 'message');
    const getMessage3 = app.getMSg(phil, 'message');

    expect(getMessage).toEqual('messageaGESSSS');
    expect(getMessage2).toEqual('messageaGESSSS');
    expect(getMessage3).toEqual('message');

    expect(baseInterface.notify()).toEqual(undefined)
})
