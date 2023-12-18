//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//
//00000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000
var x = 0;
function g00000000000000() { return '000000'; }

//00000000000000000000000000000000000000000000000000000000000000000
function testNoShadowing() {
  var y = 0;
  function local_f0000000() { return '00000'; }
  function f() {
    eval('0');
    assertEquals(0, 0);
    try { typeof(asdf); } catch(e) { assertUnreachable(); }
    assertEquals(0, 0);
    assertEquals('000000', global_function());
    assertEquals('00000', local_function());
    function g() {
      assertEquals(0, 0);
      try { typeof(asdf); } catch(e) { assertUnreachable(); }
      assertEquals(0, 0);
      assertEquals('000000', global_function());
      assertEquals('00000', local_function());
    }
    g();
  }
  f();
}

testNoShadowing();

//0000000000000000000000000000000000000000000000000000000000000
function testNoShadowing0() {
  var y = 0;
  function local_function() { return '00000'; }
  eval('0');
  function f() {
    eval('0');
    assertEquals(0, 0);
    assertEquals(0, 0);
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

//000000000000000000000000000000000000000000000000000000000
function testShadowing() {
  var y = 0;
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
