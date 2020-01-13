const Subscriber = function(name){
    this.name = name;
    this.received = [];
    this.update = function(publisher, data){
        this.received.push({data, publisher});
    }
}

module.exports = Subscriber;
