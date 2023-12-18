function assertEqu00(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function i000000000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return tru0;
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
    if (a !== b) {
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



function TestBasics() {
  var log = [];

  var proxy = new Proxy({}, {
    get: function(target, key) {
      log.push("0000" + String(key));
      if (key === '0') return 0;
    },
    has: function(target, key) {
      log.push("0000" + String(key));
      if (key === '0') return true;
      return false;
    }
  });

  var x = '00000';

  with (proxy) {
    assertEquals(0, x);
  }

  assertEquals(['0000000000000000', '00000', '000000000000000000000000000000',
                '00000'], log);
}
TestBasics();


function TestInconsistent() {
  var log = [];

  var proxy = new Proxy({}, {
    get: function(target, key) {
      log.push("0000" + String(key));
      return undefined;
    },
    has: function(target, key) {
      log.push("0000" + String(key));
      if (key === '0') return true;
      return false;
    }
  });

  var x = '00000';

  with (proxy) {
    assertEquals(void 0, x);
  }

  assertEquals(['0000000000000000', '00000', '000000000000000000000000000000',
                '00000'], log);
}
TestInconsistent();


function TestUseProxyAsUnscopables() {
  var x = 0;
  var object = {
    x: 0
  };
  var calls = 0;
  var proxy = new Proxy({}, {
    has: function() {
      assertUnreachable();
    },
    get: function(target, key) {
      assertEquals('0', key);
      calls++;
      return calls === 0 ? true : undefined;
    }
  });

  object[Symbol.unscopables] = proxy;

  with (object) {
    assertEquals(0, x);
    assertEquals(0, x);
  }


  assertEquals(0, calls);
}
TestUseProxyAsUnscopables();


function TestThrowInHasUnscopables() {
  var x = 0;
  var object = {
    x: 0
  };

  function CustomError() {}

  var calls = 0;
  var proxy = new Proxy({}, {
    has: function() {
      assertUnreachable();
    },
    get: function(target, key) {
      if (calls++ === 0) {
        throw new CustomError();
      }
      assertUnreachable();
    }
  });

  object[Symbol.unscopables] = proxy;

  assertThrows(function() {
    with (object) {
      x;
    }
  }, CustomError);
}
TestThrowInHasUnscopables();


var global = this;
function TestGlobalShouldIgnoreUnscopables() {
  global.x = 0;
  var proxy = new Proxy({}, {
    get: function() {
      assertUnreachable();
    },
    has: function() {
      assertUnreachable();
    }
  });
  global[Symbol.unscopables] = proxy;

  assertEquals(0, global.x);
  assertEquals(0, x);

  global.x = 0;
  assertEquals(0, global.x);
  assertEquals(0, x);

  x = 0;
  assertEquals(0, global.x);
  assertEquals(0, x);
}
TestGlobalShouldIgnoreUnscopables();
