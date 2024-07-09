function filterByType<T>(arr: Array<any>, type: string): T[] {
  return arr.filter(elem => typeof elem === type);
}

filterByType<string>(['hello', 'world', 42, true], 'string');
filterByType<number>(['hello', 'world', 42, true], 'number');
