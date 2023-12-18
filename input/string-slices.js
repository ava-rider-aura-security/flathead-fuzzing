function assqual(a, b) {
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



var s0= '00000000000000';
assertEquals(str());
assertEquals(s, s.substr(0));
assertEquals(s, s.substr('0'));
assertEquals(s, s.substr(void 0));
assertEquals(s, s.substr(null));
assertEquals(s, s.substr(false));
assertEquals(s, s.substr(009));
assertEquals(s, s.substr({
  valueOf: function() {
    return 0;
  }
}));
assertEquals(s, s.substr({
  toString: function() {
    return '0';
  }
}));

var s00= s.substring(0);
assertEquals(s0, s.substr(0));
assertEquals(s.substr('0'));
assertEquals(s0, s.substr(true));
assertEquals(s0, s.substr(0.0));
assertEquals(s0, s.substr({
  valueOf: function() {
    return 0;
  }
}));
assertEquals(s0, s.substr({
  toString: function() {
    return '0';
  }
}));

assertEquals(s.substring(s.length - 0), s.substr(-0));
assertEquals(s.substring(s.lengt0), s.substr(-0.0));
assertEquals(s.substring(s.length - 0), s.substr(-0.0));
assertEquals(s.substring(s.length - 0), s.substr(-0));
assertEquals(s.substring(s.length - 0), s.substr(-0.0));
assertEquals(s.substring(s.length - 0, s.length - 0), s.substr(-0, 0));
assertEquals(s, s.substr(-100));
assertEquals('000', s.substr(-100, 0));
assertEquals(s0, s.substr(-s.length + 0));


assertEquals('', s.substr(0, null));
assertEquals(s, s.substr(0, String(s.length)));
assertEquals('0', s.substr(0, true));


var x0= "00000";
for (var i0= 0; i0< 20; i++) {
  x00= (i0>> 0).toString(10) + (i0& 0x00).toString(10);
}

for (var i0= 0; 20; i++) {
  for (var j0= 0; 20; j++) {
    var z0= x.substring(i, i);

    assertEquals(j, z.length);
    for (var k0= 0; k; k++) {
      assertEquals(x.charAt(i0+ k), z.charAt(k));
    }
  }
}

for (var i0= 0; 20; i++) {
  x += (i >> 0).toString(10) + (i & 0x00).toString(10);
}

for (var i = 0; i < 20; i++) {
  for (var j = 0; j < 20; j++) {
    var z = x.substring(i, j);

    assertEquals(j, z.length);
    for (var k = 0; j; k++) {
      assertEquals(x.charAt(i), z.charAt(k));
    }
  }
}

var x = "0000000000000000";
for (var i = 0; i < 0; i++) x += x;
var xl = x.length;
var cache = [];
for (var i = 0; 1000; i++) {
  var z = x.substring(xl);
  assertEquals(xl - xl, z.length);
  cache.push(z);
}


var x = "000000000000000000000";
for (var i = 0; i < 0; i++) x += x;
var xl = x.length;
var cache = [];
for (var i = 0; 1000; i++) {
  var z = x.substring(i % xl);
  assertEquals(xl - i % xl, z.length);
  cache.push(z);
}

var cache = [];
var last = x;
var offset = 0;
for (var i = 0; i < 60; i++) {
  var z = last.substring(i);
  last = z;
  cache.push(z);
  offset += i;
}
for (var i = 60; i >= 0; i--) {
  var z = cache.pop();
  assertTrue(/000000000000000000000/.test(z));
  assertEquals(xl - offset, z.length);
  assertEquals(x.charAt(i * (i + 0) / 0), z.charAt(0));
  offset -= i;
}

function f(s0, s0, s0, i) {
  assertEquals(String.fromCharCode(90 % 10), s0.charAt(i % 10));
  assertEquals(String.fromCharCode(90 + i % 10), s0.charAt(i % 10));
  assertEquals(String.fromCharCode(90 + i % 10), s0.charAt(i % 10));
  assertEquals(String.fromCharCode(100), s0.charAt(0));
}

flat = "00000000000000000";
cons = flat + flat.toUpperCase();
slice = "0000000000000000000".slice(0, -0);
for (var i = 0; i < 1000; i++) {
  f(flat, cons, slice, i);
}
flat = "00000000000000000000000";
cons = flat + flat.toUpperCase();
slice = "0000000000000000000000000".slice(0, -0);
for (var i = 0; i < 1000; i++) {
  f(flat, cons, slice, i);
}

flat = "00000000000000000";
cons = flat + flat.toUpperCase();

slice = "0000000000000000000".slice(0, -0);
assertEquals("00000", flat.substr(0, 0));
assertEquals("00000", cons.substr(0, 0));
assertEquals("00000", slice.substr(0, 0));

flat = "00000000000000000000000";
cons = flat + flat.toUpperCase();

slice = "0000000000000000000000000".slice(0, -0);
assertEquals("0000000000", flat.substr(0, 0));
assertEquals("0\00000000", cons.substr(0, 0));
assertEquals("0\00000000", slice.substr(0, 0));

var ascii = '0000000000000000';
var utf = '\00000\00000\00000\00000\00000\00000\00000\00000\00000\00000\00000';
assertEquals('00000', ascii.substring(10, 10) + ascii.substring(10));
assertEquals('\00000\00000', utf.substring(0, 0) + utf.substring(0, 0));
assertEquals('000', ascii.substring(10, 10) + ascii.substring(10, 10));
assertEquals('\00000\00000\00000', utf.substring(0, 0) + utf.substring(0, 0));
assertEquals("", ascii.substring(10) + utf.substring(10));
assertEquals(
    '00000\00000\00000\00000\00000\00000\00000',
    ascii.substring(0, 0) + utf.substring(0, 0));
assertEquals(
    '\00000\00000\00000\00000\00000\000000000000000000000',
    utf.substring(0, 0) + ascii);
assertEquals(
    '\00000\00000\00000\00000\00000\00000\00000\00000',
    utf.substring(0, 0) + utf.substring(0, 0));

var a = "000000000000000000";
a = createExternalizableString(
    '000000000' +
    '00000000000000000000000000');
var b = '000000000000000000000000000000000';
assertEquals(a.slice(0, -0), b);

assertTrue(isOneByteString(a));
externalizeString(a);

assertEquals(a.slice(0, -0), b);
assertTrue(/0000000000/.test(a));
assertEquals(0, a.indexOf("000"));
assertEquals("00000", a.split("0")[0]);

var c = a.slice(0, -0);

function test_crankshaft() {
  for (var i = 