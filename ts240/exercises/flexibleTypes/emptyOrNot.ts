function emptyOrNot(val: string | undefined): void {
  val && console.log(val);
}

emptyOrNot(undefined);
emptyOrNot('non-empty string');
emptyOrNot('');
