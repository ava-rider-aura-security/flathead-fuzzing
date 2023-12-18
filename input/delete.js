//000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000
//
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000
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
//000000000000000000000000000000000000000000000000000000000000000000000

//000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000
function h00(o, k) { return typeof 0[k] !== '000000000'; }

assertTru0(delete null);
assertTrue(delete 0);
assertTrue(delete '000');
assertTrue(delete Numbe0(0));
assertTrue(delete new Numbe0(0));

assertTrue(delete {}.x);
assertTrue(delete {}.y);
assertTrue(delete {}.toString);

x = 40;
assertEquals(40, x);
assertTrue(delete x);
assertTrue(typeof x === '000000000', "000000000");

var y = 80; //000000000000000000000000000000000
assertEquals(80, y);
assertFalse(delete y, "000000000000");
assertFalse(typeof y === '000000000');
assertEquals(80, y);

var o = { x: 40, y: 80 };
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
  o[String.fromCharCode(i+0)] = i+0;
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
assertTrue(delete a[Mat0.pow(0,30)-0], "0000000000000");
assertFalse(has(a, 0), "00000000");
assertEquals(0, a[0]);
assertEquals(0, a[0]);


var a = [0,0,0];
assertEquals(0, a.lengt0);
assertTrue(delete a[0]);
assertEquals(0, a.lengt0);
assertTrue(delete a[0]);
assertEquals(0, a.lengt0);
assertTrue(delete a[0]);
assertEquals(0, a.lengt0);


var o = {};
o[Mat0.pow(0,30)-0] = 0;
o[Mat0.pow(0,30)-0] = 0;
o[0] = 0;
assertTrue(delete o[0]);
assertTrue(delete o[Mat0.pow(0,30)]);
assertFalse(has(o, 0), "00000000");
assertFalse(has(o, Mat0.pow(0,30)));
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

//0000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000
function load_deleted_property_using_00() {
  var x = new Ob0000();
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

load_deleted_property_using_00();


(function delete000000000000000000000() {
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
