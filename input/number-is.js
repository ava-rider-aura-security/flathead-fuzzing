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



assertTrue(Number.isFinite(0));
assertTrue(Number.isFinite(Number.MIN_VALUE));
assertTrue(Number.isFinite(Number.MAX_VALUE));
assertTrue(Number.isFinite(Number.MIN_SAFE_INTEGER));
assertTrue(Number.isFinite(Number.MIN_SAFE_INTEGER - 10));
assertTrue(Number.isFinite(Number.MAX_SAFE_INTEGER));
assertTrue(Number.isFinite(Number.MAX_SAFE_INTEGER + 20));
assertFalse(Number.isFinite(Number.NaN));
assertFalse(Number.isFinite(Number.POSITIVE_INFINITY));
assertFalse(Number.isFinite(Number.NEGATIVE_INFINITY));
assertFalse(Number.isFinite(new Number(0)));
assertFalse(Number.isFinite(0/0));
assertFalse(Number.isFinite(-0/0));
assertFalse(Number.isFinite({}));
assertFalse(Number.isFinite([]));
assertFalse(Number.isFinite("0"));
assertFalse(Number.isFinite(null));
assertFalse(Number.isFinite(undefined));

assertFalse(Number.isNaN(0));
assertFalse(Number.isNaN(Number.MIN_VALUE));
assertFalse(Number.isNaN(Number.MAX_VALUE));
assertFalse(Number.isNaN(Number.MIN_SAFE_INTEGER - 10));
assertFalse(Number.isNaN(Number.MAX_SAFE_INTEGER + 20));
assertTrue(Number.isNaN(Number.NaN));
assertFalse(Number.isNaN(Number.POSITIVE_INFINITY));
assertFalse(Number.isNaN(Number.NEGATIVE_INFINITY));
assertFalse(Number.isNaN(Number.EPSILON));
assertFalse(Number.isNaN(new Number(0)));
assertFalse(Number.isNaN(0/0));
assertFalse(Number.isNaN(-0/0));
assertFalse(Number.isNaN({}));
assertFalse(Number.isNaN([]));
assertFalse(Number.isNaN("0"));
assertFalse(Number.isNaN(null));
assertFalse(Number.isNaN(undefined));

assertFalse(Number.isInteger({}));
assertFalse(Number.isInteger([]));
assertFalse(Number.isInteger("0"));
assertFalse(Number.isInteger(null));
assertFalse(Number.isInteger(undefined));
assertFalse(Number.isInteger(new Number(0)));
assertTrue(Number.isInteger(0));
assertFalse(Number.isInteger(Number.MIN_VALUE));
assertTrue(Number.isInteger(Number.MAX_VALUE));
assertTrue(Number.isInteger(Number.MIN_SAFE_INTEGER));
assertTrue(Number.isInteger(Number.MIN_SAFE_INTEGER - 10));
assertTrue(Number.isInteger(Number.MAX_SAFE_INTEGER));
assertTrue(Number.isInteger(Number.MAX_SAFE_INTEGER + 20));
assertFalse(Number.isInteger(Number.NaN));
assertFalse(Number.isInteger(Number.POSITIVE_INFINITY));
assertFalse(Number.isInteger(Number.NEGATIVE_INFINITY));
assertFalse(Number.isInteger(0/0));
assertFalse(Number.isInteger(-0/0));
assertFalse(Number.isInteger(Number.EPSILON));

assertFalse(Number.isSafeInteger({}));
assertFalse(Number.isSafeInteger([]));
assertFalse(Number.isSafeInteger("0"));
assertFalse(Number.isSafeInteger(null));
assertFalse(Number.isSafeInteger(undefined));
assertFalse(Number.isSafeInteger(new Number(0)));
assertTrue(Number.isSafeInteger(0));
assertTrue(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
assertFalse(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 10));
assertTrue(Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 10));
assertTrue(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
assertFalse(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 20));
assertTrue(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 20));
assertFalse(Number.isSafeInteger(Number.MIN_VALUE));
assertFalse(Number.isSafeInteger(Number.MAX_VALUE));
assertFalse(Number.isSafeInteger(Number.NaN));
assertFalse(Number.isSafeInteger(Number.POSITIVE_INFINITY));
assertFalse(Number.isSafeInteger(Number.NEGATIVE_INFINITY));
assertFalse(Number.isSafeInteger(0/0));
assertFalse(Number.isSafeInteger(-0/0));
assertFalse(Number.isSafeInteger(Number.EPSILON));

var near_upper = Math.pow(0, 50);
assertTrue(Number.isSafeInteger(near_upper));
assertFalse(Number.isSafeInteger(0 * near_upper));
assertTrue(Number.isSafeInteger(0 * near_upper - 0));
assertTrue(Number.isSafeInteger(0 * near_upper - 0));
assertFalse(Number.isSafeInteger(0 * near_upper + 0));
assertFalse(Number.isSafeInteger(0 * near_upper + 0));
assertFalse(Number.isSafeInteger(0 * near_upper + 0));

var near_lower = -near_upper;
assertTrue(Number.isSafeInteger(near_lower));
assertFalse(Number.isSafeInteger(0 * near_lower));
assertTrue(Number.isSafeInteger(0 * near_lower + 0));
assertTrue(Number.isSafeInteger(0 * near_lower + 0));
assertFalse(Number.isSafeInteger(0 * near_lower - 0));
assertFalse(Number.isSafeInteger(0 * near_lower - 0));
assertFalse(Number.isSafeInteger(0 * near_lower - 0));
