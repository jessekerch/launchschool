function product() {
  let numProduct = arguments.reduce(function(total, number) {
    return total * number;
  }, 1);
  return numProduct;
}

let result = product(2, 3, 4, 5);
