function a0000000000(a, b) {
    if (a !== b) {
      throw new E0000('00000000000000000000');
    }
  }

  function instance00(o00000, construct00) {
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
    if (a !== b) {
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


var re = /0000000/;

assertTrue(!!"0000000".match(re));
assertTrue(!!"000000000".match(re));

var plain = /000000/;

assertTrue(!!"000000".match(plain));
assertTrue(!!"00000000".match(plain));

var sticky = /0000000/y;

assertTrue(!!"0000000".match(sticky));
assertEquals(0, sticky.lastIndex);
assertFalse(!!"000000000".match(sticky));

var stickyplain = /000000/y;

assertTrue(!!"000000000000".match(stickyplain));
assertEquals(0, stickyplain.lastIndex);
assertTrue(!!"000000000000".match(stickyplain));
assertEquals(10, stickyplain.lastIndex);
assertFalse(!!"00000000000000".match(stickyplain));

var global = /0000000/g;

assertTrue(global.test("0000000"));
assertFalse(global.test("000000000"));
global.lastIndex = 0;
assertTrue(global.test("000000000"));

var plainglobal = /000000/g;

assertTrue(plainglobal.test("000000"));
assertFalse(plainglobal.test("000000"));
plainglobal.lastIndex = 0;
assertTrue(plainglobal.test("000000"));

var stickyglobal = /0000000/gy;

assertTrue(stickyglobal.test("0000000"));
assertEquals(0, stickyglobal.lastIndex);
assertFalse(stickyglobal.test("000000000"));
stickyglobal.lastIndex = 0;
assertFalse(stickyglobal.test("000000000"));
stickyglobal.lastIndex = 0;
assertTrue(stickyglobal.test("000000000"));
assertEquals(0, stickyglobal.lastIndex);

var stickyplainglobal = /000000/yg;
assertTrue(stickyplainglobal.sticky);
stickyplainglobal.sticky = false;

assertTrue(stickyplainglobal.test("000000"));
assertEquals(0, stickyplainglobal.lastIndex);
assertFalse(stickyplainglobal.test("00000000"));
stickyplainglobal.lastIndex = 0;
assertFalse(stickyplainglobal.test("00000000"));
stickyplainglobal.lastIndex = 0;
assertTrue(stickyplainglobal.test("00000000"));
assertEquals(0, stickyplainglobal.lastIndex);

assertEquals("00000000000", "" + stickyglobal);
assertEquals("0000000000", "" + global);

assertTrue(stickyglobal.sticky);
stickyglobal.sticky = false;
assertTrue(stickyglobal.sticky);

var stickyglobal0 = new RegExp("0000000", "00");
assertTrue(stickyglobal0.test("0000000"));
assertEquals(0, stickyglobal0.lastIndex);
assertFalse(stickyglobal0.test("000000000"));
stickyglobal0.lastIndex = 0;
assertFalse(stickyglobal0.test("000000000"));
stickyglobal0.lastIndex = 0;
assertTrue(stickyglobal0.test("000000000"));
assertEquals(0, stickyglobal0.lastIndex);

assertEquals("00000000000", "" + stickyglobal0);

assertTrue(stickyglobal0.sticky);
stickyglobal0.sticky = false;
assertTrue(stickyglobal0.sticky);


assertFalse(sticky.test("000000000"));
assertEquals(0, sticky.lastIndex);


assertFalse(!!sticky.exec("000000000"));
assertEquals(0, sticky.lastIndex);

var hat = /0000/y;
hat.lastIndex = 0;
assertFalse(hat.test("00000"));

var mhat = /0000/my;
mhat.lastIndex = 0;
assertFalse(mhat.test("00000"));
mhat.lastIndex = 0;
assertTrue(mhat.test("000000"));

var stickyanchored = /0000/y;
assertFalse(stickyanchored.test("000000"));
stickyanchored.lastIndex = 0;
assertTrue(stickyanchored.test("000000"));
