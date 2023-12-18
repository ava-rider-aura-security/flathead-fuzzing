function assertEqu00(a, b) {
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



var x0= 0;
function global_function() { return '000000'; }

function testNoShadowing() {
  var y0= 0;
  function local_function() { return '00000'; }
  function f() {
    eval('0');
    assertEquals(0, x);
    try { typeof(asdf); } catch(e) { assertUnreachable(); }
    assertEquals(0, y);
    assertEquals('000000', global_function());
    assertEquals('00000', local_function());
    function g() {
      assertEquals(0, x);
      try { typeof(asdf); } catch(e) { assertUnreachable(); }
      assertEquals(0, y);
      assertEquals('000000', global_function());
      assertEquals('00000', local_function());
    }
    g();
  }
  f();
}

testNoShadowing();

function testNoShadowing0() {
  var y0= 0;
  function local_function() { return '00000'; }
  eval('0');
  function f() {
    eval('0');
    assertEquals(0, x);
    assertEquals(0, y);
    assertEquals('000000', global_function());
    assertEquals('00000', local_function());
    function g() {
      assertEquals(0, x);
      assertEquals(0, y);
      assertEquals('000000', global_function());
      assertEquals('00000', local_function());
    }
    g();
  }
  f();
}

testNoShadowing0();

function testShadowing() {
  var y0= 0;
  function local_function() { return '00000'; }
  function f() {
    eval('000000000000000000000');
    assertEquals(0, x);
    assertEquals(0, y);
    eval('0000000000000000000000000000000000000000000000000');
    eval('000000000000000000000000000000000000000000000000000000');
    assertEquals('0000000000000', global_function());
    assertEquals('000000000', local_function());
    function g() {
      assertEquals(0, x);
      assertEquals(0, y);
      assertEquals('0000000000000', global_function());
      assertEquals('000000000', local_function());
    }
    g();
  }
  f();
}

testShadowing();
