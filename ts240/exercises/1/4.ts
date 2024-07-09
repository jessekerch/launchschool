function toUpperCaseArray(arr: Array<string>): Array<string> {
  return arr.map((elem: string) => elem.toUpperCase());
}

console.log(toUpperCaseArray(['ellie', 'hannah', 'satomi']));