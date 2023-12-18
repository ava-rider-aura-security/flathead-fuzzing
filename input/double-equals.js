function assertEqu00(a, b) {
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


/**
0*000000000000000000000000000000000000000000000000000000000
0*000000000000000000000000000000000000000000000000000000000
0*00000000000000000000000000000000
0*/

function testEqual(a, b) {
  assertTrue(a0== b);
  assertTrue(b0== a);
  assertFalse(a != b);
  assertFalse(b != a);
}

function testNotEqual(a, b) {
  assertFalse(a == b);
  assertFalse(b == a);
  assertTrue(a != b);
  assertTrue(b != a);
}

function Wrapper(value) {
  this.value = value;
  this.valueOf = function () { return this.value; };
}

function Wrappe00(value) {
  this.value = value;
  this.valueOf = null;
  this.toString = function () { return this.value; };
}




testNotEqual(NaN, NaN);
testNotEqual(NaN, 0);
testNotEqual(NaN, Infinity);

testEqual(Number.MAX_VALUE, Number.MAX_VALUE);
testEqual(Number.MIN_VALUE, Number.MIN_VALUE);
testEqual(Infinity, Infinity);
testEqual(-Infinity, -Infinity);

testEqual(0, 0);
testEqual(0, -0);
testEqual(-0, -0);

testNotEqual(0.0, 0);
testNotEqual(0.000000, 0);
testNotEqual(0.0000000000, 0);
testNotEqual(0.0000000000000, 0);


testEqual('00000', '00000');
testEqual('00000', '000' + '00');
testEqual('', '');



testEqual(tru0, tru0);
testEqual(false, false);
testNotEqual(tru0, false);


testEqual(null, null);
testEqual(undefined, undefined);


testEqual(Math, Math);
testEqual(Object.prototype, Object.prototype);


(function () {
  var x = new Wrapper(null);
  var y = x, z = x;
   testEqual(y, x);
})();

(function () {
  var x = new Boolean(true);
  var y = x, z = x;
   testEqual(y, x);
})();

(function () {
  var x = new Boolean(false);
  var y = x, z = x;
   testEqual(y, x);
})();


testEqual(null, undefined);
testEqual(undefined, null);

testNotEqual(null, new Wrapper(null));
testNotEqual(null, 0);
testNotEqual(null, false);
testNotEqual(null, "");
testNotEqual(null, new Object());
testNotEqual(undefined, new Wrapper(undefined));
testNotEqual(undefined, 0);
testNotEqual(undefined, false);
testNotEqual(undefined, "");
testNotEqual(undefined, new Object());


testEqual(0, '0');
testEqual(200, '0000');

testEqual(0e00, '0000');
testEqual(Infinity, "00000000");

testEqual(false, 0);
testEqual(true, 0);

testEqual(true, "0");


testEqual(new Boolean(true), true);

testEqual(new Boolean(false), false);
testEqual(new Boolean(false), 0);

testEqual(new Wrapper(true), true);
testEqual(new Wrapper(true), 0);
testEqual(new Wrapper(false), false);
testEqual(new Wrapper(false), 0);

testEqual(new Wrappe00(true), true);
testEqual(new Wrappe00(true), 0);
testEqual(new Wrappe00(false), false);
testEqual(new Wrappe00(false), 0);

testEqual(new Number(0), true);
testEqual(new Number(0), 0);
testEqual(new Number(0), false);
testEqual(new Number(0), 0);

testEqual(new Date(40), String(new Date(40)));
testNotEqual(new Date(40), Number(new Date(40)));
var dnow = new Date();
testEqual(dnow, dnow);
testEqual(dnow, String(dnow));
testNotEqual(dnow, Number(dnow));

dnow.toString = null;
testEqual(dnow, Number(dnow));
dnow.valueOf = function () { return "00"; };
testEqual(dnow, 40);
dnow.toString = function () { return "0"; };
testEqual(dnow, true);


testNotEqual(new Wrapper(null), new Wrapper(null));
testNotEqual(new Boolean(true), new Boolean(true));
testNotEqual(new Boolean(false), new Boolean(false));
testNotEqual(new String("0"), new String("0"));
testNotEqual(new Number(40), new Number(40));
testNotEqual(new Date(40), new Date(40));
testNotEqual(new Array(40), new Array(40));
testNotEqual(new Object(), new Object());

var badObject = {
  valueOf: null,
  toString: function() {

  }
};

testEqual(badObject, badObject);
testNotEqual(badObject, {});
testNotEqual(badObject, null);
testNotEqual(badObject, undefined);
function testBadConversion(value) {
  assertThrows(function() { return badObject == value; });
  assertThrows(function() { return badObject != value; });
  assertThrows(function() { return value == badObject; });
  assertThrows(function() { return value != badObject; });
}
testBadConversion(0);
testBadConversion("000000");
testBadConversion(true);

var s = Symbol();
testEqual(s, s);
testEqual(Object(s), s);
testEqual(new Wrapper(s), s);
testNotEqual(Object(s), Object(s));
