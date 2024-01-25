(function() {
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

*/

let todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

let todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

let todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

let todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

let todoSet1 = [todoData1, todoData2, todoData3, todoData4];
let todoSet2 = [todoData1, todoData2, todoData3, todoData4];
let todoSet3 = [todoData1, todoData2, todoData3, todoData4];
let todoSet4 = [todoData1, todoData2, todoData3, todoData4];

// responsible for creating todo objects, with unique ids
class Todo {
  constructor(title, completed, month, year, description) {
    this.id = Todo.#generateId();
    this.title = title;
    this.completed = false;
    this.month = month;
    this.year = year;
    this.description = description;
  }

  static #Id = 0;

  static #generateId() {
    return ++Todo.#Id;
  }

  isWithinMonthYear(month, year) {
    // ** SHOULD I convert month and year to String if they're not already Strings?
    return (this.month === month && this.year === year);
  }
}

const todoList = (() => {
  todos = [];

  return {
    initialize(todoSet) {
      todoSet.forEach((todoData) => {
        this.add(todoData);        
      });
    },

    add(todoData) {
      let { title, month, year, description } = todoData;
      todos.push(new Todo(title, month, year, description));
    },
  }
})();  
//todoList:
  // has a collection of todo objects
  // Return ONLY A COPY of the collection when a method wants to returns all or a subset of it.
  // Do NOT allow users or other objects to manipulate the values of todo objects directly.

  // Operations (and properties):
  // * todo objects collection
  // * adds a todo object to the collection
  // * deletes a todo object from the collection
  // * initializes the collection with todo objects
  // * updates exisiting properties of a specific todo object
  // * returns a specified todo object based on its id property

const todoManager = {
  // todoManager object with state and behaviors as needed
}
// todoManager:
//   Interfaces with todoList object.
//   Has methods that query the todoList to return all or a subset of the todo objects as an array of todo objects
//   Can query:
//   * return all todo objects
//   * return all completed todo objects
//   * return all objects within a given month-year combo
//   * return all completed todo objects within a given month-year combo
// }

/*

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

for now...

*/

// todoList.initialize(todoSet1); // HOW TO TEST? Does it return something? Or output?
// console.log(todoList.todos); // undefined, unable to access todos collection from outside
// console.log(todoManager.allTodos()); // return all todos from todoList todos collection 

})();