function foo(text) {
  return text.match(/\S+/g);
}

console.log(foo('cart truck cart train'));