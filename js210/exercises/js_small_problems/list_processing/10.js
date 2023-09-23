const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(idNum) {
  return transactions.filter(({id}) => id === idNum);
}

function isItemAvailable(idNum) {
  let finalQty = 0;

  transactionsFor(idNum).forEach((trans) => {
    if (trans.movement === 'in') {
      finalQty += trans.quantity;
    } else {
      finalQty -= trans.quantity;
    }

  });
  return finalQty > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
