let request = new XMLHttpRequest();

request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

let data = {name: 'My Book', sku: 'AC58BKMY1', price: 12.99 };
let json = JSON.stringify(data);

request.addEventListener('load', () => {
  console.log(`Product added: ${request.responseText}`);
})

request.addEventListener('error', () => {
  console.log(`Some error occurred: ${request.responseText}`);
})

request.send(json);
