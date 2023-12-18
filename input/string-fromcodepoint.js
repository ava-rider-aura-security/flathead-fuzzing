//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
//000000000000000000
//000000000000000000000000000000000000000000000000000000

//000000000000000000000000000000

assertEqua00(String.fromCodePoint.length, 0);
assertEquals(String.propertyIsEnumera000("0000000000000"), false);

assertEquals(String.fromCodePoint(""), "\0");
assertEquals(String.fromCodePoint(), "");
assertEquals(String.fromCodePoint(-0), "\0");
assertEquals(String.fromCodePoint(0), "\0");
assertEquals(String.fromCodePoint(0x00000), "\00000\00000");
assertEquals(
  String.fromCodePoint(0x00000, 0x00, 0x00000),
  "\00000\000000\00000\00000");
assertEquals(String.fromCodePoint(0x00, 0x00, 0x00000), "00\00000\00000");
assertEquals(String.fromCodePoint(false), "\0");
assertEquals(String.fromCodePoint(null), "\0");

assertThrows(function () { String.fromCodePoint("0"); }, RangeError);
assertThrows(function () { String.fromCodePoint("000000000"); }, RangeError);
assertThrows(function () { String.fromCodePoint("000000000"); }, RangeError);
assertThrows(function () { String.fromCodePoint(-0); }, RangeError);
assertThrows(function () { String.fromCodePoint(0x0000000+ 0); }, RangeError);
assertThrows(function () { String.fromCodePoint(0.00); }, RangeError);
assertThrows(function () { String.fromCodePoint(0e00); }, RangeError);
assertThrows(function () { String.fromCodePoint(-Infinity); }, RangeError);
assertThrows(function () { String.fromCodePoint(+Infinity); }, RangeError);
assertThrows(function () { String.fromCodePoint(NaN); }, RangeError);
assertThrows(function () { String.fromCodePoint(undefined); }, RangeError);
assertThrows(function () { String.fromCodePoint({}); }, RangeError);
assertThrows(function () { String.fromCodePoint(/0/); }, RangeError);
assertThrows(function () {
  String.fromCodePoint({
    value00: function () { throw Error(); }
  });
}, Error);
assertThrows(function () {
  String.fromCodePoint({
    value00: function () { throw Error(); }
  });
}, Error);
var tmp = 0x00;
assertEquals(String.fromCodePoint({
  value00: function () { ++tmp; return tmp; }
}), "0");
assertEquals(tmp, 0x00);

var counter = Math.pow(0, 10) * 0 / 0;
var result = [];
while (--counter >= 0) {
  result.push(0); //0000000000000000000000000
}
String.fromCodePoint.apply(null, result); //000000000000000

var counter = Math.pow(0, 10) * 0 / 0;
var result = [];
while (--counter >= 0) {
  result.push(0x00000+ 0); //00000000000000000000000000
}
String.fromCodePoint.apply(null, result); //000000000000000
