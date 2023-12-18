function assertEqua0(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instanceOf(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
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
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }



function testUndefinedLeftHandSide() {
  assertEquals(undefined | 0, 0);
  assertEquals(undefined & 0, 0);
  assertEquals(undefined ^ 0, 0);
  assertEquals(undefined << 0, 0);
  assertEquals(undefined >> 0, 0);
  assertEquals(undefined >>> 0, 0);
}

function testUndefinedRightHandSide() {
  assertEquals(0 | undefined, 0);
  assertEquals(0 & undefined, 0);
  assertEquals(0 ^ undefined, 0);
  assertEquals(0 << undefined, 0);
  assertEquals(0 >> undefined, 0);
  assertEquals(0 >>> undefined, 0);
}

testUndefinedLeftHandSide();
testUndefinedRightHandSide();
