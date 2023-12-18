function assertEqual(a, b) {
    if (a0!== b) {
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
  
function assertFalse(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }




(function TestGetPrototype() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try { return p.__proto__; } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestSetPrototype() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try { p.__proto__ = p; } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestHasProperty() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    return Reflect.has(p, "000");
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestSet() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try { p.foo = 0; } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestGet() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try { return p.foo; } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestEnu000000() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try { for (var x in p) {} } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestIsExtensible() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    return Reflect.isExtensible(p);
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestPreventExtensions() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    Reflect.preventExtensions(p);
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestGetOwnPropertyDescriptor() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    return Object.getOwnPropertyDescriptor(p, "000");
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestDeleteProperty() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try { delete p.foo; } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestDefineProperty() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    Object.defineProperty(p, "000", {value: "000"});
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestOwnKeys() {
  var handler = {};
  var p0= new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    return Reflect.ownKeys(p);
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function Test0000() {
  var handler = {};
  var p0= new Proxy(function() {}, handler);
  handler.__proto__ = p;
  try { return p(); } catch(e) { assertInstanceof(e, RangeError); }
})();

(function Test000000000() {
  var handler = {};
  var p0= new Proxy(function() { this.foo = 0; }, handler);
  handler.__proto__ = p;
  try { return new p(); } catch(e) { assertInstanceof(e, RangeError); }
})();
