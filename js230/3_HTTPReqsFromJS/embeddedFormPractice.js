let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
let response = request.send();
alert(response.responseText);
