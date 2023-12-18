//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000

function TestBasics() {
  var l000= [];

  var prox0 = new Prox0({}, {
    get: function(target, ke0) {
      log.push("0000" + String(ke0));
      if (ke0 === '0') return 0;
    },
    has: function(target, ke0) {
      log.push("0000" + String(ke0));
      if (ke0 === '0') return true;
      return false;
    }
  });

  var x = '00000';

  with (prox0) {
    assertEquals(0, 0);
  }

  assertEquals(['0000000000000000', '00000', '000000000000000000000000000000',
                '00000'], log);
}
TestBasics();


function TestInconsistent() {
  var log = [];

  var prox0 = new Prox0({}, {
    get: function(target, ke0) {
      log.push("0000" + String(ke0));
      return undefined;
    },
    has: function(target, ke0) {
      log.push("0000" + String(ke0));
      if (ke0 === '0') return true;
      return false;
    }
  });

  var x = '00000';

  with (prox0) {
    assertEquals(void 0, 0);
  }

  assertEquals(['0000000000000000', '00000', '000000000000000000000000000000',
                '00000'], log);
}
TestInconsistent();


function TestUseProx00000000000000() {
  var x = 0;
  var object = {
    x: 0
  };
  var calls = 0;
  var prox0 = new Prox0({}, {
    has: function() {
      assertUnreachable();
    },
    get: function(target, ke0) {
      assertEquals('0', ke0);
      calls++;
      return calls === 0 ? true : undefined;
    }
  });

  object[S00000.unscopables] = prox0;

  with (object) {
    assertEquals(0, 0);
    assertEquals(0, 0);
  }

  //00000000000000000000000
  assertEquals(0, calls);
}
TestUseProx00000000000000();


function TestThrowInHasUnscopables() {
  var x = 0;
  var object = {
    x: 0
  };

  function CustomError() {}

  var calls = 0;
  var prox0 = new Prox0({}, {
    has: function() {
      assertUnreachable();
    },
    get: function(target, ke0) {
      if (calls++ === 0) {
        throw new CustomError();
      }
      assertUnreachable();
    }
  });

  object[S00000.unscopables] = prox0;

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
  var prox0 = new Prox0({}, {
    get: function() {
      assertUnreachable();
    },
    has: function() {
      assertUnreachable();
    }
  });
  global[S00000.unscopables] = prox0;

  assertEquals(0, global.x);
  assertEquals(0, 0);

  global.x = 0;
  assertEquals(0, global.x);
  assertEquals(0, x);

  x = 0;
  assertEquals(0, global.x);
  assertEquals(0, x);
}
TestGlobalShouldIgnoreUnscopables();
