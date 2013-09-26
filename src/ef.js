if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function(require) {

  var ef = function () {
    return 'ef version 0.0.0';
  };
  
  ef.map = function(sequence, func) {
    var result = [];
    for(var i in sequence)
      result.push(func(sequence[i]));
    return result
  };

  ef.filter = function(sequence, func) {
    var result = [];
    for(var i in sequence)
      if(func(sequence[i]))
        result.push(sequence[i]);
    return result
  };

  ef.exists = function(sequence, func) {
    for(var i in sequence) {
      if(func(sequence[i]))
        return true;
    }
    return false;
  };

  ef.find = function (sequence, func) {
    for(var i in sequence) {
      if(func(sequence[i]))
        return sequence[i];
    }
    return null;
  };

  ef.sum = function (sequence, func) {
    var result = 0;
    for(var i in sequence)
      result = result + func(sequence[i]);
    return result;
  };

  ef.max = function (sequence, func) {
    var current_max = sequence[0];
    for(var i in sequence)
      if(func(sequence[i]) > current_max)
        current_max = sequence[i];
    return current_max;
  };

  ef.min = function (sequence, func) {
    var current_min = sequence[0];
    for(var i in sequence)
      if(func(sequence[i]) < current_min)
        current_min = sequence[i];
    return current_min;
  };

  ef.tail = function (sequence, func) {
    var object = sequence[sequence.length - 1];
    if (func && func instanceof Function) {
      return func.call({}, object, sequence.length - 1, sequence);
    }
    return object;
  };

  ef.empty = function (sequence) {
    return sequence.length === 0;
  };

  ef.extend = function (destination, source) {
    var propertyOrIndex,
        ownProperty = true; // Not in source.prototype
    for (propertyOrIndex in source) {
      ownProperty = ef.isArray(source) || source.hasOwnProperty(propertyOrIndex);
      if (ownProperty) {
        if (source[propertyOrIndex] instanceof Object) {
          if (!destination[propertyOrIndex]) {
            destination[propertyOrIndex] = ef.extend({}, source[propertyOrIndex]);
          } else {
            destination[propertyOrIndex] = ef.extend(destination[propertyOrIndex], source[propertyOrIndex]);
          }
        } else {
          destination[propertyOrIndex] = source[propertyOrIndex];
        }
      }
    }
    return destination;
  };

  ef.each = function (sequenece, func) {
    var i, object, retVal,
        clone = ef.extend([], sequenece),
        newArray = [];
    for (i = 0; i < clone.length; i++) {
      object = clone[i];
      retVal = func.call({}, object, i, sequenece);
      if (retVal) {
        sequenece[i] = retVal;
      } else {
        newArray.push(object);
      }
    }

    if (retVal) {
      return sequenece;
    } else {
      return newArray;
    }

  };

  ef.isArray = function (obj) {
    return toString.call(obj) === "[object Array]";
  };

  return ef;
});
