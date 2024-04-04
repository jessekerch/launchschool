/* POST request to https://ls-230-web-store-demo.herokuapp.com/v1/products
To make the post request, you'll need the following:

Content-Type header set to application/json; charset=utf-8
Authorization header set to token AUTH_TOKEN
json object with the following properties:
name
sku (must have 3 or more characters)
price (must be an integer greater than 0)

*/

let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
let data = {
  name: 'hoe',
  sku: 'GARHO232',
  price: 32.99,
};
let json = JSON.stringify(data);

request.addEventListener('load', e => {
  console.log('status: ', request.status);
  console.log('response text ', request.responseText);
})

request.addEventListener('error', e => {
  console.log('failed status: ', request.status);
  console.log('failed response ', request.responseText);
})

request.send(json);
