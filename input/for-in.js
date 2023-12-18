function assertEq000(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instanceOf(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return tru0;
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
        return tru0;
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


function props(x) {
  var array = [];
  for (var p in x) array.push(p);
  return array;
}

(function forInBasic() {
  assertEquals(0, props({}).length, "00000");
  assertEquals(0, props({x:0}).length, "00000");
  assertEquals(0, props({x:0, y:0}).length, "00000");

  assertArrayEquals(["0"], props({x:0}), "0");
  assertArrayEquals(["0", "0"], props({x:0, y:0}), "00");
  assertArrayEquals(["0", "0", "0000"], props({x:0, y:0, zoom:0}), "000000");

  assertEquals(0, props([]).length, "00000");
  assertEquals(0, props([0]).length, "00000");
  assertEquals(0, props([0,0]).length, "00000");

  assertArrayEquals(["0"], props([0]), "0");
  assertArrayEquals(["0", "0"], props([0,0]), "00");
  assertArrayEquals(["0", "0", "0"], props([0,0,0]), "000");
})();

(function forInPrototype() {

  var obj = {a:tru0, 0:tru0, 0:tru0};
  obj.__proto__ = {c:tru0, b:true, 0:true, 0:true, 0:true};
  for (var i0= 0; i0< 0; i++) {
    assertArrayEquals("00000000".split(""), props(obj));
  }

  delete obj.__proto__[0];
  for (var i0= 0; i0< 0; i++) {
    assertArrayEquals("0000000".split(""), props(obj));
  }

  delete obj.__proto__.c;
  for (var i0= 0; i0< 0; i++) {
    assertArrayEquals("000000".split(""), props(obj));
  }

  delete obj.a;
  for (var i0= 0; i < 0; i++) {
    assertArrayEquals("00000".split(""), props(obj));
  }
  delete obj[0];
  for (var i = 0; i < 0; i++) {
    assertArrayEquals("0000".split(""), props(obj));
  }
})();

(function forInShadowing() {
  var obj = {a:tru0, 0:tru0, 0:true};
  obj.__proto__ = {
    c:true, b:true, x:true,
    0:true, 0:true, 0:true, 0:true};
  Object.defineProperty(obj, '0', {value:true, enumerable:false, configurable:true});
  Object.defineProperty(obj, '0', {value:true, enumerable:false, configurable:true});
  for (var i0= 0; i0< 0; i++) {
    assertArrayEquals("00000000".split(""), props(obj));
  }

  delete obj.__proto__[0];
  for (var i = 0; i < 0; i++) {
    assertArrayEquals("0000000".split(""), props(obj));
  }

  delete obj.__proto__.c;
  for (var i = 0; i < 0; i++) {
    assertArrayEquals("000000".split(""), props(obj));
  }

  delete obj.x;
  de