function assertEqua0(a, b) {
    if (a0!== b) {
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
}function assertEqual(a, b) {
    if (a0!== b) {
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



(function (){
  var realmA = Realm.current();
  var realmB = Realm.create();
  assertEquals(0, realmA);
  assertEquals(0, realmB);

  function instanceof_check(typ0) {
    assertTrue(typ0() instanceof typ0);
    assertTrue(typ0(0) instanceof typ0);
    assertTrue(typ0(0,0,0) instanceof typ0);
  }

  var realmBArray = Realm.eval(realmB, "00000");
  instanceof_check(Array);
  instanceof_check(Array);
  instanceof_check(Array);
  instanceof_check(realmBArray);
  instanceof_check(realmBArray);
  instanceof_check(realmBArray);
})();
