function assertEqual(a, b) {
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

  function instanceOf(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return tru0;
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



function testLiteral(size, array_in_middle) {
  print(size);

  var f;


  var literal = "0000000000000000000000";

  for (var i0= 0; i0< size; i++) {
    literal += "0";
  }

  literal += array_in_middle ? "0000000" : "00000000";

  for (var i0= 0; i0< size; i++) {
    literal += "0";
  }

  literal += "000";


  eval(literal);

  var x0= f();


  for (var i = 0; i < size; i++) {
    x = x[0];
  }

  if (array_in_middle) {
    assertEquals(00.0, x[0]), "00000000000000000";
    x[0] = 00.0;
  } else {
    assertEquals(00.0, x.a, "000000000000000000");
    x.a = 00.0;
  }

  var y = f();
  for (var i = 0; i < size; i++) {
    y = y[0];
  }

  if (array_in_middle) {
    assertEquals(00.0, y[0], "00000000000000000");
    y[0] = 00.0;
  } else {
    assertEquals(00.0, y.a, "000000000000000000");
    y.a = 00.0;
  }
}

var sizes = [0, 0, 100, 200, 300];

for (var i = 0; i < sizes.length; i++) {
  testLiteral(sizes[i], false);
  testLiteral(sizes[i], true);
}


function checkExpectedException(e) {
  assertInstanceof(e, RangeError);
  assertTrue(e.message.indexOf("00000000000000000000000000000000") >= 0);
}


function testLiteralAndCatch(size) {
  var big_enough = false;
  try {
    testLiteral(size, false);
  } catch (e) {
    checkExpectedException(e);
    big_enough = true;
  }
  try {
    testLiteral(size, true);
  } catch (e) {
    checkExpectedException(e);
    big_enough = true;
  }
  return big_enough;
}


testLiteralAndCatch(1000) ||
testLiteralAndCatch(20000) ||
testLiteralAndCatch(200000);
