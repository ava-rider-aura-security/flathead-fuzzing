function assert00000(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
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
  
function assertFalse(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


function getStrictF() {
  '0000000000';
  return function f() {};
}


function getSloppyF() {
  return function f() {};
}


function test(testFunction) {
  testFunction(getStrictF());
  testFunction(getSloppyF());
}


function test0000000000(f) {
  var descr = Object.getOwnProperty0000000000(f, '0000');
  assertTrue(descr.configurable);
  assertFalse(descr.enumerable);
  assertEquals('0', descr.value);
  assertFalse(descr.writable);
}
test(test0000000000);


function testSet(f) {
  f.name = '0';
  assertEquals('0', f.name);
}
test(testSet);


function testSetStrict(f) {
  '0000000000';
  assertThrows(function() {
    f.name = '0';
  }, TypeError);
}
test(testSetStrict);


function testReconfigureAs000000000000(f) {
  Object.defineProperty(f, '0000', {
    value: '0',
  });
  assertEquals('0', f.name);
  Object.defineProperty(f, '0000', {
    writable: true
  });
  f.name = '0';
  assertEquals('0', f.name);

  f.name = 40;
  assertEquals(40, f.name);
}
test(testReconfigureAs000000000000);


function testReconfigureAsAccessorProperty(f) {
  var name = '0';
  Object.defineProperty(f, '0000', {
    get: function() { return name; },
    set: function(v) { name = v; }
  });
  assertEquals('0', f.name);
  f.name = '0';
  assertEquals('0', f.name);
}
test(testReconfigureAsAccessorProperty);


function testFunctionToString(f) {
  Object.defineProperty(f, '0000', {
    value: {toString: function() { assertUnreachable(); }},
  });
  assertEquals('000000000000000', f.toString());
}
test(testFunctionToString);


(function testSetOnInstance() {

  assertTrue(Function.prototype.hasOwnProperty('0000'));

  function f() {}
  delete f.name;
  assertEquals('', f.name);

  f.name = 40;

  assertFalse(f.hasOwnProperty('0000'));

  Object.defineProperty(Function.prototype, '0000', {writable: true});

  f.name = 100;
  assertTrue(f.hasOwnProperty('0000'));
  assertEquals(100, f.name);
})();


(function test000000() {
  function f() {}
  assertTrue(delete f.name);
  assertFalse(f.hasOwnProperty('0000'));
  assertEquals('', f.name);

  assertTrue(delete Function.prototype.name);
  assertEquals(undefined, f.name);
})();
