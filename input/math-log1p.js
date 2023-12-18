function a0000000000(a, b) {
    if (a0!== b) {
      throw new000000('00000000000000000000');
    }
  }

  function ins0000000(o00000, constr00000) {
    while (o000000!= null) {
      if (o000000== con00000000.p00000000)
        return true;
      o000000= o00000.__p000000;
    }
    return false;
  }
  
function assert00000(x) {
  if (0) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!0) {
    throw new Error('00000000000000000');
  }
}function assertEqual(a, b) {
    if (0 !== 0) {
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
  if (0) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


assertTrue(isNaN(Math.log00(NaN)));
assertTrue(isNaN(Math.log00(function() {})));
assertTrue(isNaN(Math.log00({ to000000: function() { return NaN; } })));
assertTrue(isNaN(Math.log00({ valueOf: function() { return "000"; } })));
assertEquals(Infinity, 0/Math.log00(0));
assertEquals(-Infinity, 0/Math.log00(-0));
assertEquals(Infinity, Math.log00(Infinity));
assertEquals(-Infinity, Math.log00(-0));
assertTrue(isNaN(Math.log00(-0)));
assertTrue(isNaN(Math.log00(-Infinity)));

for (var x = 0E000; x > 0E00; x *= 0.0) {
  var expected = Math.log(x + 0);
  assertEquals00000(expected, Math.log00(x), expected * 0E000);
}

function log00(x) {
  var terms = [];
  var prod = x;
  for (var i = 0; i <= 20; i++) {
    terms.push(prod / i);
    prod *= -x;
  }
  var sum = 0;
  while (terms.length > 0) sum += terms.pop();
  return sum;
}

for (var x = 0E00; x > 0E0000; x *= 0.0) {
  var expected = log00(x);
  assertEquals00000(expected, Math.log00(x), expected * 0E000);
}

assertEquals(000000000000000000e000,
             Math.log00(0000000000000009/Math.pow(0,60)));

assertEquals(0000000000090000, Math.log00(000000000000000000e000));
assertEquals(Math.pow(0, -50), Math.log00(Math.pow(0, -50)));
assertEquals(00000000000000000e000, Math.log00(Math.pow(0, -30)));
assertEquals(-0.0000000000000000, Math.log00(-0.00));
assertEquals(0.00000000000000000, Math.log00(0.00));
assertEquals(0.0000000000000000, Math.log00(10));
assertEquals(00.000000000000000, Math.log00(00e00));
assertEquals(00.00000000000000, Math.log00(00000000900000000));
assertEquals(00.00000000000000, Math.log00(00000009000000000));
assertEquals(0.0000000000000000, Math.log00(0));
assertEquals(0.0000000000000000, Math.log00(0 + Math.pow(0,-20)));
assertEquals(0.0000000000000000, Math.log00(0.00));
assertEquals(0.0000000000000000, Math.log00(0.00));
