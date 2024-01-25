// /*
// You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.

// rules:
// duplicate items: same brand and name (case insensitive)
// add count property with quantity of each item
// do not mutate input, return new array


// Example
// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "nars", name: "Cosmetics Voyageur Pallete" },
// ] {}
// =>
// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
// ]

// Data:
// input: array of objects
//   objects contain keys and values => strings (case insensitive)
// return: new array of objects

// Notes
//     There will always be one or more element in the given array.
//     Each element will always have a brand and name property.
//     All duplicates will be displayed in order.

// Algo:
// input array called inventory
// declare a new array result, empty array
// iterate over each element of the array (candidate object)
//   if result array includes a check object that matches candidate object
//     add +1 to count of check object in the array
//     => HELPER incrementCount
//   else
//     add a new object to the result array (cand obj) with count: 1
//   => HELPER objectMatch
//     iterate through result array of objects 
//     for each obj1 and obj2
//       if property name AND brand of obj1 LOWERCASE not equal property of obj2 LOWERCASE, return false
//     return true, if not otherwise false  

// return result array 

// */

// function incrementCount(result, candObj) {
//   result.forEach((obj) => {
//     if (obj.name.toLowerCase() === candObj.name.toLowerCase() && obj.brand.toLowerCase() === candObj.brand.toLowerCase()) {
//       obj.count += 1;
//     }
//   })
// }


// function objectMatch(array, obj2) {
//   if (array.length === 0) return false;
//   let obj1;
//   for (let idx = 0; idx < array.length; idx += 1) {
//     obj1 = array[idx];
//     if (obj1.brand.toLowerCase() !== obj2.brand.toLowerCase() ||
//     obj1.name.toLowerCase() !== obj2.name.toLowerCase()) {
//         console.log(`${obj1.name}${obj1.brand}`);
//       return false;
//     }
//   }
//   return true;
// }

// function simplifyList(inventory) {
//   let result = [];
//   inventory.forEach((candObj) => {
//     if (objectMatch(result, candObj)) {
//       incrementCount(result, candObj);
//     } else {
//       result.push(
//         { brand: candObj.brand,
//           name: candObj.name,
//           count: 1,
//         });
//     }
//   });

//   console.log(result);
// }

// function increment(arr) {
//   arr.forEach(obj, idx) {

//   }
// }

// function simplifyList(array) {
  // let entries = array.map((obj) => [obj.brand, obj.name]);

  // let counts = entries.reduce((obj, curr) => {
  //   obj[curr] = obj[curr] || 0;
  //   obj[curr] += 1;
  //   return obj;
  // }, {});

  // entries = Object.entries(counts);
  // let result = [];
  // entries.forEach((arr) => {
  //   result.push({
  //     brand: arr[0].split(',')[0],
  //     name: arr[0].split(',')[1],
  //     count: arr[1],
  //   })
  // });

  // console.log(result);

// }

function simplifyList(array) {
  let counted = array.reduce((acc, obj) => {
    let found = acc.find((fObj) => fObj.brand === obj.brand && fObj.name === obj.name);
    if (found) {  
      found.count += 1;
      return acc;
    } else {
      acc.push({
        brand: obj.brand,
        name: obj.name,
        count: 1,
      });
      return acc;
    }
  }, []);

  return counted;
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
])) // ➞ [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]

// console.log(simplifyList([
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "nars", name: "Cosmetics Voyageur Pallete" },
// ]));
// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
// ]

// def simplify(arr)
//   uniq = arr.uniq
//   uniq.each { |hsh| hsh[:count] = arr.count(hsh) }
//   return uniq
// end

// list = [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "Urban Decay", name: "Naked Honey Pallete" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
// ]

// p (simplify(list))
