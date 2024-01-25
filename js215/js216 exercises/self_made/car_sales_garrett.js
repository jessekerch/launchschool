/*
Given a list of information about monthly car sales, output total revenue and average sales.
*/

const list1 = [{ make: 'Toyota', year: '2022', month: 'February', msrp: '$34,570.00', price: '$36,770.34',},
{ make: 'Ford', year: '2023', msrp: '$26,900.00', price: '$25,992.02',}];

// garrett's solution 10/26/2023
function salesSummary(sales) {
  let priceStrs = sales.map(obj => obj.price);
  let priceNums = priceStrs.map(str => Number(str.match(/\d|\./g).join('')));
  let sum = priceNums.reduce((acc, num) => acc + num, 0);
  let avg = sum / sales.length;
  console.log(`Total Revenue: $${sum.toFixed(2)}, Average Sale: $${avg.toFixed(2)}`);
}

salesSummary(list1); // Total Revenue: $62762.36, Average Sale: $31381.18

//
// test cases
// gotchas:
// price might not have a .00 at the end, i.e. no decimal
// might have a 'recall' or 'return' property, if true, should be removed from sales total

const list2 = [{ make: 'Mazda', year: '2023', msrp: '$25,890.00', price: '$25,716.10',},
{ make: 'Tesla', year: '2023', msrp: '$65,899.00', month: 'April', price: '$67,000',},
{ make: 'Chevrolet', year: '2024', msrp: '$42,990.00', price: '42972',}];

const list3 = [{ make: 'Toyota', year: '2023', msrp: '$25,890.00', price: '$25,716.10',},
{ make: 'Lexus', year: '2023', msrp: '$66,000.00', month: 'October', price: '$67,450.71',},
{ make: 'Chevrolet', year: '2024', msrp: '$42,990.00', price: '42972', return: true,}];

const list4 = [];

const list5 = [{ make: 'Mazda', year: '2023', return: true, msrp: '$25,890.00', price: '$25,716.10',},
{ make: 'Tesla', year: '2023', msrp: '$65,899.00', month: 'April', price: '$67,000', return: true,}];

salesSummary(list2); // { Total Revenue: $135688.10, Average Sale: $45229.37 }

salesSummary(list3); // { Total Revenue: $50194.81, Average Sale: $46583.41 }
salesSummary(list4); // { Total Revenue: $0.00, Average Sale: $0.00 }
salesSummary(list5); // { Total Revenue: $-92716.10, Average Sale: $0.00 }
