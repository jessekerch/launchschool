function substring(string, start, end) {
  end = end || string.length;
  if (start < 0 || isNaN(start)) start = 0;
  if (end < 0 || isNaN(end)) end = 0;
  if (start > end) {
    [start, end] = [end, start]
  }

  if (!Number.isInteger(start)) start = 0;
  if (!Number.isInteger(end)) end = 0;
  
  let newStr = '';
  for (let idx = start; idx < end; idx += 1) {
    char = string[idx] || '';
    newStr += char;
  }

  console.log(newStr);
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
