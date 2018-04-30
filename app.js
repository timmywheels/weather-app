//Todo List App

//Version 1 Requirements

//store todos
var todos = ['item 1', 'item 2', 'item 3'];

// //display todos
// console.log(todos);

// //add a new todo
// todos.push('item 4', 'item 5');

// //change a todo
// todos[0] = 'item 1 changed';

// //delete a todo
// todos.splice(1, 1);



//Version 2 Requirements

//function to display todos
function displayTodos(){
	console.log('My Todos: ', todos);
}

//function to add new todo
function addTodo(todo){
	todos.push(todo);
}

//function to change an exisiting todo
function changeTodo(position, newValue){
  todos[position] = newValue;
}

//function to delete an exisiting todo
function deleteTodo(position){
	todos.splice(position, 1);
}

