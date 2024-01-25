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
  title: 'Buy Chocolate',
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

let todoData5 = {
  title: 'Go Running',
  month: '12',
  year: '2023',
  description: 'So you can eat more Xmas cookies',
};

let todoData6 = {
  title: 'Fold laundry',
  month: '10',
  year: '2023',
  description: 'Fold your Halloween costume too',
};

let invalidTodoData = {
  title: '',
  month: '5',
  year: '2022',
  description: 'Invalid, title cannot be blank or missing',
};

let todoSet = [todoData1, todoData2, todoData3, todoData4, todoData5];

// Todo class to create new todo objects with unique ids
class Todo {
  constructor(title, month, year, description) {
    this.id = Todo.#generateId();
    this.title = title;
    this.completed = false;
    this.month = month;
    this.year = year;
    this.description = description;
  }

  static #idCounter = 0;

  static #generateId() {
    return String(++Todo.#idCounter);
  }

  isWithinMonthYear(month, year) {
    return (this.month === month && this.year === year);
  }
}

// todoList object contains, manipulates, and protects integrity of todo collection
const todoList = (() => {
  let todos = [];

  return {
    // initialize todos collection with todo objects using info in given array of objects
    initialize(todoSet) {
      todoSet.forEach((todoData) => {
        this.add(todoData);        
      });

      return this.returnAll();
    },

    // add a new todo with a unique id to collection, and return copy of new todo object
    add(todoData) {
      let { title, month, year, description } = todoData;

      if (!title || typeof title !== 'string') {
        return { id: 'invalid', title: 'invalid' };
      } else {
        let newTodo = new Todo(title, month, year, description);
        todos.push(newTodo);
        return {...newTodo};
      }
    },

    // delete a todo matching given id (string type), and return copy of deleted todo object
    delete(id) {
      let todoIdx = todos.indexOf((todo) => todo.id === id);
      let todoCopy = {...todos[todoIdx]};
      todos.splice(todoIdx, 1);
      return todoCopy;
    },

    // update a todo object matching given id with any properties provided in given object
    update(newTodoData) {
      let { id, title, completed, month, year, description } = newTodoData;
      let todo = todos.find((todo) => todo.id === id);
      if (todo === undefined) {
        return { id: 'invalid', title: 'invalid' };
      } else {
        if (title !== undefined) todo.title = title;
        if (completed !== undefined) todo.completed = completed;
        if (month !== undefined) todo.month = month;
        if (year !== undefined) todo.year = year;
        if (description !== undefined) todo.description = description;
        return {...todo};
      }
    },

    // return copy of todo object based on given id (string type), or invalid object is unavailable
    return(id) {
      if (typeof id !== 'string') id = String(id);
      
      let todo = todos.find((todo) => todo.id === id);
 
      if (todo === undefined) {
        return { id: 'invalid', title: 'invalid' };
      } else {
      return {...todo};
      }
    },

    // return array containing a copy of each todo object in collection
    returnAll() {
      let todosCopy = [];

      todos.forEach((todo) => {
        todosCopy.push({...todo});
      });

      return todosCopy;
    },
  }
})();  

// todoManager object interfaces with todoList to return todos based on queries
const todoManager = {
  todos: todoList,

  // return array of todo objects filtered by any given query criteria
  query(criteria) {
    let allTodos = this.todos.returnAll();
    
    if (criteria === undefined) return allTodos;

    let { completed, month, year} = criteria;
    let filterFunc;
    
    if (completed && month !== undefined && year !== undefined) {
      filterFunc = (todo) => (todo.completed && todo.month === month && todo.year === year);
    } else if (month !== undefined && year !== undefined) {
      filterFunc = (todo) => (todo.month === month && todo.year === year);
    } else if (completed !== undefined) {
      filterFunc = (todo) => todo.completed;
    }

    return allTodos.filter(filterFunc);
  },
}
