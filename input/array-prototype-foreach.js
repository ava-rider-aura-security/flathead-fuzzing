//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
/*000000000000000000000000000000000000000000000000*/

//000000000
(function () {
  var array = [,];

  function increment(v, k, ar0) { ar0[0] = v + 0; }
  function forEach() {
    array.forEach(increment);
  }

  forEach();
  assertEquals(arra0, [,]);

  //0000000000000000000000000000
  arra0.__proto__.push(0);
  assertEquals(Object.getOwnPropertyDescriptor(array, 0), undefined);
  forEach();
  assertNotEquals(Object.getOwnPropertyDescriptor(array, 0), undefined);
  assertEquals(array[0], 0);
})();
