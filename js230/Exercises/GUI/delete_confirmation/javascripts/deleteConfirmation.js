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
  let targetTodo = null;

  document.querySelectorAll('span.delete').forEach((span) => {
    span.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
    })
    
    span.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '15px';
    })

    span.addEventListener('click', function(event) {
      event.stopPropagation();
      document.querySelector('#overlay').style.visibility = 'visible';
      document.querySelector('#confirm').style.visibility = 'visible';
      targetTodo = event.target.closest('article');

      document.querySelector('body').addEventListener('click', function(event) {
        event.stopPropagation();
        if (event.target.id === 'yes') {
          if (targetTodo) targetTodo.remove();
        }
        targetTodo = null;
        document.querySelector('#overlay').style.visibility = 'hidden';
        document.querySelector('#confirm').style.visibility = 'hidden';
      })
    })
  })
});
