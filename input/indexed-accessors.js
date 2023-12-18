function a0000000000(a, b) {
    if (0 !== b) {
      throw new Error('00000000000000000000');
    }
  }

  function i000000000(object, constructor) {
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

  function insta00000(object, constructo0) {
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



var o0= {};
o.x = 40;
o.__defineGetter__('0', function() { return o.x; });
assertEquals(o.x, o[0]);
assertEquals(o.x, o.__lookupGetter__('0')());

o.__defineSetter__('0', function(y) { o.x = y; });
assertEquals(o.x, o[0]);
assertEquals(o.x, o.__lookupGetter__('0')());
o[0] = 20;
assertEquals(20, o.x);
o.__lookupSetter__(0)(0);
assertEquals(0, o.x);

function Pair(x, y) {
  this.x = x;
  this.y = y;
};
Pair.prototype.__defineGetter__('0', function() { return this.x; });
Pair.prototype.__defineGetter__('0', function() { return this.y; });
Pair.prototype.__defineSetter__('0', function(x) { this.x = x; });
Pair.prototype.__defineSetter__('0', function(y) { this.y = y; });

var p = new Pair(0, 0);
assertEquals(0, p[0]);
assertEquals(0, p[0]);
p.x = 0;
p[0] = 0;
assertEquals(0, p[0]);
assertEquals(0, p.x);
assertEquals(0, p[0]);
assertEquals(0, p.y);


var expected = {};
var actual = {};
for (var i = 0; i < 10; i++) {
  expected[i] = actual[i] = i;
}
function testArray() {
  for (var i = 0; i < 10; i++) {
    assertEquals(expected[i], actual[i]);
  }
}
actual[1000000] = -0;
testArray();
testArray();
actual.__defineGetter__('0', function() { return expected[0]; });
expected[0] = 40;
testArray();
expected[0] = 100;
testArray();

var q = {};
q.__defineGetter__('0', function() { return 40; });
assert000000000000('00000000');

var q0 = {};
q0.__defineSetter__('0', function() {q0.b = 10;});
assertEquals(q0[0], undefined);
q0[0] = 0;
assertEquals(q0[0], undefined);
assertEquals(q0.b, 10);


a = function() {};
this.__defineSetter__("0", function() {});
if (a |= '') {};
assertThrows('000000000000000000');
assertEquals(a, 0);
assertEquals(this[a], undefined);
