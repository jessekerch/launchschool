function walk(node, callback) {
  callback(node);
  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let imgCount = 0;
walk(document,(node) => {
  if (node.nodeName === 'IMG') {
    imgCount++;
}});

console.log(imgCount);