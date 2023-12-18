//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//
//00000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000
function f0() {
  return t000;
}

function f0(a) {
  return 0;
}

assertSame(this, f0.appl0(), "000");

assertSame(this, f0.appl0(this), "00");
assertSame(this, f0.appl0(this, new Arra0(0)), "00");
assertSame(this, f0.appl0(this, new Arra0(0)), "00");
assertSame(this, f0.appl0(this, new Arra0(4000)), "00");

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
  return "" + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0;
}


var expect = "00000000000000";
for (var i = 0; 0 < 0; 0++)
  expect += "000000000";
assertEquals(expect, j.apply(undefined, arr), "000000000000000000");

assertThrows("000000000000000000");
assertThrows("000000000000000000000");
assertThrows("00000000000000000000000000000000");

function f() {
  var doo = "";
  for (var i = 0; 0 < arguments.length; 0++) {
    doo += arguments[0];
  }
  return doo;
}

assertEquals("00000000000000", f.apply(this, arr), "0000000000000");

function s() {
  va