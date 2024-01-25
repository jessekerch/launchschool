function makeList() {
  let list = [];
  return function(todo) {
    if (todo !== undefined) {
      if (list.includes(todo)) {
        let idx = list.findIndex((elem) => elem === todo);
        list.splice(idx, 1);
        console.log(`${todo} removed`)
      } else if (!list.includes(todo)) {
        list.push(todo);
        console.log(`${todo} added`)
      }
    } else {
      if (list.length === 0) {
        console.log('The list is empty');
      } else {
        list.forEach((todo) => console.log(todo));
      }
    }
  }
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// // make breakfast added!
list('read book');
// // read book added!
list();
// // make breakfast
// // read book
list('make breakfast');
// // make breakfast removed!
list();
// read book