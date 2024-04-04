const todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shower' },
  { id: 3, title: 'Piano' },
  { id: 4, title: 'Put Away Shoes'}
];

document.addEventListener('DOMContentLoaded', function(event) {
  let todoTemplate = Handlebars.compile(document.querySelector('#todo_list').innerHTML);
  Handlebars.registerPartial('todo_item', document.querySelector('#todo_item').innerHTML);
  document.querySelector('body').insertAdjacentHTML('beforeend', todoTemplate({ todos: todo_items }));
  let targetTodo;
  let menu = document.querySelector('#context-menu');

  document.addEventListener('click', function(event) {
    event.preventDefault();
    // if delete confirmation is visible and 'yes' clicked, delete todo and hide confirmation
    // if confirmation window is hidden AND delete is selected
    // show confirmation window and assign target todo element to be deleted
    if (document.querySelector('#confirm').style.visibility === 'visible') {
      if (event.target.id === 'yes') targetTodo.remove();
      document.querySelector('#overlay').style.visibility = 'hidden';
      document.querySelector('#confirm').style.visibility = 'hidden';
    } else {
      if (event.target.classList.contains("delete")) {
        document.querySelector('#overlay').style.visibility = 'visible';
        document.querySelector('#confirm').style.visibility = 'visible';
      }
    }      

    menu.style.visibility = 'hidden';
  });
  
  document.addEventListener('contextmenu', function(event) {
    if (event.target.closest('article') && event.target.closest('article').classList.contains('todo')) {
      event.preventDefault();
      menu.style.visibility = 'visible';
      let posX = String(event.clientX + 10) + 'px';
      let posY = String(event.clientY - 25) + 'px';
      menu.style.left = posX;
      menu.style.top = posY;
      targetTodo = event.target.closest('article');
    } else {
      menu.style.visibility = 'hidden';
    }
  })

});
