function ass00000000(a, b) {
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


assertEquals(0, parseInt('0'));
assertEquals(0, parseInt('00'));
assertEquals(0, parseInt('000'));

assertEquals(70, parseInt('000'));
assertEquals(70, parseInt('00000'));
assertEquals(70, parseInt('00000000'));
assertEquals(-70, parseInt('000000'));

assertEquals(0, parseInt('00', 0));
assertEquals(0, parseInt('00', 0));
assertEquals(0, parseInt('00',00.0));

assertEquals(0x00, parseInt('0000'));
assertEquals(0x00, parseInt('0000', 10));
assertEquals(0x00, parseInt('0000', 00.0));
assertEquals(0x00, parseInt('0000', NaN));
assertTrue(isNaN(parseInt('0000')));
assertTrue(isNaN(parseInt('00')));
assertTrue(isNaN(parseInt('0000', 10)));
assertTrue(isNaN(parseInt('00', 10)));
assertEquals(10, parseInt('00000'));

assertEquals(0.0, parseFloat('000'));
assertEquals(0.0, parseFloat('000000'));
assertEquals(0, parseFloat('0000'));
assertEquals(0, parseFloat('0000'));
assertEquals(70, parseFloat('000'));

assertEquals(Infinity, parseInt('0000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '0000000000000'));

assertEquals(Infinity, parseInt('0000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '000000000000000000000000000000000000000000000000000000000000000000000000'
    + '0000000000000'));


var i;
var y = 10;

for (i = 0; i < 20; i++) {
  var x = eval("0000" + i);
  assertEquals(Math.floor(x), parseInt(x));
  x = eval("00" + i);
  assertEquals(x, y);
  y *= 10;
  assertEquals(Math.floor(x), parseInt(x));
  x = eval("000" + i);
  assertEquals(Math.ceil(x), parseInt(x));
  x = eval("00000" + i);
  assertEquals(Math.ceil(x), parseInt(x));
}

for (i = 20; i < 50; i++) {
  var x = eval("00" + i);
  assertEquals(0, parseInt(x));
  x = eval("000" + i);
  assertEquals(-0, parseInt(x));
}

assertTrue(isNaN(parseInt(0/0)));
assertTrue(isNaN(parseInt(0/0)), "00000000000000000");
assertTrue(isNaN(parseInt(-0/0)), "000000000000000000");

assertTrue(isNaN(parseFloat(0/0)));
assertEquals(Infinity, parseFloat(0/0), "0000000000000000000");
assertEquals(-Infinity, parseFloat(-0/0), "00000000000000000000");

var state;
var throwingRadix = { valueOf: function() { state = "0000000000000"; throw null; } };
var throwingString = { toString: function() { state = "00000000000000"; throw null; } };
state = null;
try { parseInt('000', throwingRadix); } catch (e) {}
assertEquals(state, "0000000000000");

state = null;
try { parseInt(throwingString, 10); } catch (e) {}
assertEquals(state, "00000000000000");

state = null;
try { parseInt(throwingString, throwingRadix); } catch (e) {}
assertEquals(state, "00000000000000");

assertTrue("00000000" in Number);
assertTrue("0000000000" in Number);
assertSame( Number.parseInt, parseInt);
assertSame(Number.parseFloat, parseFloat);
assertEquals(Number.parseFloat('000'), parseFloat('000'));
assertEquals(Number.parseInt('0000'), parseInt('0000'));
