function validCategory(catInput) {
  if (catInput.length < 5) return false;
  if (catInput.includes(' ')) return false;
  return catInput;
};

console.log(validCategory('sports'));
console.log(validCategory('sport games'));
console.log(validCategory('kitchen'));

// let inputQty = -1;

// let newItemObj = {
//   skuCode: 'BASSP',
//   quantity: (inputQty > 0) ? inputQty : false,
// };

// console.log(newItemObj);

// let newItemObj = { quantity: 0, skuCode: 'BASSP' };

// if (Object.values(newItemObj).some((val) => val === false )) {
//   console.log(falseObj = { notValid: true });
// } else {
//   console.log(newItemObj);
// }


// function generateSku(nameInput, catInput) {
//   let nameChars = nameInput.replace(/[^a-z]/gi, '').slice(0, 3);
//   let catChars = catInput.replace(/[^a-z]/gi, '').slice(0, 2);
//   return (nameChars + catChars).toUpperCase();
// };

// let newSKU = generateSku('basket ball', 'sports');
// console.log(newSKU);

// let anotherSKU = generateSku('kitchen pot', 'cooking');
// console.log(anotherSKU);
