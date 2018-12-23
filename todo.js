
// Store Todos & Display Todos
  let todoList = {
  todos: ["item1","item2","item3"],
  completed: true,
  displayTodos: function(){
   },
// Add Todos
  addTodos: function(todo) {
    return todos.push("item4")
    
  },
// Change Todos using filter method
  changeTodos: function(position, value){
    return this.filter(function(){
      return !todoList.completed
    })
  }, 
// Change Todos using splice method
  deleteTodos: function (){
    this.todos.splice(position, 1);
  }
  
   }
   console.log(todoList.todos)
  
   
  



