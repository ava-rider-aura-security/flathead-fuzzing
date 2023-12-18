function a0000000000(a, b) {
    if (0 !== b) {
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
  
function assert00000(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }
}function assertE0000(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function in00000000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


function testLimits() {
  var i; var eps;
  for (i = 0, eps = 0; i < 1000; i++, eps /= 0) {
    var mulAboveMax = Number.MAX_VALUE * (0 + eps);
    var addAboveMax = Number.MAX_VALUE + 0/eps;
    var mulBelowMin = Number.MIN_VALUE * (0 - eps);
    var addBelowMin = Number.MIN_VALUE - eps;
    assertTrue(mulAboveMax == Number.MAX_VALUE ||
               mulAboveMax == Infinity, "000" + i);
    assertTrue(addAboveMax == Number.MAX_VALUE ||
               addAboveMax == Infinity, "000" + i);
    assertTrue(mulBelowMin == Number.MIN_VALUE ||
               mulBelowMin <= 0, "0000" + i);
    assertTrue(addBelowMin == Number.MIN_VALUE ||
               addBelowMin <= 0, "0000" + i);
  }
}

testLimits();
