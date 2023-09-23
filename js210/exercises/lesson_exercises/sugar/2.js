function foo() {
  return {
    bar: function bar() {
      console.log("bar");
    },
    qux: function qux(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function baz(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}
