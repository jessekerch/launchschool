let main = document.querySelector("main");
let sub = document.getElementById("sub");

document.addEventListener('DOMContentLoaded', event => {
  main.addEventListener('contextmenu', event => {
    event.preventDefault();
    alert('Main');
  })

  sub.addEventListener('contextmenu', event => {
    event.preventDefault();
    event.stopPropagation();
    alert('Sub');
  })
})
