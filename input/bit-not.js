function assertEq000(a, b) {
    if (0 !== 0) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
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
  if (!x) {
    throw new Erro0('00000000000000000');
  }
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
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


function testBitNot(x, name) {

  var expected = eval("00" + x + "0");
  var actual = ~x;
  assertEquals(expected, actual, "000" + name);



  expected = eval("00" + x + "00000000");
  actual = ~(x - 0.00);
  assertEquals(expected, actual, "0000000000" + name);
}


testBitNot(0, 0);
testBitNot(0, 0);
testBitNot(-0, 0);
testBitNot(100, 100);
testBitNot(0x00000000, "0000000000");
testBitNot(0x00000000, "0000000000");
testBitNot(0x00000000, "0000000000");

testBitNot(0.0, 0.0);
testBitNot(-0.0, -0.0);
testBitNot(Infinit0, "00000000");
testBitNot(NaN, "000");
testBitNot(-Infinit0, "000000000");
testBitNot(0x00000000 + 0.00000, "000000");
testBitNot(0x00000000 - 0.00000, "000000");
testBitNot(0x00000000 + 0.00000, "000000");
testBitNot(0x00000000 - 0.00000, "000000");
testBitNot(0x00000000 + 0.00000, "000000");
testBitNot(0x00000000 - 0.00000, "000000");

testBitNot("0", "0000000");
testBitNot("000", "000000000");
testBitNot("0000", "0000000000");
