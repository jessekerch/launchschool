function longCaps(str) {
  if (str.length > 10) {
    console.log(str.toUpperCase());
    return str.toUpperCase();
  } else {
    console.log(str);
    return str;
  }
}

longCaps("hello world");
longCaps("goodbye");
