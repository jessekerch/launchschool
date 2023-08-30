function lastChar(line) {
  return line[line.length - 1];
}

function cleanUp(line) {
  cleanLine = '';
  for (let idx = 0; idx < line.length; idx += 1) {
    let char = line[idx];
    if ((char > 'A' && char < 'Z') || (char > 'a' && char < 'z')) {
      cleanLine += char;
    } else if (idx === 0 || lastChar(cleanLine) !== ' ') {
      cleanLine += ' ';
    }
  }
  return cleanLine;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
