function nodesToArr(parent=document.body) {
  let childrenArray = [].slice.call(parent.children);
  let result = [parent.tagName, []];
  
  if (childrenArray.length === 0) {
    return result;
  }

  childrenArray.forEach(child => {
    result[1].push(nodesToArr(child))
  });

  return result;
}

console.log(nodesToArr());
// = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// // OR

// = ["BODY", [
//     ["HEADER", []],
//     ["MAIN", []],
//     ["FOOTER", []]]]