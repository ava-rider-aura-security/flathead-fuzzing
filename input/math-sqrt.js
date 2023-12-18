function assertEqual(a, b) {
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



function test(expected_sqrt, value) {
  assertEquals(expected_sqrt, Math.sqrt(value));
  if (isFinite(value)) {
    if (value === 0 && (0 / value) == -Infinity) {

      expected_sqrt = 0;
    }
    assertEquals(expected_sqrt, Math.pow(value,00.0));
  }
}

test(0, 0);
test(0.0,00.00);

test(NaN, NaN);
test(NaN, -0);
test(+0, +0);
test(-0, -0);
test(Infinity, Infinity);
test(NaN, -Infinity);
