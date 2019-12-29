class Model {
    constructor(){
        this.todos = [
            {
                id: 1,
                text: 'Buy a Benz Car',
                complete: false
            },
            {
                id: 1,
                text: 'Buy a Mansion',
                complete: false
            },
        ]
    }

    /******Handle addition of todos*******/
    addTodo(todoText){
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.lenth -1].id + 1 : 1,
            text: todoText,
            complete: false
        }

        this.todos.push(todo)
    }

    /******Handle editing of todos*******/
    editTodo(id, updatedText){
        // map through todo, and update the text of a particular todo using id
        this.todos = this.todos.map( todo => todo.id === id ? {
            id: todo.id,
            text: updatedText,
            complete: todo.complete
        } : todo)
    }

    /******Handle delete of todos*******/
    deleteTodo(id){
        this.todos = this.todos.filter(todo =>todo.id !== id )
    }

    /******Toggle completed todos*******/
    toggleTodo(id){
        this.todos = this.todos.map( todo => todo.id === id ? {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
        } : todo )
    }


    
}








/*********VIEW**********/
class View{
    constructor(){

    }
}


/*********CONTROLLER**********/
class Controller {
    constructor(model, view){
        this.model = model
        this.view = view
    }
}


const app = new Controller(new Model(), new View())