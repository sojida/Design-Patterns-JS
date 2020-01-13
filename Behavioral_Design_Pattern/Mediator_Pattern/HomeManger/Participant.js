const Particpant = function(service, clientName, mediator){
    this.mediator = mediator;
    this.service = service;
    this.clientName = clientName;
    this.available = true;
    this.messages = [];
}

Particpant.prototype.receive = function(message, from){
    this.messages.push({message, from})
}

Particpant.prototype.send = function(message, to){
    // This is where the notify interface is shared with participants
    this.mediator.notify(message, this.clientName, to)
}

module.exports = Particpant;
