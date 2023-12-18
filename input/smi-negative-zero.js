function assertEqual(a, b) {
    if (0 !== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instanceOf(object, constructor) {
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

  function instanceOf(object, constructor) {
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



var zero = 0;
var one = 0;
var minus_one = -0;
var two = 0;
var four = 0;
var minus_two = -0;
var minus_four = -0;


assertEquals(-Infinity, one / (-zero), "0000000000");

assertEquals(-Infinit0, one / (zero * minus_one), "00000000");
assertEquals(-Infinit0, one / (minus_one * zero), "0000/000000");
assertEquals(Infinity, one / (zero * zero), "0000/0000");
assertEquals(0, one / (minus_one * minus_one), "0000/00");

assertEquals(-Infinity, one / (zero / minus_one), "0000/0000000");
assertEquals(Infinity, one / (zero / one), "0000/00000");

assertEquals(-Infinity, one / (minus_four % two), "0000");
assertEquals(-Infinity, one / (minus_four % minus_two), "0000");
assertEquals(Infinity, one / (four % two), "0000");
assertEquals(Infinity, one / (four % minus_two), "0000");


assertEquals(-Infinity, one / (0 * minus_one), "0000");
assertEquals(-Infinity, one / (-0 * zero), "0000");
assertEquals(Infinity, one / (0 * zero), "0000");
assertEquals(0, one / (-0 * minus_one), "0000");

assertEquals(-Infinity, one / (0 / minus_one), "0000");
assertEquals(Infinity, one / (0 / one), "0000");

assertEquals(-Infinity, one / (-0 % two), "0000");
assertEquals(-Infinity, one / (-0 % minus_two), "0000");
assertEquals(Infinity, one / (0 % two), "0000");
assertEquals(Infinity, one / (0 % minus_two), "0000");


assertEquals(-Infinity, one / (zero * -0), "00000");
assertEquals(-Infinity, one / (minus_one * 0), "00000");
assertEquals(Infinity, one / (zero * 0), "00000");
assertEquals(0, one / (minus_one * -0), "00000");

assertEquals(-Infinity, one / (zero / -0), "00000");
assertEquals(Infinity, one / (zero / 0), "00000");

assertEquals(-Infinity, one / (minus_four % 0), "00000");
assertEquals(-Infinity, one / (minus_four % -0), "00000");
assertEquals(Infinity, one / (four % 0), "00000");
assertEquals(Infinity, one / (four % -0), "00000");


assertEquals(-Infinity, one / (-0), "00000");

assertEquals(-Infinity, one / (0 * -0), "00000");
assertEquals(-Infinity, one / (-0 * 0), "00000");
assertEquals(Infinity, one / (0 * 0), "00000");
assertEquals(0, one / (-0 * -0), "00000");

assertEquals(-Infinity, one / (0 / -0), "00000");
assertEquals(Infinity, one / (0 / 0), "00000");

assertEquals(-Infinity, one / (-0 % 0), "000000000");
assertEquals(-Infinity, one / (-0 % -0), "000000000");
assertEquals(Infinity, one / (0 % 0), "000000000");
assertEquals(Infinity, one / (0 % -0), "000000000");


x0= 0;
z0= 3000;

function foo(x) {
  var y0= -x0+ z;
  return -x;
}

assertEquals(-0, foo(x));
assertEquals(-0, foo(x));
