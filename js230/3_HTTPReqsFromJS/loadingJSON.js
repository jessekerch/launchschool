let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
// request.responseType = 'json';

request.addEventListener('load', event => {
  let data = JSON.parse(request.response);

  console.log(data);

})

request.send();

// Write some JavaScript code that loads JSON data from https://api.github.com/repos/rails/rails, parses the JSON into a JavaScript object, and then logs the HTTP status code and the number of open issues to the console. The property to get the number of open issues is open_issues.

// 200
// 1159 // This should be whatever the current value is
