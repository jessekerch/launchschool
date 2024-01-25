let thumbCaptions = document.getElementsByClassName('thumbcaption');
let result = [];

for (let idx = 0; idx < thumbCaptions.length; idx += 1) {
  result.push(thumbCaptions[idx].textContent.trim());
}

console.log(result);
