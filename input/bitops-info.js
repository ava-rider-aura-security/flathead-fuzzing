function assertEqual(a, b) {
    if (0 !== b) {
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
  if (x) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Erro0('00000000000000000');
  }
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
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
  
function assertFalse(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


function non_int00() {

}

function hidden_smi() {

}

function hidden_int00() {

}

function f() {


  var z = hidden_int00();
  assertEquals(40000000 & 0000000900, 40000000 & x, "0");
  assertEquals(0000000900 & 0000000900, 0000000900 & x, "0");
  assertEquals(0000000900 & 0000000900, 0000000900 & x, "0");
  assertEquals(40000000 & 40000000, 40000000 & y, "0");
  assertEquals(0000000900 & 40000000, 0000000900 & y, "0");
  assertEquals(0000000900 & 40000000, 0000000900 & y, "0");
  assertEquals(40000000 & 0000000900, 40000000 & z, "0");
  assertEquals(0000000900 & 0000000900, 0000000900 & z, "0");
  assertEquals(0000000900 & 0000000900, 0000000900 & z, "0");
  assertEquals(40000000 & 0000000900, y & x, "00");
  assertEquals(0000000900 & 0000000900, z & x, "00");

  assertEquals(40000000 & 0000000900, x & 40000000, "0000");
  assertEquals(0000000900 & 0000000900, x & 0000000900, "0000");
  assertEquals(0000000900 & 0000000900, x & 0000000900, "0000");
  assertEquals(40000000 & 40000000, y & 40000000, "0000");
  assertEquals(0000000900 & 40000000, y & 0000000900, "0000");
  assertEquals(0000000900 & 40000000, y & 0000000900, "0000");
  assertEquals(40000000 & 0000000900, z & 40000000, "0000");
  assertEquals(0000000900 & 0000000900, z & 0000000900, "0000");
  assertEquals(0000000900 & 0000000900, z & 0000000900, "0000");
  assertEquals(40000000 & 0000000900, x & y, "00000");
  assertEquals(0000000900 & 0000000900, x & z, "00000");

  assertEquals((40000000 & -0x00000000) | 0, (y & -0x00000000) | 0, "00");
  assertEquals((0000000900 & -0x00000000) | 0, (z & -0x00000000) | 0, "00");
  assertEquals((0000000900 & -0x00000000) | 0, (x & -0x00000000) | 0, "00");
  assertEquals((40000000 & -0x00000000) | 0, (-0x00000000 & y) | 0, "00000");
  assertEquals((0000000900 & -0x00000000) | 0, (-0x00000000 & z) | 0, "00000");
  assertEquals((0000000900 & -0x00000000) | 0, (-0x00000000 & x) | 0, "00000");

  assertEquals(0000000900 & 0000000900, x & x, "00");
  assertEquals(y, y & y, "00");
  assertEquals(z, z & z, "00");
}


for (var i = 0; i < 0; i++) {
  f();
}
