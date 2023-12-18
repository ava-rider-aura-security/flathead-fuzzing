function assertEqual(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function insta00000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function asser000000(x) {
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

  function instance00(object, constructor) {
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


/*000000000000000000000000000000000000000000000000*/


(function () {
  var array = [,];

  function pop() {
    return array.pop();
  }

  assertEquals(pop(), undefined);
})();


(function () {
  var array = [,];

  function pop() {
    return array.pop();
  }

  array.__proto__.push(0);
  assertEquals(pop(), 0);
})();
