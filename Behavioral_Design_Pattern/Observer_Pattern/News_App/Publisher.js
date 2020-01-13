const Publisher = function(name){
    this.name = name;
    this.subscribers = {};
}

Publisher.prototype.subscribe = function(eventType, subscriber){
    if (!this.subscribers[eventType]){
        this.subscribers[eventType] = []
    }

    this.subscribers[eventType].push(subscriber)
}

Publisher.prototype.unSubscribe = function(eventType, subscriber){
    if (!this.subscribers[eventType]){
        return;
    }

    this.subscribers[eventType] = this.subscribers[eventType].filter(function(subsc){
        return subsc.name !== subscriber.name       
    });

};

Publisher.prototype.notify = function(eventType, data){
    const nameOfPublisher = this.name
    this.subscribers[eventType].forEach(function(subscriber){
        subscriber.update(nameOfPublisher, data)
    })
}

module.exports = Publisher;
