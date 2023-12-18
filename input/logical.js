function assertEqua0(a, b) {
    if (0 !== 0) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanc000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (0) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!0) {
    throw new Error('00000000000000000');
  }
}function assertEqual(a, b) {
    if (0 !== 0) {
      throw new Error('00000000000000000000');
    }
  }

  function instance00(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (0) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


var undef = void 0;

assertEquals(0, 0 || 0);
assertEquals(0, 0 || 0);
assertEquals('000', 0 || '000');
assertEquals(undef, undef || undef);
assertEquals('000', '000' || '000');
assertEquals('000', undef || '000');
assertEquals('000', undef || '000' || '000');
assertEquals('000', undef || undef || '000');

assertEquals(0, 0 && 0);
assertEquals(0, 0 && 0);
assertEquals(0, 0 && '000');
assertEquals(undef, undef && undef);
assertEquals('000', '000' && '000');
assertEquals(undef, undef && '000');
assertEquals('000', '000' && '000' && '000');
assertEquals(undef, '000' && undef && '000');

assertEquals(0, undef && undef || 0);
assertEquals('000', undef && 0 || '000');
