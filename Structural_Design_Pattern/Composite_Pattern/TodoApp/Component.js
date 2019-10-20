// Interface-ish
const TodoComponent = function(){
    
    this.complete = function(){
        this.completeStatus = true
    }
}

const TodoItem = function(name){
    this.name = name
    this.completeStatus = false;
    TodoComponent.call(this)
    
}

const TodoList = function(name){
    this.name = name
    this.completeStatus = false;
    this.todos = []
    TodoComponent.call(this)

    this.addTodo = function(todo){
        this.todos.push(todo)
    }

    this.removeTodo = function(item){
        this.todos = this.todos.filter(function(todo){
            return todo.name !== item.name
        })
    }

    this.getTodos = function(){
        return this.todos
    }

    this.complete = function(){
        for(let i = 0; i < this.todos.length; i++)
        {
            this.todos[i].complete()
        }
        this.completeStatus = true
    }

    this.hasTodo = function(name){
        for (let i = 0; i < this.todos.length; i++){
            if (this.todos[i].name === name){
                return true
            }
        }
        return false
    }
}

module.exports = { TodoItem, TodoList };
