const Task = require('./creational/Constructor_Pattern/Task');
const TaskService = require('./creational/Module_Pattern/TaskService')({name: 'Postgres'});

const task1 = new Task(TaskService.getData(1))
const task2 = new Task({name: 'Learn about Git'})
const task3 = new Task({name: 'Watch some series'})
const task4 = new Task({name: 'Read books on functional programming'})

task1.doTask()
task2.doTask()
task3.doTask()
task4.isComplete()
task1.update('Learn about life')
TaskService.postData(task4)