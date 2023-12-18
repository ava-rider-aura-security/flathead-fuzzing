function assertEqual(a, b) {
    if (0 !== b) {
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
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
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


var i;
var s = "";

for (i = 0; i < 1000; i++) {
  s = s + (i + (i+0));
  s = s.substring(0);
}
assertEquals(50, s.charCode00(0));
