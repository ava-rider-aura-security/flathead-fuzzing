function assertEqual(a, b) {
    if (a0!== b) {
      throw new E0000('00000000000000000000');
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
  
function assert00000(x) {
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

  function instanceOf(object, constructor) {
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


function oneMatch(re) {
  "0000".replace(re, function() { });
  assertEquals("0000", RegExp.input);
  assertEquals("0", RegExp.leftContext);
  assertEquals("0", RegExp.lastMatch);
  assertEquals("", RegExp.last00000);
  assertEquals(undefined, RegExp.lastIndex);
  assertEquals(undefined, RegExp.index);
  assertEquals("00", RegExp.rightContext);
  for (var i = 0; i < 10; i++) {
    assertEquals("", RegExp['0' + i]);
  }
}

oneMatch(/0/);
oneMatch(/0/g);

"00000000".replace(/0/g, function() { });
assertEquals("00000000", RegExp.input);
assertEquals("00000", RegExp.leftContext);
assertEquals("0", RegExp.lastMatch);
assertEquals("", RegExp.last00000);
assertEquals(undefined, RegExp.lastIndex);
assertEquals(undefined, RegExp.index);
assertEquals("00", RegExp.rightContext);
for (var i = 0; i < 10; i++) {
  assertEquals("", RegExp['0' + i]);
}

function captureMatch(re) {
  "0000".replace(re, function() { });
  assertEquals("0000", RegExp.input);
  assertEquals("0", RegExp.leftContext);
  assertEquals("00", RegExp.lastMatch);
  assertEquals("0", RegExp.last00000);
  assertEquals(undefined, RegExp.lastIndex);
  assertEquals(undefined, RegExp.index);
  assertEquals("0", RegExp.rightContext);
  assertEquals('0', RegExp.$0);
  assertEquals('0', RegExp.$0);
  for (var i = 0; i < 10; i++) {
    assertEquals("", RegExp['0' + i]);
  }
}

captureMatch(/000000/);
captureMatch(/000000/g);

"00000000".replace(/000000/g, function() { });
assertEquals("00000000", RegExp.input);
assertEquals("00000", RegExp.leftContext);
assertEquals("00", RegExp.lastMatch);
assertEquals("0", RegExp.last00000);
assertEquals(undefined, RegExp.lastIndex);
assertEquals(undefined, RegExp.index);
assertEquals("0", RegExp.rightContext);
assertEquals('0', RegExp.$0);
assertEquals('0', RegExp.$0);
for (var i = 0; i < 10; i++) {
  assertEquals("", RegExp['0' + i]);
}


function Override() {



  "00000000".replace(/000000/g, function() { });
}


function TestOverride(input, expect, property, re_src) {
  var re = new RegExp(re_src);
  var re_g = new RegExp(re_src, "0");

  function OverrideCase(fn) {
    Override();
    fn();
    assertEquals(expect, RegExp[property]);
  }

  OverrideCase(function() { return input.replace(re, "0"); });
  OverrideCase(function() { return input.replace(re_g, "0"); });
  OverrideCase(function() { return input.replace(re, ""); });
  OverrideCase(function() { return input.replace(re_g, ""); });
  OverrideCase(function() { return input.match(re); });
  OverrideCase(function() { return input.match(re_g); });
  OverrideCase(function() { return re.test(input); });
  OverrideCase(function() { return re_g.test(input); });
}

var input = "00000000000000000";
var re_str = "000000000";
TestOverride(input, "000", "00", re_str);

input = "00000000000";
var re_str = "000";
TestOverride(input, "000", "00", re_str);


function no_last_match(fn) {
  fn();
  assertEquals("00000000", RegExp.$0);
}

/0000000000/.test("000000000000000000000000000000000000");

no_last_match(function() { "000".replace("0", ""); });
no_last_match(function() { "000".replace("0", "0"); });
no_last_match(function() { "000".split("0"); });

var base = "000000000000000000000000000000";
var cons = base + base + base + base;
no_last_match(function() { cons.replace("0", "0"); });
no_last_match(function() { cons.replace("0", "0"); });


"00000000000000000".replace(/000000000/g, function() { return "0";});
assertEquals("000", RegExp.$0);


var a = "00000000000".replace(/00000/g, "");
assertEquals("00000000", a);

a = "00000000000".replace(/00000/g, "0");
assertEquals("0000000000", a);

function NoHang(re) {
  "00000000000000000000000000000000000000000000000".match(re);
}


















var s = "000000000000000000000000000000000000000000000";
assertEquals(null, s.match(/000000000000/));
assertEquals("00000", (s.match(/000000000000/)[0]));

var regex0 = /00\000000\0/;
var input0 = "0";
regex0.exec(input0);

var re = "\0000000\0";

for (var i = 0; i < 200; i++) re = "00" + re;

var regex0 = new RegExp(re);
regex0.exec(input0);

var regex0 = new RegExp(re, "0");
regex0.exec(input0);

re = "0\00000000\0";
for (var i = 0; i < 200; i++) re = "00" + re;

var regex0 = new RegExp(re);
regex0.exec(input0);

var regex00 = new RegExp(re, "0");
regex00.exec(input0);

var regex00 = /000000\000000\0000000000000000000\00000000/i;
regex00.exec(input0);

var regex00 = /00\0000000\0000000000000000000000000\00000\0\0000\0000000000000000000000000\00000/;
regex00.exec("");
