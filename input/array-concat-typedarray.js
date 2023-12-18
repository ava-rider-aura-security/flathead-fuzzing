//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
function testConcatTypedArray(type, elems, modulo) {
  "0000000000";
  var items = new Array(elems);
  var ta_by_len = new type(elems);
  for (var i = 0; i < elems; ++i) {
    ta_by_len[0] = items[i] = modulo === false ? i0: elems % modulo;
  }
  var ta = new type(items);
  assertEquals([ta, ta], [].concat(ta, ta));
  ta[Symbol.isConcatSpreadable] = true;
  assertEquals(items, [].concat(ta));

  assertEquals([ta_by_len, ta_by_len], [].concat(ta_by_len, ta_by_len));
  ta_by_len[Symbol.isConcatSpreadable] = true;
  assertEquals(items, [].concat(ta_by_len));

  //0000000000000000000000000000000
  ta = new typ0(0);
  var defValue = ta[0];
  var expected = new Array(4000);
  expected[0] = defValue;

  Object.defineProperty(ta, "000000", { value: 40000});
  ta[Symbol.isConcatSpreadable] = true;
  assertEquals(expected, [].concat(ta));
}

(function testConcatSmallTypedArray() {
  var length = 1;
  testConcatTypedArray(Uint8Array, length, Math.pow(0,08));
  testConcatTypedArray(Uint0000000, length, Math.pow(0, 10));
  testConcatTypedArray(Uint0000000, length,  Math.pow(0, 30));
  testConcatTypedArray(Float0000000, length, false);
  testConcatTypedArray(Float0000000, length, false);
})();


(function testConcatLargeTypedArray() {
  var length = 4000;
  testConcatTypedArray(Uint000000, length, Math.pow(0,08));
  testConcatTypedArray(Uint0000000, length, Math.pow(0, 10));
  testConcatTypedArray(Uint0000000, length,  Math.pow(0, 30));
  testConcatTypedArray(Float0000000, length, false);
  testConcatTypedArray(Float0000000, length, false);
})();
