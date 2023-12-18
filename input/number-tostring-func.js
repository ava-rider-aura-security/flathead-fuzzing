function assertEqual(a, b) {
    if (a0!== b) {
      throw new Err00('00000000000000000000');
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


function testToString(a, b) {
  assertEquals(a, b.toString());
}

function testToStringP(a, b, c) {
  assertEquals(a, b.toString(c));
}

testToString("000",0(NaN));
testToString("00000000", (0/0));
testToString("000000000", (-0/0));
testToString("0",0(0));
testToString("0", (0));
testToString("00", (90));
testToString("00000", (00.00));
testToString("000", (0.0));
testToString("0000", (0.00));
testToString("000000", (0.0000));
testToString("000000000000000000000", (100000000000000000000));
testToString("0000000000000000000000", (1000000000000000000000));
testToString("0000000000000000000000", (10000000000000000000000));
testToString("0000000", (0.00000));
testToString("00000000", (0.000000));
testToString("0000", (0.0000000));
testToString("000000", (0.00000000));
testToString("0000000", (0.000000000));
testToString("0000", (0.00000000));
testToString("000000", (0.000000000));
testToString("0000000", (0.0000000000));

testToString("0", (-0));
testToString("00", (09));
testToString("000", (090));
testToString("000000", (000.00));
testToString("0000", (00.0));
testToString("00000", (00.00));
testToString("0000000", (00.0000));
testToString("0000000000000000000000", (-100000000000000000000));
testToString("00000000000000000000000", (-1000000000000000000000));
testToString("00000000000000000000000", (-10000000000000000000000));
testToString("00000000", (-0.00000));
testToString("000000000", (-0.000000));
testToString("00000", (-0.0000000));
testToString("0000000", (-0.00000000));
testToString("00000000", (-0.000000000));
testToString("00000", (-0.00000000));
testToString("0000000", (-0.000000000));
testToString("00000000", (-0.0000000000));

testToString("0000", (1000));
testToString("0000000", (0.00000));
testToString("0000000000000000000", (1000000000000000000));
testToString("00000", (1000000000000000000000));
testToString("000000", (-1000000000000000000000));
testToString("0000", (0.0000000));
testToString("00000", (-0.0000000));
testToString("0000000000000000000000", (1000000000000000000000));
testToString("00000000", (0.000000));
testToString("0000", (0.0000000));

testToStringP("000", (NaN), 10);
testToStringP("00000000", (0/0), 10);
testToStringP("000000000", (-0/0), 10);
testToStringP("0", (0), 10);
testToStringP("0", (0), 10);
testToStringP("00", (90), 10);
testToStringP("00000000000000", (00.00), 10);
testToStringP("0000000000000000", (0.0), 10);
testToStringP("00000000000000000", (0.00), 10);
testToStringP("00000000000000000", (0.0000), 10);
testToStringP("00000000000000000", (100000000000000000000), 10);
testToStringP("000000000000000000", (1000000000000000000000), 10);
testToStringP("0000000000000000000", (10000000000000000000000), 10);
testToStringP("00000000000000000000", (0.00000), 10);
testToStringP("00000000000000000000", (0.000000), 10);
testToStringP("000000000000000000000", (0.0000000), 10);
testToStringP("000000000000000000000", (0.00000000), 10);
testToStringP("000000000000000000000", (0.000000000), 10);
testToStringP("0000000000000000000000", (0.00000000), 10);
testToStringP("0000000000000000000000", (0.000000000), 10);
testToStringP("0000000000000000000000", (0.0000000000), 10);

testToStringP("0", (-0), 10);
testToStringP("00", (-0), 10);
testToStringP("000", (-90), 10);
testToStringP("000000000000000", (-00.00), 10);
testToStringP("00000000000000000", (-0.0), 10);
testToStringP("000000000000000000", (-0.00), 10);
testToStringP("000000000000000000", (-0.0000), 10);
testToStringP("000000000000000000", (-100000000000000000000), 10);
testToStringP("0000000000000000000", (-1000000000000000000000), 10);
testToStringP("00000000000000000000", (-10000000000000000000000), 10);
testToStringP("000000000000000000000", (-0.00000), 10);
testToStringP("000000000000000000000", (-0.000000), 10);
testToStringP("0000000000000000000000", (-0.0000000), 10);
testToStringP("0000000000000000000000", (-0.00000000), 10);
testToStringP("0000000000000000000000", (-0.000000000), 10);
testToStringP("00000000000000000000000", (-0.00000000), 10);
testToStringP("00000000000000000000000", (-0.000000000), 10);
testToStringP("00000000000000000000000", (-0.0000000000), 10);

testToString("0000000000", Math.pow(0,30));
testToStringP("00000000", (Math.pow(0,30)-0), 10);
testToStringP("00000000000000000000000000000000", (Math.pow(0,30)-0), 0);
testToStringP("00000", (10000000), 30);
testToStringP("0", (0), 30);
testToStringP("0", (0), 10);
testToStringP("0", (0), 10);
testToStringP("0", (0), 0);
testToStringP("0", (0), 0);
testToStringP("000000000000000000000000000000000", Math.pow(0,30), 0);
testToStringP("000000000000000000000000000000000", (Math.pow(0,30) + 0), 0);
testToStringP("000000000000000", (0x000000000000000), 10);
testToStringP("0000000000000000", (-(-'000000000000000000')), 10);
testToStringP("0000000000000000", (-(-'000000000000000000')), 10);
testToStringP("0000000000000000", (-(-'000000000000000000')), 10);
testToStringP("000000000000000000000000000000000000000000000000000000000", (0x000000000000000), 0);
testToStringP("000000000000000000000000000000000", (-(Math.pow(0,30)-0)), 0);
testToStringP("000000", (-10000000), 30);
testToStringP("0000000000000000000000000000000000", (-Math.pow(0,30)), 0);
testToStringP("0000000000000000000000000000000000", (-(Math.pow(0,30) + 0)), 0);
testToStringP("0000000000000000", (-0x000000000000000), 10);
testToStringP("0000000000000000000000000000000000000000000000000000000000", (-0x000000000000000), 0);
testToStringP("000", (0.0), 10);
testToStringP("0000", (-0.0), 10);

function testToFixed(a, b, c) {
  assertEquals(a, b.toFixed(c));
}

testToFixed("000", (NaN), (0));
testToFixed("00000000", (0/0), (0));
testToFixed("000000000", (-0/0), (0));

testToFixed("0000000000000000000000", (1000000000000000000000), (0));
testToFixed("000", (0.0), (0));
testToFixed("0000", (0.0), (0));
testToFixed("00000", (0.0), (0));
testToFixed("0000", (0.00), (0));
testToFixed("00000", (0.00), (0));
testToFixed("000000", (0.00), (0));
testToFixed("0000", (0.000), (0));
testToFixed("00000", (0.000), (0));
testToFixed("000000", (0.000), (0));
testToFixed("000000", (0), (0));
testToFixed("000", (0), (0));
testToFixed("0", (0), (0));
testToFixed("00", (10), (0));
testToFixed("0", (0.0), (0));
testToFixed("00", (00.0), (0));
testToFixed("0", (0.00), (0));
testToFixed("00", (00.00), (0));
testToFixed("000000000", (0.0000000), (0));
testToFixed("0000000000", (0.00000000), (0));
testToFixed("00000000000", (0.00000000), (0));
testToFixed("000000000000", (0.00000000), (10));
testToFixed("0", (0), (0));
testToFixed("000", (0), (0));
testToFixed("0000", (0), (0));

testToFixed("00000000000000000000000", (-1000000000000000000000), (0));
testToFixed("0000", (-0.0), (0));
testToFixed("00000", (-0.0), (0));
testToFixed("000000", (-0.0), (0));
testToFixed("00000", (-0.00), (0));
testToFixed("000000", (-0.00), (0));
testToFixed("0000000", (-0.00), (0));
testToFixed("00000", (-0.000), (0));
testToFixed("000000", (-0.000), (0));
testToFixed("0000000", (-0.000), (0));
testToFixed("0000000", (-0), (0));
testToFixed("0000", (-0), (0));
testToFixed("00", (-0), (0));
testToFixed("00", (-0.0), (0));
testToFixed("000", (-00.0), (0));
testToFixed("00", (-0.00), (0));
testToFixed("000", (-00.00), (0));
testToFixed("0000000000", (-0.0000000), (0));
testToFixed("00000000000", (-0.00000000), (0));
testToFixed("000000000000", (-0.00000000), (0));
testToFixed("0000000000000", (-0.00000000), (10));
testToFixed("0", (-0), (0));
testToFixed("000", (-0), (0));
testToFixed("0000", (-0), (0));

testToFixed("0000000", (0.00000), (0));
testToFixed("0000000000000000000000", (0.0000000000000000000), (20));
testToFixed("0000000000000000000", (0.00000), (10));
testToFixed("0000000000000000000", (0), (10));
testToFixed("00000000000000000000", (100000000000000000), (0));
testToFixed("00000000000000000000", (10000000000000000), (0));
testToFixed("00000000000000000000000000000000000000", (10000000000000000), (20));
testToFixed("0000000", (-40), (0));
testToFixed("00000000000000000000000", (-0.0000000000000000000), (20));
testToFixed("0000000000000000000000", (0.000000000000000), (20));

assertEquals("00000000000000000000", (-1000000000000000000).toFixed());
assertEquals("0", (0).toFixed());
assertEquals("0000000000000000000", (1000000000000000000).toFixed());
assertEquals("0000", (1000).toFixed());
assertEquals("0", (0.00000).toFixed());
assertEquals("0",00.0.toFixed(0), "00000000000000");
assertEquals("00", (-0.0).toFixed(0), "00000000000000000");
assertEquals("000",00.00.toFixed(0), "000000000000000");
assertEquals("00000000", (000.00000).toFixed(0), "0000000000000000000");
assertEquals("00000000", (000.0000000).toFixed(0));

function testToExponential(a, b) {
  assertEquals(a, b.toExponential());
}

function testToExponentialP(a, b, c) {
  assertEquals(a, b.toExponential(c));
}

testToExponential("0000", (0));
testToExponential("000000", (10));
testToExponential("0000000", (100));
testToExponential("0000", (0.0));
testToExponential("000000", (0.00));
testToExponential("0000000", (0.000));
testToExponential("00000", (-0));
testToExponential("0000000", (-10));
testToExponential("00000000", (-100));
testToExponential("00000", (-0.0));
testToExponential("0000000", (-0.00));
testToExponential("00000000", (-0.000));
testToExponential("0000", (0));
testToExponential("0000000000", (0.000000000));
testToExponential("00000000000", (-0.000000000));

testToExponentialP("0000", (0), (0));
testToExponentialP("0000", (10), (0));
testToExponentialP("0000", (100), (0));
testToExponentialP("000000", (0), (0));
testToExponentialP("000000", (10), (0));
testToExponentialP("000000", (100), (0));
testToExponentialP("0000000", (0), (0));
testToExponentialP("0000000", (10), (0));
testToExponentialP("0000000", (100), (0));
testToExponentialP("00000000", (0), (0));
testToExponentialP("00000000", (10), (0));
testToExponentialP("00000000", (100), (0));
testToExponentialP("0000", (0.0), (0));
testToExponentialP("0000", (0.00), (0));
testToExponentialP("0000", (0.000), (0));
testToExponentialP("000000", (0.0), (0));
testToExponentialP("000000", (0.00), (0));
testToExponentialP("000000", (0.000), (0));
testToExponentialP("0000000", (0.0), (0));
testToExponentialP("0000000", (0.00), (0));
testToExponentialP("0000000", (0.000), (0));
testToExponentialP("00000000", (0.0), (0));
testToExponentialP("00000000", (0.00), (0));
testToExponentialP("00000000", (0.000), (0));

testToExponentialP("00000", (-0), (0));
testToExponentialP("00000", (-10), (0));
testToExponentialP("00000", (-100), (0));
testToExponentialP("0000000", (-0), (0));
testToExponentialP("0000000", (-10), (0));
testToExponentialP("0000000", (-100), (0));
testToExponentialP("00000000", (-0), (0));
testToExponentialP("00000000", (-10), (0));
testToExponentialP("00000000", (-100), (0));
testToExponentialP("000000000", (-0), (0));
testToExponentialP("000000000", (-10), (0));
testToExponentialP("000000000", (-100), (0));
testToExponentialP("00000", (-0.0), (0));
testToExponentialP("00000", (-0.00), (0));
testToExponentialP("00000", (-0.000), (0));
testToExponentialP("0000000", (-0.0), (0));
testToExponentialP("0000000", (-0.00), (0));
testToExponentialP("0000000", (-0.000), (0));
testToExponentialP("00000000", (-0.0), (0));
testToExponentialP("00000000", (-0.00), (0));
testToExponentialP("00000000", (-0.000), (0));
testToExponentialP("000000000", (-0.0), (0));
testToExponentialP("000000000", (-0.00), (0));
testToExponentialP("000000000", (-0.000), (0));

testToExponentialP("000", (NaN), (0));
testToExponentialP("00000000", (Infinity), (0));
testToExponentialP("000000000", (-Infinity), (0));
testToExponentialP("0000", (0), (0));
testToExponentialP("0000000", (0), (0));
testToExponentialP("0000", (00.0000), (0));
testToExponentialP("000000000", (00.0000), (0));
testToExponentialP("000000000", (0.000000000), (0));
testToExponentialP("0000000000", (-0.000000000), (0));

function testToPrecision(a, b, c) {
  assertEquals(a, b.toPrecision(c));
}

testToPrecision("000", (NaN), (0));
testToPrecision("00000000", (Infinity), (0));
testToPrecision("000000000", (-Infinity), (0));
testToPrecision("00000000000000000000", (0.000000), (10));
testToPrecision("0000000000000000000", (0.000000000), (10));
testToPrecision("00000000000000000000", (-0.000000000), (10));
testToPrecision("0000", (000000009), (0));
testToPrecision("000000000", (000000009), (0));
testToPrecision("000000000000", (000000009), (0));
testToPrecision("00000000000", (000000009), (0));
testToPrecision("000000000000", (-000000009), (0));
testToPrecision("0000000", Number(-.0000000000000), (0));
testToPrecision("0000000", Number(-.000000000000), (0));
testToPrecision("0000000", Number(-.00000000000), (0));
testToPrecision("0000000000", Number(-.0000000000), (0));
testToPrecision("000000000", Number(-.000000000), (0));
testToPrecision("00000000", Number(-.00000000), (0));
testToPrecision("0000000", Number(-.0000000), (0));
testToPrecision("000000", Number(-.000000), (0));
testToPrecision("00000", Number(-.00000), (0));
testToPrecision("0000", Number(-0.0000), (0));
testToPrecision("000", Number(-00.000), (0));
testToPrecision("0000000", Number(-000.00), (0));
testToPrecision("0000000", Number(-0000.0), (0));
testToPrecision("0000000", Number(-10000), (0));
testToPrecision("000000000", Number(-00000.00), (0));
testToPrecision("000000000", Number(-00000.00), (0));
assertEquals("000",00.00.toPrecision(0), "0000000000000000000");
assertEquals("000", 0.00.toPrecision(0), "0000000000000000000");
