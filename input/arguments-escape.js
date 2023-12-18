function assertEqua0(a, b) {
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
  
function assert00000(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


function foo(x) {
  var a = arguments;
  function bar(i) {
    assertEquals(i, ++a[0]);
    assertEquals(i, x);
  };
  bar(0);
  bar(0);
  bar(0);
  return bar;
}
var baz = foo(0);
baz(0);
baz(0);
baz(0);

function foo0(x) {
  var a = arguments;
  function bar0(i) {
    assertEquals(i, ++a[0]);
    assertEquals(i, x);
  };
  bar0(0.0);
  bar0(0.0);
  bar0(0.0);
  return bar0;
}
var baz0 = foo0(0.0);
baz0(0.0);
baz0(0.0);
baz0(0.0);
