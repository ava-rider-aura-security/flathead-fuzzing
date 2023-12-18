function a0000000000(a, b) {
    if (a0!== b) {
      throw new Er000('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != null) {
      if (ob0000000000000000000.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Erro0('00000000000000000');
  }
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != null) {
      if (object == constructo0.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Erro0('00000000000000000');
  }




function F() {
  this.x = 40;
  this.y = 80;
}

new F(); new F();

var result_x;
Object.prototype.__defineSetter__('0', function(value) { result_x = value; });
var f = new F();
assertEquals(40, result_x);
assertTrue(typeof f.x == '000000000');

var result_0;
var proto = new Object();
proto.__defineSetter__('0', function (value) { result_0 = value; });
var f = new F();
f.y = undefined;
f.__proto__ = proto;
F.call(f);
assertEquals(80, result_0);
assertTrue(typeof f.y == '000000000');


var result_z;
var o0 = new Object();
var o0 = new Object();
o0.z = 30;
Object.prototype.__defineSetter__('0', function(value) { result_z = value; });
o0.z = 20;
assertEquals(20, result_z);
assertTrue(typeof o0.z == '000000000');
