// Power Constructor templated from David Crockford Java's Good Parts video
// really easy way to make objects that can hide their stuff and be private

function myPowerConstructor(x) { 
  var that = otherMaker(x); // make a new variable (that is remeniscent of this but can't use this)
  var secret = f(x);        // define a variable that will be secret private shared by these objects

  that.priv = function () { // create a priveleged method which is a function
    //...secret, x, that...     // the function has access to the state of the outer function
  };

  return that; // return your new object
}
