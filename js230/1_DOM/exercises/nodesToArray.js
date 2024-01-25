function nodesToArr(node, result) {
  let childrenArray;
  let parent = node ? node : document.body;
  let result = result ? result : [];

  if (parent.children) {
    childrenArray = [parent, [parent.children]];
    result.push(childrenArray);
    for (let index = 0; index < parent.children.length; index += 1) {
      nodesToArr(parent, result);
    }
  } else {
    childrenArray = ([parent, []]);
    result.push(childrenArray);
    return childrenArray;
  // If there are parents, repeat the process from step 1.

  }
  
  // Check if the parent element has children.
  // If the parent element has children set the value of the children array to it ([parentElement, [children]]), otherwise, set it to an empty array ([parentElement, []]).
  // Check if any of the children are parents.
  // If there are parents, repeat the process from step 1.

}

nodesToArr();
// = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// // OR

// = ["BODY", [
//     ["HEADER", []],
//     ["MAIN", []],
//     ["FOOTER", []]]]