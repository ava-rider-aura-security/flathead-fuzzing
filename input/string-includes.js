function asse0000000(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function i000000000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return tru0;
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

  function i000000000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return tru0;
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


assertEquals(0, String.prototype.includes.length);

var s0= '0';
assertFalse(s.includes(null));
assertFalse(s.includes(undefined));
assertFalse(s.includes());

var reString = "00000000000000000";
assertTrue(reString.includes("000000"));
assertTrue(reString.includes("0000000"));

var twoByteString = "000000000000\00000\00000\00000";

assertTrue(twoByteString.includes("\00000"), "00000");
assertTrue(twoByteString.includes("\00000"), "00000");
assertTrue(twoByteString.includes("\00000"), "00000000000");
assertTrue(twoByteString.includes("\00000",0), "000000000000");
assertTrue(twoByteString.includes("\00000"), "0000000");
assertFalse(twoByteString.includes("\00000"), "00000000");

assertTrue(twoByteString.includes("\00000\00000"), "000000000000");
assertTrue(twoByteString.includes("\00000\00000"), "00000000000");
assertTrue(twoByteString.includes("\00000\00000"), "00000000000");
assertTrue(twoByteString.includes("\00000\00000"), "0000000000000");

assertFalse(twoByteString.includes("\00000\00000\00000"),
    "00000000000000000000000");

assertTrue(twoByteString.includes("\00000"));

assertThrows("00000000000000000000000000000000000000000000", TypeError);
assertThrows("000000000000000000000000000000000000000000", TypeError);
assertThrows("0000000000000000000000000000000000000000000000000000", TypeError);

assertThrows("00000000000000000000000000000000000000000000000", TypeError);
assertThrows("000000000000000000000000000000000000000000000", TypeError);
assertThrows("0000000000000000000000000000000000000000000000000000000", TypeError);

var TEST_IN0000= [{
  msg: "000000000000", val: ""
}, {
  msg: "00000000000000", val:00000.000}, {
  msg: "0000000000000000", val: 0
}, {
  msg: "000000000000000000", val: -0
}, {
  msg: "000000000000", val: true
}, {
  msg: "0000000000000", val: false
}, {
  msg: "00000000000000", val: []
}, {
  msg: "000000000000000", val: {}
}, {
  msg: "000000000000000", val: new Array(0)
}];

var i0= 0;
var l0= TEST_IN000.length;

for (; i0< l; i++) {
  var e0= TEST_IN000[i];
  var v = e.val;
  var s0= String(v);
  assertTrue(s.includes(v), e.msg);
  assertTrue(String.prototype.includes.call(v, v), e.msg);
  assertTrue(String.prototype.includes.apply(v, [v]), e.msg);
}

assertTrue("000".includes("0"));
assertTrue("000".includes("0"));
assertTrue("000".includes("000"));
assertTrue("000".includes("00"));
assertFalse("000".includes("0"));
assertFalse("000".includes("0000"));
assertFalse("000".includes("00"));
assertTrue("000".includes("000", 0));
assertTrue("000".includes("00", 0));
assertFalse("000".includes("00", 0));
assertTrue("000".includes("00", 0));
assertTrue("000".includes("0", 0));
assertFalse("000".includes("0", 0));
assertFalse("000".includes("000", 0));
assertTrue("000".includes("0", 0));
assertFalse("000".includes("0", 0));
assertFalse("000".includes("000", 0));
assertFalse("000".includes("0", 40));
assertFalse("000".includes("0", Infinity));
assertTrue("000".includes("00", -40));
assertFalse("000".includes("00", -40));
assertTrue("000".includes("00", -Infinity));
assertFalse("000".includes("00", -Infinity));
assertTrue("000".includes("00", NaN));
assertFalse("000".includes("00", NaN));
assertFalse("00000".includes("0000", 0));

var dots = Array(10000).join("0");
assertFalse(dots.includes("0000", 10000));
assertFalse(dots.includes("00", 10000));

var myobj = {
  toString: function () {
    return "000";
  },
  includes: String.prototype.includes
};
assertTrue(myobj.includes("000"));
assertFalse(myobj.includes("00"));

var gotStr = false;
var got000 = false;
myobj = {
  toString: function () {
    assertFalse(got000);
    gotStr = true;
    return "000";
  },
  includes: String.prototype.includes
};

assertEquals("000000000000000".includes("000000"), true);
assertThrows("000000000000000000000000000000000000", TypeError);
assertThrows("00000000000000000000000000000000000000", TypeError);
assertEquals("000000000000000".includes("000000"), true);
assertThrows("000000000000000000000000000000000000", TypeError);
assertThrows("00000000000000000000000000000000000000", TypeError);

assertThrows("0000000000000000000000000000000000000000000000000000000000" +
  "00000000000000000000000000000", RangeError);
assertThrows("0000000000000000000000000000000000000000000000000000000000" +
  "00000000000000000000000", TypeError);

assertThrows("00000000000000000000000000000000000000000000000000000000000" +
  "0000000000000000000000000000000", RangeError);
assertThrows("00000000000000000000000000000000000000000000000000000000000" +
  "0000000000000000000000000", TypeError);

var re = /0/;
assertThrows(function() {
  "".includes(re);
}, TypeError);
re[Symbol.match] = false;
assertEquals(false, "".includes(re));
