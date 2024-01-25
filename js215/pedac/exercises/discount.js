/*
You want to introduce a discount for your online store.
Every customer gets a 25% discount on the most expensive item in the shopping cart.
The discount will be calculated on just one item,
even if the customer buys more than one of the most expensive item.

Create a function that takes an object and returns the total price after discount.

rules: 25% discount = price - (price * 0.25)
most expensive item = price highest

Examples

twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]) ➞ 58124.25

twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]) ➞ 86.96

Notes

The total returned price is calculated upon two decimals.

algo: 
set total at 0
find highest priced item
=> reduce objects to get obj with the highest price
iterate over each object
  if object name === highest name
    add 25% off object price to total
    AND add item quantity - 1 * full price
  else
    add object price to total

return total price with two digits toFixed(2)

*/

function twentyFiveOnOne(arr) {
  let total = 0;

  let highest = arr.reduce((obj, curr) => {
    if (curr.price > obj.price) {
      return curr;
    } else {
      return obj;
    }
  });

  arr.forEach((item) => {
    if (item.name === highest.name) {
      total += (item.price - (item.price * 0.25));
      total += ((item.quantity - 1) * item.price);
    } else {
      total += (item.price * item.quantity);
    }
  });

  return Number(total.toFixed(2));
}

console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
])); //➞ 58124.25

console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 2, price: 72999 },
])); //➞ 131123.25

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
])); // ➞ 86.96