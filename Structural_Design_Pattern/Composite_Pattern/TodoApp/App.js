const { TodoList, TodoItem } = require('./Component');

const TodoApp = function (name) {
    const Todo = new TodoList(name);

    const createTodo = function(name){
        Todo.addTodo(new TodoItem(name))
    }

    const createTodoList = function(name){
        Todo.addTodo(new TodoList(name))
    }

    const findTodo = function(name){
        const recurseFunc = function(todo, name, parentTodo){
            if (todo.name === name){
                return { todo, parentTodo };
            }

            // if it has todos
            if (todo.todos){
                let result = null;
                for(let i = 0; i < todo.todos.length && result === null; i++){
                    result = recurseFunc(todo.todos[i], name, todo)
                }

                return result;
            }

            return null;
        }

        return recurseFunc(Todo, name, Todo)

    }


    const addToTodo = function(name, newTodo){
        const { todo, parentTodo } = findTodo(name)


        if (todo && todo instanceof TodoList){
            todo.addTodo(new TodoItem(newTodo))
            console.log(`Todo added to ${todo.name}`)
        }

        if (todo && todo instanceof TodoItem){
            parentTodo.removeTodo(todo)
            const newTodoList = new TodoList(todo.name)
            newTodoList.addTodo(new TodoItem(newTodo))
            parentTodo.addTodo(newTodoList)
            console.log(`${todo.name} updated and added "${newTodo}" to collection`)
        }
    }

    const removeTodo = function(name){
        const { todo, parentTodo } = findTodo(name)
        parentTodo.removeTodo(todo)
        console.log(`Removed ${todo.name} from ${parentTodo.name}`)
    }


    return {
        createTodo,
        createTodoList,
        addToTodo,
        findTodo,
        removeTodo,
    }
}

const MyTodo = TodoApp('My Todos')

module.exports = { MyTodo }
