function substr(str) {
  arr = str.split('');
  console.log(arr);
  arr = arr.map((char, idx) => {
    return str.slice(idx);
  })
}

substr('abcde');
