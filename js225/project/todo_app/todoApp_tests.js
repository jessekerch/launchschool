var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message),
      passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}

test("Todo is defined", function() {
  return typeof Todo !== "undefined";
});

test("Todo is a function", function() {
  return typeof Todo === "function";
});

test("Todo generateId function is private and not accessible outside class", function() {
  return typeof Todo.generateId !== "function";
});

test("Todo idCounter is private and not accessible outside class", function() {
  return Todo.idCounter === undefined;
});

test("todoList is defined", function() {
  return typeof todoList !== "undefined";
});

test("todoList is an object", function() {
  return typeof todoList === "object";
});

test("todoList todos collection is inaccessible (private)", function() {
  return todoList.todos === undefined;
});

test("todoList initialize method is defined", function() {
  return typeof todoList.initialize === "function";
});

test("todo collection contains all todoSet items after initialization", function() {
  todoList.initialize(todoSet);
  return todoManager.query().length === todoSet.length;
});

test("todo collection ids are all unique ", function() {
  let ids = todoManager.query().map((todo) =>todo.id);
  let idQtys = ids.reduce((acc, id) => {
    acc[id] = acc[id] ? acc[id] + 1 : 1;
    return acc;
  }, {});
  return (
    ids.length == todoSet.length 
    && Object.values(idQtys).every((qty) => qty === 1)
  );
});

test("todoList update method is defined", function() {
  return typeof todoList.update === "function";
});

test("todoList update method updates todo with given month value", function() {
  todoList.update({ id: '2', month: '12' });
  return todoList.return('2').month === '12';
});

test("todoList update method updates todo with given completed value", function() {
  todoList.update({ id: '3', completed: true });
  return todoList.return('3').completed === true;
});

test("todoList update method updates both completed and month values", function() {
  todoList.update({ id: '1', completed: true, month: '12'});
  return (
    todoList.return('1').completed === true
    && todoList.return('1').month === '12'
  );
});

test("todoList update method returns invalid object if given id not found", function() {
  let result = todoList.update({ id: '_' });
  return (
    result.id === 'invalid'
    && result.title === 'invalid'
  );
});

test("todoList add method is defined", function() {
  return typeof todoList.add === "function";
});

test("todoList add method adds a new item with a unique id", function() {
  let startingCount = todoManager.query().length;
  let startingIds = todoManager.query().map((todo) =>todo.id);

  let newTodo = todoList.add(todoData6);

  return (
    startingIds.every((id) => id !== newTodo.id)
    && todoManager.query().length === startingCount + 1
  );
});

test("todoList returns invalid object if given object missing required title property", function() {
  let startingCount = todoManager.query().length;
  let result = todoList.add(invalidTodoData);
  return (
    result.id === "invalid"
    && result.title === "invalid"
    && todoManager.query().length === startingCount
  );
});

test("todoList delete method is defined", function() {
  return typeof todoList.delete === "function";
});

test("todoList delete method deletes todo with given id", function() {
  let startingCount = todoManager.query().length;
  let deleteId = String(startingCount);

  todoList.delete(deleteId);

  return (
    todoList.return(deleteId).title === 'invalid'
    && todoManager.query().length === startingCount - 1
  );
});

test("todoList return method is defined", function() {
  return typeof todoList.return === "function";
});

test("todoList return method returns a copy of todo object with given id", function() {
  return typeof todoList.return('1') === "object";
});

test("todoList return method returns object with title matching given id", function() {
  return todoList.return('1').title === todoSet[0].title;
});

test("todoList return method returns a todo object copy, not actual todo", function() {
  return todoList.return('1') !== todoList.return('1');
});

test("todoList return method returns invalid object if no matching todo available", function() {
  let result = todoList.return('_');
  return (
    result.id === "invalid"
    && result.title === "invalid"
  );
});

test("todoList returnAll method is defined", function() {
  return typeof todoList.returnAll === "function";
});

test("todoList returnAll method returns a collection of all todo object copies", function() {
  return todoList.returnAll().length === todoSet.length;
});

test("todoManager is defined", function() {
  return typeof todoManager !== "undefined";
});

test("todoManager is an object", function() {
  return typeof todoManager === "object";
});

test("todoManager query method is defined", function() {
  return typeof todoManager.query === "function";
});

test("todoManager query method with no argument returns all todo objects", function() {
  return todoManager.query().length === todoSet.length;
});

test("todoManager query with completed criteria returns all completed todos", function() {
  let queryCount = todoManager.query({ completed: true }).length;
  let filterCount = todoManager.query().filter((todo) => todo.completed).length;
  return queryCount === filterCount;
});

test("todoManager query with month and year criteria returns matching todos", function() {
  let queryCount = todoManager.query({ month: '12', year: '2017' }).length;
  let filterCount = todoManager.query().filter((todo) => {
    return (todo.month === '12' && todo.year === '2017');
  }).length;
  return queryCount === filterCount;
});

test("todoManager query with completed, month, and year criteria returns matching todos", function() {
  let criteria = { completed: true, month: '12', year: '2017' };
  let queryCount = todoManager.query(criteria).length;
  let filterCount = todoManager.query().filter((todo) => {
    return (
      todo.completed
      && todo.month === '12'
      && todo.year === '2017'
    );
  }).length;
  return queryCount === filterCount;
});
