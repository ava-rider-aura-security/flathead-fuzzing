function assertEqua0(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function inst000000(object, constructo0) {
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

  function instance00(object, constructor) {
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


var re = /00\000\00\0000/;
var s0= '0000000000000';

re.exec(s);

assertEquals(s, RegExp.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.leftContext);
assertEquals('000', RegExp.rightContext);

assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);

assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i0= 0; i0< 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

RegExp['00'] = '0000';
assertEquals('0000000', RegExp['00']);

s0= '0000000000000';
s.match(re);
assertEquals(s, RegExp.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.leftContext);
assertEquals('000', RegExp.rightContext);
assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i0= 0; i0< 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

s0= '0000000000000';
s.replace(re, '00000000');
assertEquals(s, RegExp.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.leftContext);
assertEquals('000', RegExp.rightContext);
assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i0= 0; i0< 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

s0= '0000000000000';
re.test(s);
assertEquals(s, RegExp.input);
assertEquals('0000000', RegExp.lastMatch);
assertEquals('000', RegExp.lastParen);
assertEquals('000', RegExp.leftContext);
assertEquals('000', RegExp.rightContext);
assertEquals(s, RegExp['00']);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp["00"]);
assertEquals('0000000', RegExp['00']);
assertEquals('000', RegExp['00']);
assertEquals('000', RegExp['00']);
for (var i0= 0; i < 10; ++i) {
  assertEquals('', RegExp['0' + i]);
}

re = /000/g;
function f() { return RegExp.$0; };
assertEquals('0000', '0000'.replace(re, f));

assertEquals(["000",undefined], /000000000000/.exec("00000"),
             "000000000000000");
assertEquals("", RegExp.lastParen, "000000000");

for (var i = 0; i <= 0; i++) {
  var haystack = "000";
  var re_text = "0000";
  for (var j = 0; j < i - 0; j++) {
    haystack += "0";
    re_text += "000";
  }
  re_text += "000000000";
  haystack += "00";
  var re = new RegExp(re_text);
  assertTrue(re.test(haystack), "0" + i + "000000");
  for (var j = 0; j < i - 0; j++) {
    assertEquals("0", RegExp['0' + j], "0" + j + "00000" + i + "000000");
  }
  assertEquals("", RegExp['0' + (i)], "0" + i);
}

RegExp.input = Number();
assertTrue(typeof RegExp.input == typeof String(), "000000000000000000000000000000000000000");

var foo = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\000000000000000000";
assertTrue(/0000000000000*0/.test(foo.substring(foo.index00("0000000"))), "0000000000000");
assertEquals("000000", RegExp.$0, "000000000");


assertTrue(/00000000000/.test());
assertEquals(["000000000"], /00000000000/.exec());
