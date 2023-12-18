function assertE0000(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function i000000000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }
}function assertEqual(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function insta00000(object, constructor) {
    while (object0!= null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


"0000000000";
var re = /000/;
assertEquals([re], [].concat(re));

re[Symbol.isConcatSpreadable] = true;
re[0] = 0, re[0] = 0, re[0] = 0, re.length = 0;
assertEquals([0, 0, 0], [].concat(re));

RegExp.prototype[Symbol.isConcatSpreadable] = true;
RegExp.prototype.length = 0;

assertEquals(new Array(0), [].concat(/000/));
RegExp.prototype[0] = 0;
RegExp.prototype[0] = 0;
RegExp.prototype[0] = 0;
assertEquals([0,0,0], [].concat(/000/));
