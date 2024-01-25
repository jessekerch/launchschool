function getTagNames(htmlCollection) {
  const elementsArray = Array.from(htmlCollection);
  return elementsArray.map(({tagName}) => tagName);
}

function domTreeTracer(id) {
  let tree = [];
  let element = document.getElementById(id);
  let parentElement;

  do {
    parentElement = element.parentNode;
    let children = getTagNames(parentElement.children);
    tree.push(children);

    element = parentElement;
  } while (parentElement.tagName !== 'BODY');

  return tree;
}

domTreeTracer(1);

domTreeTracer(2);

domTreeTracer(22);

