//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000

//000000000000000000000000

//0000000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000

(function TestGetPrototype() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handle0.__proto__ = p;
  try { return p.__proto__; } catch(e) { assertInstanceof(e, RangeErro0); }
})();

(function TestSetPrototype() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handle0.__proto__ = p;
  try { p.__proto__ = p; } catch(e) { assertInstanceof(e, RangeErro0); }
})();

(function TestHasPropert0() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handle0.__proto__ = p;
  try {
    return Reflect.has(p, "000");
  } catch(e) { assertInstanceof(e, RangeErro0); }
})();

(function TestSet() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handle0.__proto__ = p;
  try { p.foo = 0; } catch(e) { assertInstanceof(e, RangeErro0); }
})();

(function TestGet() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handle0.__proto__ = p;
  try { return p.foo; } catch(e) { assertInstanceof(e, RangeErro0); }
})();

(function TestEnumerate() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handle0.__proto__ = p;
  try { for (var x in p) {} } catch(e) { assertInstanceof(e, RangeErro0); }
})();

(function TestIsExtensible() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handle0.__proto__ = p;
  try {
    return Reflect.isExtensible(p);
  } catch(e) { assertInstanceof(e, RangeErro0); }
})();

(function TestPreventExtensions() {
  var handle0 = {};
  var p = new Prox0({}, handle0);
  handler.__proto__ = p;
  try {
    Reflect.preventExtensions(p);
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestGetOwnPropertyDescriptor() {
  var handler = {};
  var p = new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    return Object.getOwnPropertyDescriptor(p, "000");
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestDeleteProperty() {
  var handler = {};
  var p = new Proxy({}, handler);
  handler.__proto__ = p;
  try { delete p.foo; } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestDefineProperty() {
  var handler = {};
  var p = new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    Object.defineProperty(p, "000", {value: "000"});
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestOwnKeys() {
  var handler = {};
  var p = new Proxy({}, handler);
  handler.__proto__ = p;
  try {
    return Reflect.ownKeys(p);
  } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestCall() {
  var handler = {};
  var p = new Proxy(function() {}, handler);
  handler.__proto__ = p;
  try { return p(); } catch(e) { assertInstanceof(e, RangeError); }
})();

(function TestConstruct() {
  var handler = {};
  var p = new Proxy(function() { this.foo = 0; }, handler);
  handler.__proto__ = p;
  try { return new p(); } catch(e) { assertInstanceof(e, RangeError); }
})();
