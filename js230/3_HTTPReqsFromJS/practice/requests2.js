/* Write some JavaScript code that loads JSON data from
https://api.github.com/repos/rails/rails
parses the JSON into a JavaScript object
and then logs the HTTP status code and the number of open issues to the console
The property to get the number of open issues is open_issues. You may assume the API will always return valid JSON data.

Copy Code
200
1159 // This should be whatever the current value is
*/ 

let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';
request.addEventListener('loadend', (e) => {
  let obj = JSON.parse(request.response);
  console.log(obj.status);
  console.log(obj.open_issues);
})

xhr.send();
