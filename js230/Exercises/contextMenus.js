let main = document.querySelector("main");
let sub = document.getElementById("sub");

document.addEventListener('DOMContentLoaded', event => {
  main.addEventListener('contextmenu', event => {
    event.stopPropagation();
    alert(event.target.tagName);
  })

  sub.addEventListener('contextmenu', event => {
    event.stopPropagation();
    alert(event.target.id);
  })
})

// Given the following markup, implement distinct context menus for the main and the sub areas of the web page. You can represent a context menu as an alert box that displays the name of the respective area (i.e., alert("sub")). Only one context menu should appear when the event occurs.