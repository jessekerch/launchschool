function logUnknown(input: unknown): void {
  if (typeof input === 'string') {
    console.log(`Here's your string: ${input}`);
  }
}

logUnknown('hello world');
logUnknown(42);
