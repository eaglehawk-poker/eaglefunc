var buster = require('buster'),
  ef = require('../src/ef');
buster.spec.expose();

buster.testCase("ef.tail tests", {
  "ef.tail without function should return last item" : function () {
    var array = [0, 1 ,2];
    buster.assert.equals(ef.tail(array), 2);
  },
  "ef.tail with function should apply function on last item" : function () {
    var array = [0, 1 ,2];
    buster.assert.equals(ef.tail(array, function (object) {
      return ++object;
    }), 3);
  }
});


/*


exports.should_be_empty = function(test) {
  test.ok(BetLib.empty([]));
  test.done();
};

exports.should_not_be_empty = function(test) {
  test.ok(!BetLib.empty([1]));
  test.done();
};

exports.each_with_return = function(test) {
  var array = [1, 2, 3];
  var newArray = BetLib.each(array, function(object, index, sequence) {
    return ++object;
  });
  test.equals(2, array[0]);
  test.equals(2, newArray[0]);
  test.done();
};

exports.each_without_return = function(test) {
  var array = [{n: 1}];
  var newArray = BetLib.each(array, function(object, index, sequence) {
    ++object.n;
  });
  test.equals(1, array[0].n);
  test.equals(2, newArray[0].n);
  test.done();
};

exports.each_empty = function(test) {
  BetLib.each([], function(object, index, sequence) {
    ++object.n;
  });
  test.done();
};

exports.extend_list = function(test) {
  var array = [{n: 1}];
  var newArray = BetLib.extend([], array);
  ++array[0].n
  test.notEqual(array[0].n, newArray[0].n);
  test.done();
};

exports.extend_nested = function(test) {
  var object = {
    n : {
      x : [1, 2]
    }
  };
  var newArray = BetLib.extend({}, object);
  ++object.n.x[0];
  test.notEqual(object.n.x[0], newArray.n.x[0]);
  test.done();
};

exports.extend_merge = function(test) {
  var destination = {
    n : 1,
    m : {
      x : 2
    }
  };

  var source = {
    m : {
      x : 3,
      y : 1
    }
  };
  var newArray = BetLib.extend(destination, source);
  test.equal(1, destination.n);
  test.equal(3, destination.m.x);
  test.equal(1, destination.m.y);
  test.done();
};*/