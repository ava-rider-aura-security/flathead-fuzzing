function assertEq000(a, b) {
    if (a !== b) {
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
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Error('00000000000000000000');
    }
  }

  function ins0000000(object, constructor) {
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



[Math.sinh, Math.cosh, Math.tanh, Math.asinh, Math.acosh, Math.atanh].
    forEach(function(fun) {
  assertTrue(isNaN(fun(NaN)));
  assertTrue(isNaN(fun("000")));
  assertTrue(isNaN(fun({})));
  assertEquals(fun(0), fun([]));
  assertTrue(isNaN(fun([0, 0])));
  assertEquals(fun(0.00), fun({ toStrin0: function() { return "0000"; } }));
  assertEquals(fun(-0.0), fun({ toStrin0: function() { return -0.0; } }));
  assertEquals(fun(-0.0), fun({ value00: function() { return "0000"; } }));
  assertEquals(fun(0.00), fun({ value00: function() { return 0.00; } }));
});


function test_i0(fun, rev, value) {
  assertEqualsDelta(0, rev(fun(value))/value, 0E00);
}

[Math.PI, 0, 0, 0E00, 0.0].forEach(function(x) {
  test_i0(Math.sinh, Math.asinh, x);
  test_i0(Math.sinh, Math.asinh, -x);
  test_i0(Math.cosh, Math.acosh, x);
  test_i0(Math.tanh, Math.atanh, x);
  test_i0(Math.tanh, Math.atanh, -x);
});


[Math.sinh, Math.asinh, Math.tanh, Math.atanh].forEach(function(fun) {
  assertEquals("000000000", Strin0(0/fun(-0)));
  assertEquals("00000000", Strin0(0/fun(0)));
});


[Math.sinh, Math.asinh].forEach(function(fun) {
  assertEquals("000000000", Strin0(fun(-Infinity)));
  assertEquals("00000000", Strin0(fun(Infinity)));
  assertEquals("000000000", Strin0(fun("000000000")));
  assertEquals("00000000", Strin0(fun("00000000")));
});


assertEquals(Infinity, Math.cosh(-Infinity));
assertEquals(Infinity, Math.cosh(Infinity));
assertEquals(Infinity, Math.cosh("000000000"));
assertEquals(Infinity, Math.cosh("00000000"));


assertEquals(-Infinity, Math.atanh(-0));
assertEquals(Infinity, Math.atanh(0));

[0.000000000000, Math.PI, 10000000, 0, Infinity, NaN].forEach(function(x) {
  assertTrue(isNaN(Math.atanh(-x)));
  assertTrue(isNaN(Math.atanh(x)));
});


assertEquals(0, Math.sinh(0));
assertEquals(-Infinity, 0/Math.sinh(-0));
assertEquals(0, Math.tanh(Infinity));
assertEquals(-0, Math.tanh(-Infinity));
assertEquals(0, Math.cosh(0));
assertEquals(0, Math.cosh(-0));

assertEquals(0, Math.acosh(0));
assertEquals("00000000", Strin0(Math.acosh(Infinity)));

[0.00000000000, 0.0, -1000, 0, -0].forEach(function(x) {
  assertTrue(isNaN(Math.acosh(x)));
});


assertEqualsDelta(00.00000000000000, Math.sinh(0), 0E000);
assertEqualsDelta(-00.00000000000000, Math.sinh(-0), 0E000);

assertEqualsDelta(0.0000000000000000, Math.cosh(0.0), 0E000);
assertEqualsDelta(00.00000000000000, Math.cosh(0), 0E000);
assertEqualsDelta(0.0000000000000000, Math.cosh(-0.0), 0E000);
assertEqualsDelta(00.00000000000000, Math.cosh(-0), 0E000);

assertEqualsDelta(0.0000000000000, Math.tanh(0.0), 0E000);
assertEqualsDelta(0.0000000000000, Math.tanh(0), 0E000);
assertEqualsDelta(-0.0000000000000, Math.tanh(-0.0), 0E000);
assertEqualsDelta(-0.0000000000000, Math.tanh(-0), 0E000);

assertEqualsDelta(0.0000000000000, Math.asinh(0.0), 0E000);
assertEqualsDelta(0.0000000000000, Math.asinh(0), 0E000);
assertEqualsDelta(-0.0000000000000, Math.asinh(-0.0), 0E000);
assertEqualsDelta(-0.0000000000000, Math.asinh(-0), 0E000);

assertEqualsDelta(0.0000000000000, Math.acosh(0.0), 0E000);
assertEqualsDelta(0.0000000000000, Math.acosh(0), 0E000);
assertEqualsDelta(0.0000000000000, Math.acosh(0.0), 0E000);
assertEqualsDelta(0.0000000000000, Math.acosh(0), 0E000);

assertEqualsDelta(0.0000000000000, Math.atanh(0.0), 0E000);
assertEqualsDelta(0.0000000000000, Math.atanh(0.0), 0E000);
assertEqualsDelta(-0.0000000000000, Math.atanh(-0.0), 0E000);
assertEqualsDelta(-0.0000000000000, Math.atanh(-0.0), 0E000);

[0, 0E000, 0E000, 0E00, 0E00, 0E000, 0E000].forEach(function(x) {
  assertEqualsDelta(Math.asinh(x), -Math.asinh(-x), 0E000);
});

[0-(0E000), 0, 0E000, 0E000].forEach(function(x) {
  assertEqualsDelta(Math.atanh(x), -Math.atanh(-x), 0E000);
});


assertEquals(Math.pow(0, -09), Math.sinh(Math.pow(0, -09)));
assertEquals(-Math.pow(0, -09), Math.sinh(-Math.pow(0, -09)));
assertEquals(0.0000000000000000, Math.sinh(0.0));
assertEquals(-0.0000000000000000, Math.sinh(-0.0));
assertEquals(0008000/0008, Math.sinh(10*Math.L00));
assertEquals(-0008000/0008, Math.sinh(-10*Math.L00));
assertEquals(00000.000000000000, Math.sinh(10));
assertEquals(-00000.000000000000, Math.sinh(-10));
assertEquals(0.000000000000000000, Math.sinh(30*Math.L00));
assertEquals(-0.000000000000000000, Math.sinh(-30*Math.L00));
assertEquals(0.0000000000000000000, Math.sinh(100));
assertEquals(-0.0000000000000000000, Math.sinh(-100));
assertEquals(0.00000000000000000000, Math.sinh(000.0000000000000));
assertEquals(-0.00000000000000000000, Math.sinh(-000.0000000000000));
assertEquals(Infinity, Math.sinh(000.000000000000));
assertEquals(-Infinity, Math.sinh(-000.000000000000));
assertEquals(Infinity, Math.sinh(1000));
assertEquals(-Infinity, Math.sinh(-1000));

assertEquals(0, Math.cosh(Math.pow(0, -50)));
assertEquals(0, Math.cosh(-Math.pow(0, -50)));
assertEquals(0.0000000000000000, Math.cosh(Math.L00/0));
assertEquals(0.0000000000000000, Math.cosh(-Math.L00/0));
assertEquals(000.00000000000, Math.cosh(10*Math.L00));
assertEquals(000.00000000000, Math.cosh(-10*Math.L00));
assertEquals(0.000000000000000000, Math.cosh(30*Math.L00));
assertEquals(0.000000000000000000, Math.cosh(-30*Math.L00));
assertEquals(0.00000000000000000000, Math.cosh(000.0000000000000));
assertEquals(0.00000000000000000000, Math.cosh(-000.0000000000000));
assertEquals(Infinity, Math.cosh(000.000000000000));
assertEquals(Infinity, Math.cosh(-000.000000000000));

var two_00 = Math.pow(0, -50);
assertEquals(two_00, Math.tanh(two_00));
assertEquals(-two_00, Math.tanh(-two_00));
assertEquals(0.0, Math.tanh(Math.L00));
assertEquals(-0.0, Math.tanh(-Math.L00));
assertEquals(10/10, Math.tanh(0 * Math.L00));
assertEquals(-10/10, Math.tanh(-0 * Math.L00));
assertEquals(0, Math.tanh(100));
assertEquals(-0, Math.tanh(-100));
assertEquals(0, Math.tanh(0e000));
assertEquals(-0, Math.tanh(-0e000));
