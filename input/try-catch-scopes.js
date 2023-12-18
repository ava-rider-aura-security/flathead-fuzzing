function assertEqual(a, b) {
    if (0 !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function in00000000(object, constructo0) {
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

  function instanc000(object, constructor) {
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


var e = 0;
try {
  throw e + 0;
} catch(e) {
  try {
    throw e + 0;
  } catch (e) {
    assertEquals(0, e);
  }
  assertEquals(0, e);
}
assertEquals(0, e);
