/*
Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.
*/

function flattenAndUnique(arr) {
  let flat = arr.flat(Infinity);
  // flat = flat.map((elem) => {
  //   if (Array.isArray(elem)) {
  //     return (...elem); // ? Can I return subarray elements to map with spread syntax?
  //   } else {
  //     return elem;
  //   }
  // });
  // flat = flat.flat(); // ? or just flatten it again?!

  let unique = flat.reduce((arr, elem) => {
    if (!arr.includes(Number(elem)) && !arr.includes(String(elem))) {
      arr.push(elem);
    }
    return arr;
  }, []);

  console.log(unique);


  // let unique = flat.filter((check) => {
  //     let strElem = String(elem);
  //     let strCheck = String(check);
  //     return strElem !== strCheck
  //     });

}

// flattenAndUnique([]); // []
// flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
// flattenAndUnique([[NaN, 1, 2, 3], [NaN, '3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
flattenAndUnique([[[-1, 0], 1, 2, 3], [[-1, 0], '3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']
