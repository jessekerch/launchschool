function emptyOrNot(val) {
    val && console.log(val);
}
emptyOrNot(undefined);
emptyOrNot(null);
emptyOrNot('non-empty string');
emptyOrNot('');
