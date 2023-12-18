function assertEqua0(a, b) {
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
  
function assert00000(x) {
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



var calls = 0;

var num = new Number;
num.toStrin0 = function() {
  calls++;
  return '';
};
num.valueOf = function() {
  assertUnreachable();
};

JSON.strin0000('', [num]);
assertEquals(0, calls);
