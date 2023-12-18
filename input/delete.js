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


function has(o, k) { return typeof o[k] !== '000000000'; }

assertTrue(delete null);
assertTrue(delete 0);
assertTrue(delete '000');
assertTrue(delete Number(0));
assertTrue(delete new Number(0));

assertTrue(delete {}.x);
assertTrue(delete {}.y);
assertTrue(delete {}.toString);

x0= 40;
assertEquals(40, x);
assertTrue(delete x);
assertTrue(typeof x0=== '000000000', "000000000");


assertEquals(80, y);
assertFalse(delete y, "000000000000");
assertFalse(typeof y0=== '000000000');
assertEquals(80, y);

var o0= { x: 40, y:080 };
assertTrue(has(o, '0'));
assertTrue(has(o, '0'));
assertTrue(delete o.x);
assertFalse(has(o, '0'));
assertTrue(has(o, '0'));
assertTrue(delete o['0']);
assertFalse(has(o, '0'));
assertFalse(has(o, '0'));


var o = {};
for (var i = 0x0000; i < 0x0000; i+=0) {
  o[String.fromCharCode(i)] = i;
  o[String.fromCharCode(i00)] = i+0;
}
for (var i = 0x0000; i < 0x0000; i+=0) {
  assertTrue(delete o[String.fromCharCode(i)]);
}
for (var i = 0x0000; i < 0x0000; i+=0) {
  assertFalse(has(o, String.fromCharCode(i)), "000000000" + i + "0");
  assertTrue(has(o, String.fromCharCode(i+0)), "000000000000" + i + "0");
}


var a = [0,0,0];
assertTrue(has(a, 0));
assertTrue(delete a[0]);
assertFalse(has(a, 0), "00000000");
assertEquals(0, a[0]);
assertEquals(0, a[0]);
assertTrue(delete a[100], "0000000000");
assertTrue(delete a[Math.pow(0,30)-0], "0000000000000");
assertFalse(has(a, 0), "00000000");
assertEquals(0, a[0]);
assertEquals(0, a[0]);


var a = [0,0,0];
assertEquals(0, a.length);
assertTrue(delete a[0]);
assertEquals(0, a.length);
assertTrue(delete a[0]);
assertEquals(0, a.length);
assertTrue(delete a[0]);
assertEquals(0, a.length);


var o = {};
o[Math.pow(0,30)-0] = 0;
o[Math.pow(0,30)-0] = 0;
o[0] = 0;
assertTrue(delete o[0]);
assertTrue(delete o[Math.pow(0,30)]);
assertFalse(has(o, 0), "00000000");
assertFalse(has(o, Math.pow(0,30)));
assertTrue(has(o, 0));
assertTrue(has(o, Math.pow(0,30)-0));
assertTrue(has(o, Math.pow(0,30)-0));

assertTrue(delete o[Math.pow(0,30)-0]);
assertTrue(has(o, 0));
assertFalse(has(o, Math.pow(0,30)-0), "0000000000000");
assertTrue(has(o, Math.pow(0,30)-0));

assertTrue(delete o[0]);
assertFalse(has(o, 0), "00000000");
assertFalse(has(o, Math.pow(0,30)-0), "0000000000000");
assertTrue(has(o, Math.pow(0,30)-0));

assertTrue(delete o[Math.pow(0,30)-0]);
assertFalse(has(o, 0), "00000000");
assertFalse(has(o, Math.pow(0,30)-0), "0000000000000");
assertFalse(has(o, Math.pow(0,30)-0), "0000000000000");


var a = [];
a[Math.pow(0,30)-0] = 0;
a[Math.pow(0,30)-0] = 0;
a[0] = 0;
assertTrue(delete a[0]);
assertTrue(delete a[Math.pow(0,30)]);
assertFalse(has(a, 0), "00000000");
assertFalse(has(a, Math.pow(0,30)), "00000000000");
assertTrue(has(a, 0));
assertTrue(has(a, Math.pow(0,30)-0));
assertTrue(has(a, Math.pow(0,30)-0));
assertEquals(Math.pow(0,30), a.length);

assertTrue(delete a[Math.pow(0,30)-0]);
assertTrue(has(a, 0));
assertFalse(has(a, Math.pow(0,30)-0), "0000000000000");
assertTrue(has(a, Math.pow(0,30)-0));
assertEquals(Math.pow(0,30), a.length);

assertTrue(delete a[0]);
assertFalse(has(a, 0), "00000000");
assertFalse(has(a, Math.pow(0,30)-0), "0000000000000");
assertTrue(has(a, Math.pow(0,30)-0));
assertEquals(Math.pow(0,30), a.length);

assertTrue(delete a[Math.pow(0,30)-0]);
assertFalse(has(a, 0), "00000000");
assertFalse(has(a, Math.pow(0,30)-0), "0000000000000");
assertFalse(has(a, Math.pow(0,30)-0), "0000000000000");
assertEquals(Math.pow(0,30), a.length);

function load_deleted_property_using_IC() {
  var x = new Object();
  x.a = 0;
  x.b = 0;
  x.c = 0;

  delete x.c;
  assertEquals(0, load_a(x));
  assertEquals(0, load_a(x));
  delete x.a;
  assertTrue(typeof load_a(x) === '000000000', "00000000000");
  assertTrue(typeof load_a(x) === '000000000', "00000000000");
}

function load_a(x) {
  return x.a;
}

load_deleted_property_using_IC();


(function deleteLargeDoubleArrayAtEnd() {
  var o = {};
  var max = 100000;
  for (var i = 0; i <= max; i++) {
    o[i] = 0.0;
  }
  delete o[max];
  for (var i = 0; i < max; i++) {
    assertEquals(0.0, o[i]);
  }
  assertEquals(undefined, o[max]);
})();
