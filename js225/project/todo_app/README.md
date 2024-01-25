# Todo App
by Jesse Kercheval \
Launch School JS229 take home project - for LS staff eyes only

## About
I have created a Todo app using the object-oriented JavaScript approach taught in LaunchSchool. Below are extensive notes on app specifications and how they work.

**Basics:**
* The todo app has a todoManager. `todoManager` is an object with a `todos` property referencing `todoList`. It also has one method for returning an array of todo objects from todoList based on given criteria. Note that all returned objects are copies, not pointers to actual todo objects in the todoList collection. In this way, data integrity is maintained.

* The todoList function has collection of todo objects. It does not allow users or other objects to manipulate the values of todo objects directly. The object returned by the `todoList` function has methods for manipulating the collection of todos.

* Finally, the app has a `Todo` constructor function using class syntax which is responsible for creating the todo objects. The todo objects should have unique ids.

The following data are available to be used as input:

**todo data:**

Each `todoData` object defined at the top of the code may act as data for creating a todo object. The objects each contain key-value pairs for title, month, year, and description; with the values always being strings.
  * the 'title' key is required to have a value, or a todo object will not be created
  * the 'completed' key will default to false, unless a value is provided in the `todoData` object.
  * all other keys are optional
    
**todo set:**

The `todoSet` array defined at the top of the code may act as a collection of sample data for creating todo objects.
  * The provided `todoSet` is an array of `todoData`, containing 4 elements.
  * `todoSet` is used to initialize the `todoList` with 4 initial todo objects.

## Getting Started
I used the following files to run and test this application:
- todoApp.js
- todoApp_tests.js
- index.html
- Firefox Browser 120.0.1

## Installation
Download and unzip the `todoApp file`
Make sure all files are in the same folder
Open the index.html with the browser

## Usage
**todoList methods**
The object assigned to `todoList` may be called with the following methods and given arguments:
* `initialize`: Initializes the `todoList` `todos` collection with new todo objects using each object from given array.
* `add`: Adds a new todo object to `todoList` `todos` collection. New todo object will have a unique id but other key-value pairs will reflect those of the given object. Returns a copy of a the new todo object. If `title` value of given object is not a valid string value, no new todo object will be created and an invalid object literal `{ id: 'invalid', title: 'invalid' }` will be returned.
* `delete`: Deletes a specified todo object that has an id property value matching the given string value. Returns a copy of the deleted todo object. If no todo object matches given id, returns an invalid object literal `{ id: 'invalid', title: 'invalid' }`.
* `update`: Updates existing properties of a specific todo object that has an id property value matching that in the given object. Any other values in the given object will be updated in matching properties of the specified todo object. Returns a copy of the updated todo object.
* `return`: Returns a copy of a specified todo object that has an id property value matching the given string value. If no todo object matches given id, returns an invalid object literal `{ id: 'invalid', title: 'invalid' }`.
* `returnAll`: Returns an array containing a copy of each todo object in `todoList` `todos` collection.

**todoList private data**
* `todos`: The `todoList` contains a `todos` array which is a collection of todo objects. Methods of object returned by `todoList` maintain access to this array through their closure for manipulating the collection of objects (i.e., adding, updating, deleting, etc.). However, `todoList` maintains the integrity of the collection by returning only a copy of the collection anytime a method returns all or a subset of it. It does not allow users or other objects to manipulate the values of todo objects directly, as the `todos` array is private and accessible only within the closure.

**todoManager `query` method**

The `query` method of the `todoManager` accepts a `criteria` object as an argument. This argument is optional. The `criteria` object may have any or all of the following properties: a `completed` property with a boolean value, a `month` property with a string value, a `year` property with a string value.
* `query()`: If no argument given, returns a copy of all todo objects from todo array in `todoList`
* `query(criteria)`:
1. If given `criteria` object `completed` value is `true`, returns all completed todo objects from todo array in `todoList`
2. If given `criteria` object `completed` value is `false`, but `month` and `year` contain string values, returns todo objects matching month-year combination from todo array in `todoList`.
3. If given `criteria` object `completed` value is `true` and `month` and `year` contain string values, returns only completed todo objects matching month-year combination from todo array in `todoList`.

**todoManager data**
* The `todoManager` object has a `todos` property which references `todoList`

## Testing

A list of all test case descriptions appears on the homepage of index.html. Each tests shows a Todo app function which is being tested. Passed tests show as green, while failed tests show as red.

Test details and code may be inspected or adjusted in the todoApp_tests.js file.

Todo app details and code may be inspected or adjusted in the todoApp.js file. 

