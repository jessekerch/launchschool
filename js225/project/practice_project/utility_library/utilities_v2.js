(function() {

  let findObjs = function(element, props, multiple) {
    let match = multiple ? [] : undefined;

    element.some(function(obj) {
      let all_match = true;

      for (let prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop] ) {
          all_match = false;
        }
      }

      if (all_match) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
      }
    });

    return match;
  };

  let _ = function(element) {
    u = {
      first: function() {
        return element[0];
      },

      last: function() {
        return element[element.length - 1];
      },

      lastIndexOf: function(search) {
        let idx = -1;

        for (let i = element.length - 1; i >= 0; i--) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }

        return idx;
      },

      sample: function(qty) {
        let sampled = [];
        let copy = element.slice();
        let get = function() {
          let idx = Math.floor(Math.random() * copy.length);
          let elem = copy[idx];
          copy.splice(idx, 1);
          return elem;
        }

        if (!qty) { return get(); }
        while (qty) {
          sampled.push(get());
          qty -= 1;
        }

        return sampled;
      },

      without: function() {
        let newArr = [];
        let removeArgs = Array.prototype.slice.call(arguments);
        element.forEach(function(elem) {
          if (removeArgs.indexOf(elem) === -1) {
            newArr.push(elem);
          }
        })
        return newArr;
      },

      findWhere: function(props) {
        return findObjs(element, props, false);
      },

      where: function(props) {
        return findObjs(element, props, true);
      },

      pluck: function(query) {
        let vals = [];

        element.forEach((obj) => {
          if (obj[query]) {
            vals.push(obj[query]);
          }
        });

        return vals;
      },

      keys: function() {
        let keys = [];

        for (let prop in element) {
          keys.push(prop);
        }

        return keys;
      },

      values: function() {
        let vals = [];

        for (let prop in element) {
          vals.push(element[prop]);
        }

        return vals;
      },

      pick: function(...pick_props) {
        let new_obj = {};
        pick_props.forEach((prop) => {
          new_obj[prop] = element[prop];
        });
        return new_obj;
      },

      omit: function(...omit_props) {
        let new_obj = {};

        for (let prop in element) {
          if (!omit_props.includes(prop)) {
            new_obj[prop] = element[prop];
          }
        }

        return new_obj;
      },

      has: function(query) {
        return element[query] !== undefined;
      },
    };

    (["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"]).forEach((method) => {
      u[method] = function() { _[method].call(u, element); };
    });

    return u;
  };

  _.range = function(start, stop) {
    let rangeArray = [];
    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    for (let i = start; i < stop; i++) {
      rangeArray.push(i);
    }

    return rangeArray;
  };

  _.extend = function(old_obj, ...new_objs) {
    new_objs.forEach((new_obj) => {
      Object.assign(old_obj, new_obj);
    });
  
    return old_obj;
  };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]";
  };

  _.isObject = function(obj) {
    let type = typeof obj; 
    return type === "function" || type === "object" && !!obj;
  };

  _.isFunction = function(obj) {
    let type = typeof obj; 
    return type === "function";
  };

  (["Boolean", "String", "Number"]).forEach((method) => {
    _["is" + method] = function(obj) {
      return toString.call(obj) === "[object " + method + "]";
    }
  });
  
  window._ = _;
})();