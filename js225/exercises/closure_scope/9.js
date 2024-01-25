function makeList() {
  let items = [];
  return {
    add(todo) {
      let idx = items.indexOf(todo)
      if ( idx === -1 ) {
        items.push(todo);
        console.log(`${todo} added`)
      }
    },

    remove(todo) {
      let idx = items.indexOf(todo)
      if ( idx !== -1 ) {
        items.splice(idx, 1);
        console.log(`${todo} removed`)
      } else {
        console.log(`List doesn't contain ${todo}`)
      }
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty');
      } else {
        items.forEach((todo) => console.log(todo));
      }
    },
  };
}

let list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn
console.log(list.items);
