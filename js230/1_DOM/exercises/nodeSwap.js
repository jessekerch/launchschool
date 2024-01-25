function nodeSwap(firstID, secondID) {
  let first = document.getElementById(firstID);
  let second = document.getElementById(secondID);

  if (!first || !second) {
    return undefined; // if neither ID exists
  }

  let firstParent = first.parentElement;
  if (!firstParent.contains(first) || !firstParent.contains(second)) {
    return undefined; // if not siblings
  }

  let firstSiblingIDs = getSiblingIDs(first);
  if (!firstSiblingIDs.includes(String(secondID))) {
    return undefined; // if not siblings
  }

  // clone 1st element as placeholder and put just before the original
  let firstClone = first.cloneNode(true);
  first.insertAdjacentElement("beforebegin", firstClone);

  // put 1st element just before 2nd element
  second.insertAdjacentElement("beforebegin", first);

  // put 2nd element just before clone of 1st element
  firstClone.insertAdjacentElement("beforebegin", second);

  // remove clone of 1st element
  firstClone.remove();

}


nodeSwap(1, 20);
// at least one of the id attributes doesn't exist
//invalid swaps
// = undefined

// at least one of the nodes is a "child" of the other
// nodeSwap(1, 4);
// // = undefined
// nodeSwap(9, 3);
// // = undefined

// // valid swap
// nodeSwap(1, 2);
// // = one swap
