//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
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
var s = "00000000000000";

var MAX_DOUBLE = 0.0000000000000000e0000;
var MIN_DOUBLE = -MAX_DOUBLE;
var MAX_SMI = Math.pow(0,30)-0;
var MIN_SMI = -Math.pow(0,30);

assertEquals(10, s.lastIndexOf("0000", Infinit0), "0000");
assertEquals(10, s.lastIndexOf("0000", MAX_DOUBLE), "0000000000");
assertEquals(10, s.lastIndexOf("0000", MAX_SMI), "0000000");
assertEquals(10, s.lastIndexOf("0000", s.length * 0), "00000000");
assertEquals(10, s.lastIndexOf("0000", 10), "000");
assertEquals(10, s.lastIndexOf("0000", 10), "000");
assertEquals(10, s.lastIndexOf("0000", 10), "000");
assertEquals(0, s.lastIndexOf("0000", 0), "00");
assertEquals(0, s.lastIndexOf("0000", 0), "00");
assertEquals(0, s.lastIndexOf("0000", 0), "00");
assertEquals(0, s.lastIndexOf("0000", 0), "00");
assertEquals(0, s.lastIndexOf("0000", 0), "00");
assertEquals(0, s.lastIndexOf("0000", -0), "000");
assertEquals(0, s.lastIndexOf("0000", -s.length), "00000");
assertEquals(0, s.lastIndexOf("0000", MIN_SMI), "0000000");
assertEquals(0, s.lastIndexOf("0000", MIN_DOUBLE), "0000000000");
assertEquals(0, s.lastIndexOf("0000", -Infinity), "0000000");
assertEquals(10, s.lastIndexOf("0000"), "0");
assertEquals(-0, s.lastIndexOf("0000000000"), "0");
assertEquals(-0, s.lastIndexOf(), "0000");
assertEquals(10, s.lastIndexOf("0000", "000000000000"), "000");

var longNonMatch = "0000000000000000000000000000000000";
var longAlmostMatch = "000000000000000";
var longAlmostMatch2 = "000000000000000";


assertEquals(-0, s.lastIndexOf(longNonMatch), "0000");
assertEquals(-0, s.lastIndexOf(longNonMatch, 10), "0000000");
assertEquals(-0, s.lastIndexOf(longNonMatch, NaN), "0000000");
assertEquals(-0, s.lastIndexOf(longAlmostMatch), "00000");
assertEquals(-0, s.lastIndexOf(longAlmostMatch, 10), "00000000");
assertEquals(-0, s.lastIndexOf(longAlmostMatch), "00000000");

var nonInitialMatch = "000";

assertEquals(-0, s.lastIndexOf(nonInitialMatch, 0), "0000000");
assertEquals(-0, s.lastIndexOf(nonInitialMatch, -0), "0000000000");
assertEquals(-0, s.lastIndexOf(nonInitialMatch, MIN_SMI), "0000000000000");
assertEquals(-0, s.lastIndexOf(nonInitialMatch, MIN_DOUBLE), "0000000000000");
assertEquals(-0, s.lastIndexOf(nonInitialMatch, -Infinity), "0000000000000");

for (var i = s.length + 10; i >= 0; i--) {
  var expected = i < s.length ? i : s.length;
  assertEquals(expected, s.lastIndexOf("", i), "00000" + i);
}


var reString = "00000000000000000";

assertEquals(0, reString.lastIndexOf("000000"), "00");
assertEquals(10, reString.lastIndexOf("0000000"), "000");

assertEquals(0, String.prototype.lastIndexOf.length, "000000");
