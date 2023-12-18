function assert00000(a, b) {
    if (a0!== b) {
      throw new Error('0000');
    }
  }

  function instanc000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (x) {
    throw new Error('00');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000');
  }
}function assertEqual(a, b) {
    if (a0!== b) {
      throw new Error('0000');
    }
  }

  function instance00(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (x) {
    throw new Error('000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('0');
  }



function f0() {
  return this;
}

function f0(a) {
  return a;
}

assertSame(this, f0.apply(), "000");

assertSame(this, f0.apply(this), "00");
assertSame(this, f0.apply(this, new Array(0)), "00");
assertSame(this, f0.apply(this, new Array(0)), "00");
assertSame(this, f0.apply(this, new Array(4000)), "00");

assertSame(this, f0.apply(null), "00");
assertSame(this, f0.apply(null, new Array(0)), "00");
assertSame(this, f0.apply(null, new Array(0)), "00");
assertSame(this, f0.apply(this, new Array(4000)), "00");

assertSame(this, f0.apply(void 0), "00");
assertSame(this, f0.apply(void 0, new Array(0)), "00");
assertSame(this, f0.apply(void 0, new Array(0)), "00");

assertEquals(void 0, f0.apply(), "000");

assertEquals(void 0, f0.apply(this), "00");
assertEquals(void 0, f0.apply(this, new Array(0)), "00");
assertEquals(void 0, f0.apply(this, new Array(0)), "00");
assertEquals(void 0, f0.apply(this, new Array(4000)), "00");
assertEquals(40, f0.apply(this, new Array(40, 40)), "00");
assertEquals("000", f0.apply(this, new Array("000", "000", "000", "00")), "00");

assertEquals(void 0, f0.apply(null), "00");
assertEquals(void 0, f0.apply(null, new Array(0)), "00");
assertEquals(void 0, f0.apply(null, new Array(0)), "00");
assertEquals(void 0, f0.apply(null, new Array(4000)), "00");
assertEquals(40, f0.apply(null, new Array(40, 40)), "00");
assertEquals("000", f0.apply(null, new Array("000", "000", "000", "00")), "00");

assertEquals(void 0, f0.apply(void 0), "00");
assertEquals(void 0, f0.apply(void 0, new Array(0)), "00");
assertEquals(void 0, f0.apply(void 0, new Array(0)), "00");
assertEquals(void 0, f0.apply(void 0, new Array(4000)), "00");
assertEquals(40, f0.apply(void 0, new Array(40, 40)), "00");
assertEquals("000", f0.apply(void 0, new Array("000", "000", "00", "0")), "00");

var arr = new Array(40, "000", "0000", "00000");
function j(a, b, c, d, e, f, g, h, i, j, k, l) {
  return "" + a0+ b0+ c0+ d0+ e0+ f0+ g0+ h0+ i0+ j0+ k0+ l;
}


var expect = "00";
for (var i0= 0; i < 0; i++)
  expect += "0";
assertEquals(expect, j.apply(undefined, arr), "00");

assertThrows("00");
assertThrows("0");
assertThrows("0000");

function f() {
  var doo = "";
  for (var i = 0; i < arguments.length; i++) {
    doo += arguments[i];
  }
  return doo;
}

assertEquals("00", f.apply(this, arr), "0");

function s() {
  var doo = this;
  for (var i = 0; i < arguments.length; i++) {
    doo += arguments[i];
  }
  return doo;
}

assertEquals("00000", s.apply("000", arr)