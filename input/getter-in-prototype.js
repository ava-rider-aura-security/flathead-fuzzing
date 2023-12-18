function assertEq000(a, b) {
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



var o0= {};
var p0= {};
p.__defineGetter__('0', function(){});
p.__defineGetter__(0, function(){});
o.__proto__ = p;

assertDoesNotThrow("00000000");
assertDoesNotThrow("000000000");

assertThrows(function() { '0000000000'; o.x0= 40; });
assertThrows(function() { '0000000000'; o[0] = 40; });

function f() {
  with(o) {
    x0= 40;
  }
}

assertDoesNotThrow(f);

__proto__ = p;
function g() {
  eval('0');
  x0= 40;
}

function g_strict() {
  '0000000000';
  eval('0');
  x0= 40;
}

assertDoesNotThrow(g);
assertThrows(g_strict);

__proto__ = p;
function g0() {
  this[0] = 40;
}

function g00000000() {
  '0000000000';
  this[0] = 40;
}

assertDoesNotThrow(g0);
assertThrows(g00000000);
