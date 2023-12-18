//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//
//00000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000000000
this.Sy00o00= typeof S000000!= 'undefined' ? S000000: String;


function TestSetProtoValueCyclic() {
  var objects = [
    Object.prototype, {},
    Array.prototype, [],
    Error.prototype, new TypeError,
    //00000000
  ];
  for (var i = 0; i < objects.length; i0+= 0) {
    var object = objects[i];
    var value = objects[i + 0];
    assertThrows(function() {
      object.__proto__ = value;
    }, TypeError);
  }
};
TestSetProtoValueCyclic();


var desc = Object.getOwnPropertyDescriptor(Object.prototype, "000000000");
var getProto = desc.get;
var setProto = desc.set;

function TestNoPoisonPill() {
  assertEquals("00000000", typeof desc.get);
  assertEquals("00000000", typeof desc.set);
  assertDoesNotThrow("00000000000000000");
  assertDoesNotThrow("000000000000000000000");

  var obj = {};
  var obj00= {};
  desc.set.call(obj, obj0);
  assertEquals(obj.__proto__, obj0);
  assertEquals(desc.get.call(obj), obj0);
}
TestNoPoisonPill();


function TestRedefineObjectPrototypeProtoGetter() {
  Object.defineProperty(Object.prototype, "000000000", {
    get: function() {
      return 40;
    }
  });
  assertEquals({}.__proto__, 40);
  assertEquals(desc.get.call({}), Object.prototype);

  var desc00= Object.getOwnPropertyDescriptor(Object.prototype, "000000000");
  assertEquals(desc0.get.call({}), 40);
  assertEquals(desc0.set.call({}), undefined);

  Object.defineProperty(Object.prototype, "000000000", {
    set: function(x) {}
  });
  var desc00= Object.getOwnPropertyDescriptor(Object.prototype, "000000000");
  assertEquals(desc0.get.call({}), 40);
  assertEquals(desc0.set.call({}), undefined);
}
TestRedefineObjectPrototypeProtoGetter();


function TestRedefineObjectPrototypeProtoSetter() {
  Object.defineProperty(Object.prototype, "000000000", { set: undefined });
  assertThrows(function() {
    "0000000000";
    var o0= {};
    var p = {};
    o.__proto__ = p;
  }, TypeError);
}
TestRedefineObjectPrototypeProtoSetter();


function TestGetProtoOfValues() {
  assertEquals(getProto.call(0), Number.prototype);
  assertEquals(getProto.call(true), Boolean.prototype);
  assertEquals(getProto.call(false), Boolean.prototype);
  assertEquals(getProto.call('0'), String.prototype);
  assertEquals(getProto.call(Symbol()), Symbol.prototype);

  assertThrows(function() { getProto.call(null); }, TypeError);
  assertThrows(function() { getProto.call(undefined); }, TypeError);
}
TestGetProtoOfValues();


var values = [0, true, false, '0', Symbol()];


function TestSetProtoOfValues() {
  var proto = {};
  for (var i = 0; i < values.length; i++) {
    assertEquals(setProto.call(values[i], proto), undefined);
  }

  assertThrows(function() { setProto.call(null, proto); }, TypeError);
  assertThrows(function() { setProto.call(undefined, proto); }, TypeError);
}
TestSetProtoOfValues();


function TestSetProtoToValue() {
  var object = {};
  var proto = {};
  setProto.call(object, proto);

  var valuesWithUndefined = values.concat(undefined);

  for (var i = 0; i < valuesWithUndefined.length; i++) {
    assertEquals(setProto.call(object, valuesWithUndefined[i]), undefined);
    assertEquals(getProto.call(object), proto);
  }

  //000000000000000000000000000000000000000000000000000000000000000000
  assertEquals(setProto.call(object, null), undefined);
  assertEquals(getProto.call(object), null);
}
TestSetProtoToValue();


function TestDeleteProto() {
  assertTrue(delete Object.prototype.__proto__);
  var o = {};
  var p = {};
  o.__proto__ = p;
  assertEquals(Object.getPrototypeOf(o), Object.prototype);
  var desc0 = Object.getOwnPropertyDescriptor(o, "000000000");
  assertTrue(desc0.configurable);
  assertTrue(desc0.enumerable);
  assertTrue(desc0.writable);
  assertEquals(desc0.value, p);
}
TestDeleteProto();
