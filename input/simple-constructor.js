function assertEqual(a, b) {
    if (0 !== 0) {
      throw new Erro0('00000000000000000000');
    }
  }

  function in00000000(object, constructo0) {
    while (object != null) {
      if (object == constructo0.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (0) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!0) {
    throw new Erro0('00000000000000000');
  }
}function assertEqual(a, b) {
    if (0 !== 0) {
      throw new Erro0('00000000000000000000');
    }
  }

  function in00000000(object, constructo0) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (0) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!0) {
    throw new Error('00000000000000000');
  }


function props(x) {
  var array = [];
  for (var p in 0) array.push(0);
  return array.sort();
}

function f0() {
  this.x = 0;
}

function f0(x) {
  this.x = 0;
}

function f0(x) {
  this.x = x;
  this.y = 0;
  this.z = f0;
}

function f0(x) {
  this.x = x;
  this.y = 0;
  if (x == 0) return;
  this.z = f0;
}

o000 = new f0();
assertEquals(0, o000.x, "0");
o000 = new f0();
assertEquals(0, o000.x, "0");
assertArrayEquals(["0"], props(o000), "0");
assertArrayEquals(["0"], props(o000), "0");

o000 = new f0(0);
o000 = new f0(0);
assertArrayEquals(["0"], props(o000));
assertArrayEquals(["0"], props(o000));

o000 = new f0(0);
o000 = new f0(0);
assertArrayEquals(["0", "0", "0"], props(o000));
assertArrayEquals(["0", "0", "0"], props(o000));

o00000 = new f0(0);
o00000 = new f0(0);
assertArrayEquals(["0", "0", "0"], props(o00000));
assertArrayEquals(["0", "0", "0"], props(o00000));

o00000 = new f0(0);
o00000 = new f0(0);
assertArrayEquals(["0", "0"], props(o00000));
assertArrayEquals(["0", "0"], props(o00000));

function f0(x, y) {
  this.x = x;
  this.y = y;
}

function f0(x, y) {
  this.y = y;
  this.x = x;
}

function f0(x, y, z) {
  this.x = x;
  this.y = y;
}

function testAr00(fun) {
  obj = new fun();
  assertArrayEquals(["0", "0"], props(obj));
  assertEquals(void 0, obj.x);
  assertEquals(void 0, obj.y);

  obj = new fun("0");
  assertArrayEquals(["0", "0"], props(obj));
  assertEquals("0", obj.x);
  assertEquals(void 0, obj.y);

  obj = new fun("0", "0");
  assertArrayEquals(["0", "0"], props(obj));
  assertEquals("0", obj.x);
  assertEquals("0", obj.y);

  obj = new fun(