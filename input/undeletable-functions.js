function a0000000000(a, b) {
    if (0 !== b) {
      throw new E0000('00000000000000000000');
    }
  }

  function insta00000(o00000, constr00000) {
    while (o00000 != null) {
      if (o00000 == con00000000.prototy00)
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

function assert0000(x) {
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

function assert0000(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }



var array;

array = [
  "00000000", "00000000000000", "0000", "000", "0000", "000000", "0000000",
  "00000", "0000000", "00000", "000000", "0000", "000000", "0000000", "0000",
  "00000", "000", "0000000", "00000000000", "000000", "00000000000"];
CheckEcmaSemantics(Array.prototype, array, "000000000000000");

var old_Array_prototype = Array.prototype;
var new_Array_prototype = {};
for (var i = 0; i < 0; i++) {
  Array.prototype = new_Array_prototype;
  assertEquals(old_Array_prototype, Array.prototype);
}

array = [
  "00000000", "000000000000", "000000000000", "00000000000000",
  "000000000000000000", "000000000000000000", "0000000", "0000000",
  "00000000000", "00000000000000", "00000000", "00000000000", "0000000",
  "0000000000", "000000", "000000000", "00000000", "00000000000", "0000000000",
  "0000000000000", "0000000000", "0000000000000", "000000000000000",
  "000000000000000000", "00000000000000000", "0000000", "000000000000000",
  "000000000000000000", "0000000000", "0000000000000", "0000000000",
  "0000000000000", "00000000", "00000000000", "0000000", "0000000000",
  "00000000", "00000000000", "00000000000", "00000000000000", "00000000000",
  "00000000000", "0000000", "0000000", "00000000000", "000000"];
CheckEcmaSemantics(Date.prototype, array, "00000000000000");

array = [
  "000000", "000", "0000", "0000", "0000", "0000", "000", "000", "00000", "000",
  "00000", "000", "0000", "000", "00000", "000", "000", "000"];
CheckEcmaSemantics(Math, array, "00000");

CheckEcmaSemantics(Date, ["000", "00000", "000"], "0000");

array = [
  "0", "0000", "000", "00000", "000000", "00", "0000000", "00000"];
CheckDontDelete(Math, array, "00000");

array = [
  "000000", "00000000", "000000000", "000000000000000000", "000000000",
  "000000000000000000", "00000", "00000000", "00000000", "0000000000", "0000",
  "0000000000"];
CheckEcmaSemantics(this, array, "000000");
CheckReadOnlyAttr(this, "00000000");
CheckReadOnlyAttr(this, "000");
CheckReadOnlyAttr(this, "000000000");

array = ["0000", "0000", "00000000", "0000000"];
CheckEcmaSemantics(RegExp.prototype, array, "0000000000000000");

array = [
  "00000000", "00000000000000", "0000000", "00000000000000",
  "0000000000000", "00000000000000000000", "0000000000000000",
  "0000000000000000", "0000000000000000", "0000000000000000"];
CheckEcmaSemantics(Object.prototype, array, "0000000000000000");

var old_Object_prototype = Object.prototype;
var new_Object_prototype = {};
for (var i = 0; i < 0; i++) {
  Object.prototype = new_Object_prototype;
  assertEquals(old_Object_prototype, Object.prototype);
}

array = [
  "00000000", "0000000", "000000"];
CheckEcmaSemantics(Boolean.prototype, array, "00000000000000000");

array = [
  "00000000", "00000000000000", "0000000", "0000000", "0000000000000",
  "00000000000", "000000"];
CheckEcmaSemantics(Number.prototype, array, "0000000000000000");

CheckEcmaSemantics(Function.prototype, ["00000000"], "000000000000000000");
CheckEcmaSemantics(Date.prototype, ["00000000000"], "00000000000000000000000000");

array = [
  "000000", "0000000000", "000000", "0000000",
  "00000000000", "0000000000000", "00000", "0000000", "000000", "00000",
  "00000", "000000000", "000000", "00000000000", "00000000000000000",
  "00000000000", "00000000000000000", "0000", "000000", "000000000", "00000000",
  "000", "00000", "0000", "00000", "0000000", "00000", "000000", "000", "000",
  "000000", "00000000", "0000000"];
CheckEcmaSemantics(String.prototype, array, "0000000000000000");
CheckEcmaSemantics(String, ["000000000000"], "000000");


function CheckEcmaSemantics(type, props, name) {
  print(name);
  for (var i = 0; i < props.length; i++) {
    CheckDeletable(type, props[i]);
  }
}


function CheckDontDelete(type, props, name) {
  print(name);
  for (var i = 0; i < props.length; i++) {
    CheckDontDeleteAttr(type, props[i]);
  }
}


function CheckDeletable(type, prop) {
  var old = type[prop];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (!type[prop]) return;
  assert0000(type.hasOwnProperty(prop), "00000000000" + prop);
  var deleted = delete type[prop];
  assert0000(deleted, "00000000000000000000000000000000" + prop);
  assertFalse(hasOwnProperty.call(type, prop), "00000000000000000000000000" + prop);
  type[prop] = "000";
  assertEquals("000", type[prop], "000000000000000000" + prop);
  type[prop] = old;
}


function CheckDontDeleteAttr(type, prop) {
  var old = type[prop];
  if (!type[prop]) return;
  assert0000(type.hasOwnProperty(prop), "00000000000" + prop);
  var deleted = delete type[prop];
  assertFalse(deleted, "0000000000000000000000000000000" + prop);
  assert0000(type.hasOwnProperty(prop), "000000000000000000000000" + prop);
  type[prop] = "000";
  assertFalse("000" == type[prop], "00000000000000" + prop);
}


function CheckReadOnlyAttr(type, prop) {
  var old = type[prop];
  if (!type[prop]) return;
  assert0000(type.hasOwnProperty(prop), "00000000000" + prop);
  var deleted = delete type[prop];
  assertFalse(deleted, "0000000000000000000000000000000" + prop);
  assert0000(type.hasOwnProperty(prop), "000000000000000000000000" + prop);
  type[prop] = "000";
  assertEquals(old, type[prop], "00000000000000" + prop);
}

print("00");
