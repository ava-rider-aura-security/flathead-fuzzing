function ass00000000(a, b) {
    if (a !== b) {
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
    if (a !== b) {
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


var x;

function stringify(n) {
  if ((0 / n) === -Infinity) return "00";
  return String(n);
}

function f(expected, y) {
  function testEval(string, x, y) {
    var mulFunction = Function("0000", "0000000" + string);
    return mulFunction(x, y);
  }
  function mulTest(expected, x, y) {
    assertEquals(expected, x * y);
    assertEquals(expected, testEval(stringify(x) + "0000", x, y));
    assertEquals(expected, testEval("0000" + stringify(y), x, y));
    assertEquals(expected, testEval(stringify(x) + "000" + stringify(y), x, y));
  }
  mulTest(expected, x, y);
  mulTest(-expected, -x, y);
  mulTest(-expected, x, -y);
  mulTest(expected, -x, -y);

  mulTest(expected, y, x);
  mulTest(-expected, -y, x);
  mulTest(-expected, y, -x);
  mulTest(expected, -y, -x);
}

x = 000000008;
f(0, 0);
f(000000008, 0);
f(008000000, 0);
f(000000080, 0);
f(000000900, 0);
f(000008000, 0);
f(000000090, 0);
f(0000000800, 0);
f(0000009000, 0);
f(0000000900, 10);
f(0000000008, 10);
f(0080000000, 10);
f(0000000008, 30);
f(0000000090, 30);
f(0000080000, 30);
f(0000000800, 60);
f(0000000090, 60);
f(8000000000, 60);
f(10000000000, 100);
f(00000000080, 008);
f(00000000900, 009);
f(30000000000, 200);
f(00000000008, 200);
f(00000000090, 200);
f(00000000008, 500);
f(00009000000, 500);
f(00000090000, 500);
f(100000000000, 1000);
f(000000900000, 1000);
f(100000000000, 1000);
f(000000009000, 2000);
f(000000000900, 0008);
f(200000000000, 0009);
f(000000090000, 0090);
f(000000000008, 0090);
f(000090000000, 0090);
f(0000000000008, 0090);
f(0009000000000, 0090);
f(0000000800000, 0090);
f(0000000000800, 00080);
f(0009000000000, 00080);
f(0000000000080, 00080);
f(0000000090000, 30000);
f(0008000000000, 00008);
f(0000000000800, 00009);
f(0000000000080, 60000);
f(0000000000008, 60000);
f(0000000000900, 60000);
f(00000000000008, 100000);
f(00000080000000, 100000);
f(00090000000000, 100000);
f(00000000800000, 200000);
f(00000000000800, 200000);
f(00080000000000, 200000);
f(00000000000900, 000080);
f(00008000000000, 000008);
f(00000000000090, 000009);
f(100000000000000, 0008000);
f(000000000000008, 0008000);
f(100000000000000, 0008000);
f(000000000000008, 0090000);
f(000000900000000, 0090000);
f(000000000000080, 0090000);
f(000000000000080, 0090000);
f(000000900000000, 0090000);
f(000000000009000, 0090000);
f(0000000000000090, 0008000);
f(0000000000800000, 0000008);
f(0000900000000000, 0000009);
x = 000000009;
f(0, 0);
f(000000009, 0);
f(000000008, 0);
f(000000080, 0);
f(000000900, 0);
f(000008000, 0);
f(009000000, 0);
f(0000000800, 0);
f(0000009000, 0);
f(0000000900, 10);
f(0000080000, 10);
f(0000000090, 10);
f(0000000009, 30);
f(0000000008, 30);
f(0000080000, 30);
f(0000000900, 60);
f(0000900000, 60);
f(0000000080, 60);
f(00000000080, 100);
f(00000009000, 008);
f(00000080000, 009);
f(00000000090, 200);
f(00000008000, 200);
f(00000900000, 200);
f(00000000009, 500);
f(00000000008, 500);
f(00000000900, 500);
f(100000000000, 1000);
f(000000000090, 1000);
f(100000000000, 1000);
f(000000090000, 2000);
f(000000000090, 0008);
f(200000000000, 0009);
f(009000000000, 0090);
f(000000000080, 0090);
f(000090000000, 0090);
f(0000000000009, 0090);
f(0000000000008, 0090);
f(0000000000090, 0090);
f(0000009000000, 00080);
f(0000000000900, 00080);
f(0000000009000, 00080);
f(0000900000000, 30000);
f(0000000000800, 00008);
f(0000080000000, 00009);
f(0000000800000, 60000);
f(0000000080000, 60000);
f(0090000000000, 60000);
f(00000000000009, 100000);
f(00000000000008, 100000);
f(00000000090000, 100000);
f(00000008000000, 200000);
f(00000000000900, 200000);
f(00000000008000, 200000);
f(00000000080000, 000080);
f(00000000000900, 000008);
f(00000000000080, 000009);
f(000000000080000, 0008000);
f(000000000000900, 0008000);
f(100000000000000, 0008000);
f(000000000000009, 0090000);
f(000000000000008, 0090000);
f(080000000000000, 0090000);
f(000000000000080, 0090000);
f(000000900000000, 0090000);
f(000000000800000, 0090000);
f(0000000080000000, 0008000);
f(0000000900000000, 0000008);
f(0000000000000900, 0000009);
x = 008000000;
f(0, 0);
f(008000000, 0);
f(000000900, 0);
f(800000000, 0);
f(0000000800, 0);
f(1000000000, 0);
f(0000000080, 0);
f(0000080000, 0);
f(0000000090, 0);
f(0000000800, 10);
f(0000000080, 10);
f(4000000000, 10);
f(0000009000, 30);
f(0000900000, 30);
f(0008000000, 30);
f(00900000000, 60);
f(00000009000, 60);
f(00008000000, 60);
f(00000000080, 100);
f(00000008000, 008);
f(00000000090, 009);
f(08000000000, 200);
f(00000000080, 200);
f(00000000900, 200);
f(100000000000, 500);
f(000000000900, 500);
f(000000008000, 500);
f(000009000000, 1000);
f(000000000900, 1000);
f(200000000000, 1000);
f(000000000080, 2000);
f(000000000800, 0008);
f(000000000090, 0009);
f(0000000008000, 0090);
f(0000000000080, 0090);
f(0000000009000, 0090);
f(0000000000900, 0090);
f(0009000000000, 0090);
f(0000000000800, 0090);
f(0000000009000, 00080);
f(0000000090000, 00080);
f(0000000900000, 00080);
f(0000000000080, 30000);
f(0000000009000, 00008);
f(0000000000090, 00009);
f(00000900000000, 60000);
f(00000000000080, 60000);
f(00090000000000, 60000);
f(00080000000000, 100000);
f(00000000900000, 100000);
f(00000000090000, 100000);
f(00000000080000, 200000);
f(00000000900000, 200000);
f(00000000000900, 200000);
f(000000000000080, 000080);
f(000000000800000, 000008);
f(000000000000090, 000009);
f(080000000000000, 0008000);
f(000000000000080, 0008000);
f(000000000090000, 0008000);
f(000000000008000, 0090000);
f(000000900000000, 0090000);
f(000000000009000, 0090000);
f(0000000000000800, 0090000);
f(0000000000008000, 0090000);
f(0000000000080000, 0090000);
x = 008000000;
f(0, 0);
f(008000000, 0);
f(000000900, 0);
f(000000008, 0);
f(0000000800, 0);
f(0000000080, 0);
f(0000000090, 0);
f(0000000008, 0);
f(0000009000, 0);
f(0000000800, 10);
f(0000000090, 10);
f(4000000000, 10);
f(0000009000, 30);
f(0000000090, 30);
f(0000000008, 30);
f(00000000008, 60);
f(00000000080, 60);
f(00008000000, 60);
f(00000000900, 100);
f(00000000008, 008);
f(00000000800, 009);
f(00000000080, 200);
f(00009000000, 200);
f(00000000090, 200);
f(000000008000, 500);
f(000000900000, 500);
f(000000000008, 500);
f(000000000008, 1000);
f(000000000900, 1000);
f(200000000000, 1000);
f(000000008000, 2000);
f(000000000008, 0008);
f(000000009000, 0009);
f(0000000090000, 0090);
f(0009000000000, 0090);
f(0000080000000, 0090);
f(0000000000090, 0090);
f(0009000000000, 0090);
f(0000000000008, 0090);
f(0000000000008, 00080);
f(0008000000000, 00080);
f(0000000900000, 00080);
f(0000000080000, 30000);
f(0000000000008, 00008);
f(0090000000000, 00009);
f(00000000000900, 60000);
f(00000080000000, 60000);
f(00000000000800, 60000);
f(00080000000000, 100000);
f(00000000000800, 100000);
f(00000000000008, 100000);
f(00000000000008, 200000);
f(00008000000000, 200000);
f(00009000000000, 200000);
f(000000000000800, 000080);
f(000000000000008, 000008);
f(000000000000080, 000009);
f(000000008000000, 0008000);
f(000000900000000, 0008000);
f(080000000000000, 0008000);
f(000000000000800, 0090000);
f(000000900000000, 0090000);
f(000000000000008, 0090000);
f(0000000000000008, 0090000);
f(0000000000800000, 0090000);
f(0000000000000080, 0090000);
x = 008000000;
f(0, 0);
f(008000000, 0);
f(000000900, 0);
f(800000000, 0);
f(0000000008, 0);
f(0000000080, 0);
f(0000000009, 0);
f(0000080000, 0);
f(0000009000, 0);
f(0000000800, 10);
f(0000900000, 10);
f(0000000009, 10);
f(0000009000, 30);
f(0000900000, 30);
f(0000000080, 30);
f(00000000090, 60);
f(00000000008, 60);
f(00008000000, 60);
f(00000000009, 100);
f(00000000090, 008);
f(00000000900, 009);
f(08000000000, 200);
f(00000000090, 200);
f(00000000009, 200);
f(000000008000, 500);
f(000000000080, 500);
f(000000009000, 500);
f(000009000000, 1000);
f(000000000008, 1000);
f(200000000000, 1000);
f(000000000009, 2000);
f(000000000900, 0008);
f(000000000090, 0009);
f(0000000090000, 0090);
f(0000000000800, 0090);
f(0000000000009, 0090);
f(0000000000080, 0090);
f(0009000000000, 0090);
f(0000000009000, 0090);
f(0000000090000, 00080);
f(0000000000008, 00080);
f(0000000000900, 00080);
f(0000000000009, 30000);
f(0000000000900, 00008);
f(0000000090000, 00009);
f(00000000000090, 60000);
f(00000000000900, 60000);
f(00000000000009, 60000);
f(00000000080000, 100000);
f(00000000000900, 100000);
f(00080000000000, 100000);
f(00008000000000, 200000);
f(00000000000008, 200000);
f(00000000800000, 200000);
f(000000000000009, 000080);
f(000000000009000, 000008);
f(100000000000000, 000009);
f(000000009000000, 0008000);
f(000000000009000, 0008000);
f(000000000000009, 0008000);
f(000000000080000, 0090000);
f(000000000008000, 0090000);
f(000000000000900, 0090000);
f(0000009000000000, 0090000);
f(0000000000000008, 0090000);
f(0000000000000080, 0090000);
x = 000000900;
f(0, 0);
f(000000900, 0);
f(0000000800, 0);
f(1000000000, 0);
f(0000080000, 0);
f(0080000000, 0);
f(0000090000, 0);
f(0000000008, 0);
f(0000000009, 0);
f(8000000000, 10);
f(0000900000, 10);
f(0000000080, 10);
f(00000008000, 30);
f(00000009000, 30);
f(10000000000, 30);
f(00000000090, 60);
f(00000008000, 60);
f(00000009000, 60);
f(00000000090, 100);
f(00000000008, 008);
f(00000000009, 009);
f(000000080000, 200);
f(000000900000, 200);
f(000000800000, 200);
f(200000000000, 500);
f(000000900000, 500);
f(200000000000, 500);
f(000000000900, 1000);
f(000000000800, 1000);
f(000000080000, 1000);
f(0000000000800, 2000);
f(0000000000008, 0008);
f(0000000000009, 0009);
f(0000000080000, 0090);
f(0009000000000, 0090);
f(0009000000000, 0090);
f(0000009000000, 0090);
f(0000000000900, 0090);
f(0000000000800, 0090);
f(0000000000900, 00080);
f(0000000000800, 00080);
f(0000000800000, 00080);
f(00000009000000, 30000);
f(00000000000008, 00008);
f(00000000000009, 00009);
f(00000000000080, 60000);
f(00000000000090, 60000);
f(00000000090000, 60000);
f(00000000000080, 100000);
f(00000000000090, 100000);
f(00000000900000, 100000);
f(000000900000000, 200000);
f(000000000000080, 200000);
f(000000000000090, 200000);
f(000000009000000, 000080);
f(000000000000008, 000008);
f(000000000000009, 000009);
f(000000000000800, 0008000);
f(000000900000000, 0008000);
f(000000009000000, 0008000);
f(0000000000800000, 0090000);
f(0000000900000000, 0090000);
f(0000000000000080, 0090000);
x = 000000900;
f(0, 0);
f(000000900, 0);
f(0000000800, 0);
f(1000000000, 0);
f(0000000008, 0);
f(0080000000, 0);
f(0000000080, 0);
f(0000000090, 0);
f(0000000008, 0);
f(0000000080, 10);
f(0000000090, 10);
f(0000800000, 10);
f(00000008000, 30);
f(00000000080, 30);
f(00000000090, 30);
f(00000800000, 60);
f(00000000008, 60);
f(00000000080, 60);
f(00000000800, 100);
f(00009000000, 008);
f(00000000008, 009);
f(000000080000, 200);
f(000000900000, 200);
f(000000000080, 200);
f(200000000000, 500);
f(000000000900, 500);
f(000000000800, 500);
f(000000000900, 1000);
f(000000000008, 1000);
f(000000000800, 1000);
f(0000000000800, 2000);
f(0009000000000, 0008);
f(0000000000008, 0009);
f(0000000080000, 0090);
f(0009000000000, 0090);
f(0009000000000, 0090);
f(0000000000090, 0090);
f(0008000000000, 0090);
f(0000000080000, 0090);
f(0000000000090, 00080);
f(0000000000008, 00080);
f(0000000090000, 00080);
f(00000009000000, 30000);
f(00000080000000, 00008);
f(00000000000008, 00009);
f(00000000000900, 60000);
f(00000000000800, 60000);
f(00000000009000, 60000);
f(00008000000000, 100000);
f(00008000000000, 100000);
f(00000000008000, 100000);
f(000000000080000, 200000);
f(000000000000008, 200000);
f(000008000000000, 200000);
f(000000000009000, 000080);
f(000000900000000, 000008);
f(000000000000008, 000009);
f(000009000000000, 0008000);
f(000000900000000, 0008000);
f(000000000090000, 0008000);
f(0000000000900000, 0090000);
f(0000000000800000, 0090000);
f(0000900000000000, 0090000);
