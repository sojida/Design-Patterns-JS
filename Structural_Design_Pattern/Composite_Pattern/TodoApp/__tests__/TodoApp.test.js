const { MyTodo } = require('../App');

test('Todo App', () => {
    MyTodo.createTodo('Read a book')
    MyTodo.createTodo('Cook meal')
    MyTodo.createTodo('Play Games')
    MyTodo.createTodoList('Article Project')
    MyTodo.addToTodo('Article Project', 'Research Article')
    MyTodo.addToTodo('Article Project', 'Write an article')
    MyTodo.addToTodo('Play Games', 'Check for a new version of my game')

    const { todo: CookMeal } = MyTodo.findTodo('Cook meal');
    const { todo: Gaming } = MyTodo.findTodo('Play Games');
    const { todo: Project } = MyTodo.findTodo('Article Project');
    const { todo: ReadBook} = MyTodo.findTodo('Read a book');
    const { todo: ResearchArticle } = MyTodo.findTodo('Research Article');

    expect(CookMeal.name).toEqual('Cook meal')
    MyTodo.removeTodo('Cook meal')
    expect(MyTodo.findTodo('Cook meal')).toEqual(null)

    expect(Project.hasTodo('Research Article')).toEqual(true)
    expect(Project.hasTodo('Research No Articles')).toEqual(false)

    expect(ReadBook.completeStatus).toEqual(false)
    ReadBook.complete()
    expect(ReadBook.completeStatus).toEqual(true)

    expect(Project.completeStatus).toEqual(false)
    expect(ResearchArticle.completeStatus).toEqual(false)
    Project.complete()
    expect(Project.completeStatus).toEqual(true)
    expect(ResearchArticle.completeStatus).toEqual(true)

    const GamingTodo = Gaming.getTodos();
    expect(GamingTodo.length).toEqual(1)
    expect(GamingTodo[0].name).toEqual('Check for a new version of my game')
})
