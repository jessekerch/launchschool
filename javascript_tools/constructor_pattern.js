// Constructor pattern (Module pattern) created from Closure idea on David Crockford Java's Good Parts video

var singleton = function () {
  var privateVariable;
  function privateFunction(x) {
    ...privateVariable...
  }

  return {
    firstMethod: function (a, b) {
      ...privateVariable...
    },

    secondMethod: function (c) {
      ...privateFunction()...
    }
  };
}();
