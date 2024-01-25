function getPElements(document) {
  let elements = [];
  let node;

  for (let index = 0; index < document.childNodes.length; index += 1) {
    node = document.childNodes[index];

    if (node.nodeName === 'P') {
      elements.push(node);
    }
  }

  return elements;
}

console.log(getPElements(document));

