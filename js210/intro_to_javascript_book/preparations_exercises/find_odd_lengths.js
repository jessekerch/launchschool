function oddLengths(strings) {
  return strings.reduce((arr, str) => {
    if (str.length % 2 === 1) {
      arr.push(str.length);
    }

    return arr;
  }, []);
  return newArr;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
