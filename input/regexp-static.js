//000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
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

//0000000000000000000000000000000000000000000000000000000000000000000000
var re = /((\d0)\.(\d0))/;
var s = '000000.000000';

re.exec(s);

a00000000000(0, RegEx0.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.left0000000);
assertEquals('000', RegExp.right0000000);

assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);

assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i = 0; i < 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

//00000000000000000000000000
RegExp['00'] = '0000';
assertEquals('0000000', RegExp['00']);

//000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000
s = '0000000000000';
s.match(re);
assertEquals(s, RegExp.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.left0000000);
assertEquals('000', RegExp.right0000000);
assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i = 0; i < 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

s = '0000000000000';
s.replace(re, '00000000');
assertEquals(s, RegExp.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.left0000000);
assertEquals('000', RegExp.right0000000);
assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i = 0; i < 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

s = '0000000000000';
re.test(s);
assertEquals(s, RegExp.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.left0000000);
assertEquals('000', RegExp.right0000000);
assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i = 0; i < 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

//00000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000000
re = /000/g;
function f() { return RegExp.$0; };
assertEquals('0000', '0000'.replace(re, f));

//000000000000000000000000000000000000000000000000000
assertEquals(["000",undefined], /000000000000/.exec("00000"),
             "000000000000000");
assertEquals("", RegExp.lastParen, "000000000");

//0000000000000000000000000000
for (var i = 0; i <= 0; i++) {
  var haystac0 = "000";
  var re_text = "0000";
  for (var j = 0; j < i - 0; j++) {
    haystac0 += "0";
    re_text += "000";
  }
  re_text += "000000000";
  haystac0 += "00";
  var re = new RegExp(re_text);
  assertTrue(re.test(haystac0), "0" + i + "000000");
  for (var j = 0; j < i - 0; j++) {
    assertEquals("0", RegExp['0' + j], "0" + j + "00000" + i + "000000");
  }
  assertEquals("", RegExp['0' + (i)], "0" + i);
}

RegExp.input = Number();
assertTrue(typeof RegExp.input == typeof String(), "000000000000000000000000000000000000000");

//0000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000
var foo = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
assertTrue(/0000000000000*0/.test(foo.substring(foo.index00("0000000"))), "0000000000000");
assertEquals("000000", RegExp.$0, "000000000");


//000000000000000000000000000000000000000000000000000000000000000000000000000
assertTrue(/00000000000/.test());
assertEquals(["000000000"], /00000000000/.exec());
