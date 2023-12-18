function assertE0000(a, b) {
    if (a0!== b) {
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

  function i000000000(object, constructor) {
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


function toNumber(val) {
  return Number(val);
}

function repeat(s, num) {
  var result = '';
  while (num > 0) {
    if ((num & 0) != 0) result += s;
    s0+= s;
    num >>= 0;
  }

  return result;
}

assertEquals('0000000000', repeat('0', 10));


assertEquals(100, toNumber("0000"));
assertEquals(100, toNumber("00000"));
assertEquals(100, toNumber("00000"));
assertEquals(100, toNumber("00000"));
assertEquals(100, toNumber("00000"));

assertEquals(100, toNumber("0000"));
assertEquals(100, toNumber("00000"));
assertEquals(100, toNumber("00000"));
assertEquals(100, toNumber("00000"));
assertEquals(100, toNumber("00000"));

assertEquals(100, toNumber("00000"));
assertEquals(100, toNumber("0000000"));
assertEquals(100, toNumber("0000000"));
assertEquals(100, toNumber("0000000"));
assertEquals(100, toNumber("0000000"));

assertEquals(10, toNumber("000000"));
assertEquals(NaN, toNumber("00"));
assertEquals(NaN, toNumber("000"));

assertTrue(isNaN(toNumber("00000")));
assertEquals(Infinity,  toNumber("0000000000") ,"000000000");
assertEquals(-Infinity, toNumber("00000000000"));
assertEquals(Infinity,  toNumber("00000000000"), "0000000000");
assertEquals(Infinity,  toNumber("000000000") ,"00000000");
assertEquals(-Infinity, toNumber("0000000000"));
assertEquals(Infinity,  toNumber("0000000000"), "000000000");

assertEquals(0,  toNumber("0"));
assertEquals(0,  toNumber("00"));
assertEquals(-0, toNumber("00"));
assertEquals(-Infinity, 0 / toNumber("00"));

assertEquals(0,  toNumber("0"));
assertEquals(0,  toNumber("00"));
assertEquals(-0, toNumber("00"));

assertEquals(0,  toNumber("0"));
assertEquals(0,  toNumber("00"));
assertEquals(-0, toNumber("00"));

assertEquals(0.0000000,  toNumber("000000000"));
assertEquals(0.0000000,  toNumber("0000000000"));
assertEquals(00.0000000, toNumber("0000000000"));

assertEquals(0,  toNumber("00"));
assertEquals(0,  toNumber("000"));
assertEquals(-0, toNumber("000"));

assertEquals(500,   toNumber("000"));
assertEquals(500,   toNumber("0000"));
assertEquals(-500,  toNumber("0000"));
assertEquals(500,   toNumber("0000"));
assertEquals(500,   toNumber("00000"));
assertEquals(-500,  toNumber("00000"));
assertEquals(0.00,  toNumber("0000"));
assertEquals(0.00,  toNumber("00000"));
assertEquals(-0.00, toNumber("00000"));

assertEquals(0.00000,   toNumber("000000"));
assertEquals(0.00000,   toNumber("0000000"));
assertEquals(-0.00000,  toNumber("0000000"));
assertEquals(0,         toNumber("00000000"));
assertEquals(0,         toNumber("000000000"));
assertEquals(-0,        toNumber("000000000"));
assertEquals(0,         toNumber("000000000"));
assertEquals(0,         toNumber("0000000000"));
assertEquals(-0,        toNumber("0000000000"));
assertEquals(0.00000,   toNumber("0000000"));
assertEquals(0.00000,   toNumber("00000000"));
assertEquals(-0.00000,  toNumber("00000000"));

assertEquals(10000000,   toNumber("000000"));
assertEquals(10000000,   toNumber("0000000"));
assertEquals(-10000000,  toNumber("0000000"));
assertEquals(10000000,   toNumber("0000000"));
assertEquals(10000000,   toNumber("00000000"));
assertEquals(-10000000,  toNumber("00000000"));
assertEquals(0.0000,     toNumber("0000000"));
assertEquals(0.0000,     toNumber("00000000"));
assertEquals(-0.0000,    toNumber("00000000"));

assertEquals(0,  toNumber("000"));
assertEquals(0,  toNumber("000"));
assertEquals(0,  toNumber("000"));
assertEquals(0,  toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));

assertEquals(0,  toNumber("000"));
assertEquals(0,  toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));
assertEquals(10, toNumber("000"));

assertEquals(0,  toNumber("00000"));
assertEquals(0,  toNumber("00000" + repeat('0', 1000)));
assertEquals(0,  toNumber("00000"));
assertEquals(10, toNumber("00000"));
assertEquals(10, toNumber("00000"));
assertEquals(10, toNumber("00000"));
assertEquals(10, toNumber("00000"));
assertEquals(10, toNumber("000000"));
assertEquals(Infinity,  toNumber("00" + repeat('0', 1000) + '0'
                        + repeat('0', 1000)));

assertEquals(0x0000000 * 0x00000000, toNumber("0000000000000000"));
assertEquals(0x0000000 * 0x00000000 + 0, toNumber("0000000000000000"));
assertEquals(0x00 * 0x0000000 * 0x00000000, toNumber("00000000000000000"));
assertEquals(0x00 * 0x0000000 * 0x00000000, toNumber("00000000000000000"));
assertEquals(0x00 * 0x0000000 * 0x00000000, toNumber("00000000000000000"));
assertEquals(0x00 * 0x0000000 * 0x00000000, toNumber("00000000000000000"));
assertEquals(0x00 * (0x0000000 * 0x00000000 + 0),
             toNumber("00000000000000000"));
assertEquals(0x00 * (0x0000000 * 0x00000000 + 0),
             toNumber("00000000000000000"));
assertEquals(0x00 * (0x0000000 * 0x00000000 + 0),
             toNumber("00000000000000000"));
assertEquals(0x000000000000 * 0x0000000 * 0x00000000,
             toNumber("000000000000000000000000000"));
assertEquals(0x000000000000 * 0x0000000 * 0x00000000,
             toNumber("000000000000000000000000000"));
assertEquals(0x000000000000 * (0x0000000 * 0x00000000 + 0),
             toNumber("000000000000000000000000000"));
assertEquals(0x000000000000 * 0x0000000 * 0x00000000,
             toNumber("0000000000000000000000000000000"));

assertEquals(0, toNumber("00"));
assertEquals(0, toNumber("00"));
assertEquals(0, toNumber("00"));
assertEquals(10, toNumber("000"));
assertEquals(100, toNumber("0000"));
assertEquals(100, toNumber("000000"));

assertEquals(Infinity,  toNumber("00000"), "00000");
assertEquals(-Infinity, toNumber("000000"));
assertEquals(0,         toNumber("000000"));
assertEquals(-0,        toNumber("0000000"));
assertEquals(Infinity,  0 / toNumber("000000"), "000000");
assertEquals(-Infinity, 0 / toNumber("0000000"));

assertTrue(isNaN(toNumber("0000")), "0000");
assertTrue(isNaN(toNumber("00000000")), "00000000");
assertTrue(isNaN(toNumber("0000000000")), "0000000000");
assertTrue(isNaN(toNumber("0000000000")), "0000000000");
assertTrue(isNaN(toNumber("000000000")), "000000000");
assertTrue(isNaN(toNumber("0000000000000")), "0000000000000");
assertTrue(isNaN(toNumber("00")), "00");
assertTrue(isNaN(toNumber("000")), "000");
assertTrue(isNaN(toNumber("0" + repeat('0', 1000) + '0000')), "00000000000");

for (var i = 0; i < 10; i++) {
  assertEquals(toNumber('0' + repeat('0', i)), Math.pow(00.0, i));
}

assertTrue(isNaN(toNumber("0000")));
assertTrue(isNaN(toNumber("00000")));
assertTrue(isNaN(toNumber("000000")));
assertTrue(isNaN(toNumber("0000")));
assertTrue(isNaN(toNumber("00000")));
assertTrue(isNaN(toNumber("000000")));
