/*
Problem: Todo List

Rules:
Following data are available to be used as inputs:

  todo data:
  Use this data for creating a single todo object. This is an object containing key-value pairs for title, month, year, and description; with the values always being strings. 
  * I need to generate a unique id for each todo
  * completed property should default to false
  * Objects created should only contain the specified properties and methods!
  
  todo set:
  * The format of the input data you will use for initializing the todoList with todo objects. It's an array of todoData.
  * Adjust the number of todoData in the todoSet to suit testing needs.

STEPS to do TODO stuff:

SETUP and MGMT of each todo collection:
  Initialize a todoList with initial todos from todoSet array of objects
  Add new todo to todos array, pass in a todoData object
  Return a specific todo from the todos array, based on its ID
  Update one of the todo objects in the todos array
  Delete a todo object from the todos array

QUERIES:
  Return all todo objects from todo array in todoList
  Return all completed todo objects from todo array in todoList
  Return onlys todos matching month-year combo
  Return only COMPLETED todos matching month-year combo


TESTs for TODOs:

SETUP and MGMT of each todo collection:
  Initializing a todoList with a todoSet of one or more todoData objects works
    todoList.initialize(todoSet) is defined
    todoList.initialize(todoSet) logs a new todo for each todoData in todoSet

  New todo items in collection are created correctly
    todoManager return all todos is defined
    returned objects are correct todos with id, title, completed, month, year, description
    returned objects each respond to isWithinMonthYear(month, year)
*/
