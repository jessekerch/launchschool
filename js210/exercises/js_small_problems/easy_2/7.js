function cleanUp(line) {
  let cleanline = line.replace(/[^A-Za-z]/,' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
