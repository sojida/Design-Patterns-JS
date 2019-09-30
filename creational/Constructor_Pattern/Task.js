const Task = function(data){
    this.name = data.name;
    this.completed = false;
}

Task.prototype.doTask = function(){
    console.log(`${this.name} is being worked on...`)
    this.completed = false;
};

Task.prototype.saveTask = function(){
    console.log(`${this.name} is saving`);
};

Task.prototype.update = function(name){
    const previousName = this.name;
    this.name = name;
    console.log(`${previousName} changed to ${this.name}`);
};

Task.prototype.isComplete = function(){
    console.log(this.completed);
    return this.completed;
};

module.exports = Task;
