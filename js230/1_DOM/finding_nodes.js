let divs = document.querySelectorAll("div");
let divArray = [].slice.call(divs);
let target;

divArray.forEach(div => {
  if (div.textContent.includes('Naming and etymology')) {
    target = div;
  };
});

console.log(target);
