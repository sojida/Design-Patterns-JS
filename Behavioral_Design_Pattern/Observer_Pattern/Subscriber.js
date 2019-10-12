const Subscriber = function(name){
    this.name = name;
    this.update = function(publisher, data){
        console.log(`Updating ${this.name} from ${publisher} with ${data}`)
    }
}

module.exports = Subscriber;
