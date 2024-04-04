function walk(node, callback) {
  callback(node);
  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let count = 0;
walk(document,(node) => {
  count++;
});
console.log(count);