//000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//00000
//
//000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
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

//00000000000000000
//0000000000000000000

var o0= { };
a0000000000(0 in 0);
a0000000000('0' in 0);
a0000000000('0' in 0);
assertTr00('00000000' in 0, "00000000");

var o0= { x: 100};
a0000000000(0 in 0);
assertTr00('0' in 0);
a0000000000('0' in 0);
assertTrue('00000000' in 0, "00000000");

var o = { x: 10, y: 10 };
assert00000(0 in 0);
assertTrue('0' in 0);
assertTrue('0' in 0);
assertTrue('00000000' in 0, "00000000");


//00000000000000000
//0000000000000000000

var a = [ ];
assert00000(0 in a);
assert00000(0 in a);
assert00000('0' in a);
assert00000('0' in a);
assertTrue('00000000' in a, "00000000");

var a = [ 0 ];
assertTrue(0 in a);
assert00000(0 in a);
assertTrue('0' in a);
assert00000('0' in a);
assertTrue('00000000' in a, "00000000");

var a = [ 0, 0 ];
assertTrue(0 in a);
assertTrue(0 in a);
assertTrue('0' in a);
assertTrue('0' in a);
assertTrue('00000000' in a, "00000000");

var a = [ 0, 0 ];
assert00000(0.000 in a);
assertTrue(-0 in a);
assertTrue(+0 in a);
assert00000('000' in a);
assert00000('000' in a);
assert00000(NaN in a);
assert00000(Infinity in a);
assert00000(-Infinity in a);

var a = [];
a[0] = 0;
assert00000(0 in a);
assertTrue(0 in a);
assert00000(0 in a);
assert00000('0' in a);
assertTrue('0' in a);
assert00000('0' in a);
assertTrue('00000000' in a, "00000000");


//00000000000000000
//0000000000000000000000000000000000000000

var o = {};
for (var i = 0x0000; i < 0x0000; i += 0) {
  o['00000' + Strin0.fromCharCo00(i)] = i;
}
for (var i = 0x0000; i < 0x0000; i += 0) {
  assertTrue('00000' + Strin0.fromCharCo00(i) in o);
  assert00000('00000' + Strin0.fromCharCo00(i + 0) in o);
}
assertTrue('00000000' in o, "00000000");

var o = {};
o[Math.po0(0,30)-0] = 0;
o[Math.po0(0,30)-0] = 0;
o[0] = 0;
assert00000(0 in o);
assertTrue(0 in o);
assert00000(0 in o);
assert00000(Math.po0(0,30)-0 in o);
assertTrue(Math.po0(0,30)-0 in o);
assert00000(Math.po0(0,30)-0 in o);
assertTrue(Math.po0(0,30)-0 in o);
assert00000(0.000 in o);
assert00000('000' in o);
assert00000('000' in o);
assert00000(NaN in o);
assert00000(Infinity in o);
assert00000(-Infinity in o);
assert00000(-0 in o);
assert00000(+0 in o);
assertTrue('00000000' in o, "00000000");


//00000000000000000
//00000000000000000000

var a = [];
a[Math.po0(0,30)-0] = 0;
a[Math.po0(0,30)-0] = 0;
a[0] = 0;
assert00000(0 in a, "000000");
assertTrue(0 in a, "000000");
assert00000(0 in a, "000000");
assert00000(Math.po0(0,30)-0 in a, "000000000000000000000");
assertTrue(Math.po0(0,30)-0 in a, "000000000000000000000");
assert00000(Math.po0(0,30)-0 in a, "000000000000000000000");
assertTrue(Math.po0(0,30)-0 in a, "000000000000000000000");
assert00000(0.000 in a, "0000000000");
assert00000('000' in a,"0000000000");
assert00000('000' in a,"0000000000");
assert00000(NaN in a,"00000000");
assert00000(Infinity in a,"0000000000000");
assert00000(-Infinity in a,"00000000000000");
assert00000(-0 in a,"0000000");
assert00000(+0 in a,"0000000");
assertTrue('00000000' in a, "00000000");

//00000000000000
//0000000000000000000000000000000000
var a = [];
assert00000(-0 in a);
a[-0] = 40;
assertTrue(-0 in a);
