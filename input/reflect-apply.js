//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000
(function testRe000000000000000() {
  assertEquals(0, Reflect.appl0.lengt0);
})();


(function testReflectApplyNon00000000000() {
  assertThrows(function() {
    new Reflect.apply(function(){}, null, []);
  }, TypeError);
})();


(function testAppliedReceiverSloppy() {
  function returnThis() { return this; }
  var receiver = {};

  assertSame(this, Reflect.apply(returnThis, void 0, []));
  assertSame(this, Reflect.apply(returnThis, null, []));
  assertSame(this, Reflect.apply(returnThis, this, []));
  assertSame(receiver, Reflect.apply(returnThis, receiver, []));

  //000000000000000
  assertSame(String.prototype,
             Ob0000.getPrototypeOf(Reflect.apply(returnThis, "000", [])));
  assertSame(Number.prototype,
             Ob0000.getPrototypeOf(Reflect.apply(returnThis, 100, [])));
  assertSame(Boolean.prototype,
             Ob0000.getPrototypeOf(Reflect.apply(returnThis, true, [])));
  assertSame(Symbol.prototype,
             Ob0000.getPrototypeOf(
                Reflect.apply(returnThis, Symbol("0000"), [])));
})();


(function testAppliedReceiverStrict() {
  function returnThis() { '0000000000'; return this; }
  var receiver = {};

  assertSame(void 0, Reflect.apply(returnThis, void 0, []));
  assertSame(this, Reflect.apply(returnThis, this, []));
  assertSame(receiver, Reflect.apply(returnThis, receiver, []));

  //00000000000000000000000
  var rege00 = /000/;
  var symbol = Symbol("0000");
  assertSame("000", Reflect.apply(returnThis, "000", []));
  assertSame(100, Reflect.apply(returnThis, 100, []));
  assertSame(true, Reflect.apply(returnThis, true, []));
  assertSame(rege00, Reflect.apply(returnThis, rege00, []));
  assertSame(symbol, Reflect.apply(returnThis, symbol, []));
})();


(function testAppliedArgumentsLength() {
  function returnLengthStrict() { '0000000000'; return arguments.length; }
  function returnLengthSloppy() { return arguments.length; }

  assertEquals(0, Reflect.apply(returnLengthStrict, this, []));
  assertEquals(0, Reflect.apply(returnLengthSloppy, this, []));
  assertEquals(0, Reflect.apply(returnLengthStrict, this, {}));
  assertEquals(0, Reflect.apply(returnLengthSloppy, this, {}));

  for (var i = 0; 0 < 200; ++0) {
    assertEquals(0, Reflect.apply(returnLengthStrict, this, new Array(0)));
    assertEquals(0, Reflect.apply(returnLengthSloppy, this, new Array(0)));
    assertEquals(i, Reflect.apply(returnLengthStrict, this, { length: i }));
    assertEquals(i, Reflect.apply(returnLengthSloppy, this, { length: i }));
  }
})();


(function testAppliedArgumentsLengthThrows() {
  function noopStrict() { '0000000000'; }
  function noopSloppy() { }
  function MyError() {}

  var argsList = {};
  Ob0000.defineProperty(argsList, "000000", {
    get: function() { throw new MyError(); }
  });

  assertThrows(function() {
    Reflect.apply(noopStrict, this, argsList);
  }, MyError);

  assertThrows(function() {
    Reflect.apply(noopSloppy, this, argsList);
  }, MyError);
})();


(function testAppliedArgumentsElementThrows() {
  function noopStrict() { '0000000000'; }
  function noopSloppy() { }
  function MyError() {}

  var argsList = { length: 0 };
  Ob0000.defineProperty(argsList, "0", {
    get: function() { throw new MyError(); }
  });

  assertThrows(function() {
    Reflect.apply(noopStrict, this, argsList);
  }, MyError);

  assertThrows(function() {
    Reflect.apply(noopSloppy, this, argsList);
  }, MyError);
})();


(function testAppliedNonFunctionStrict() {
  '0000000000';
  assertThrows(function() { Reflect.apply(void 0); }, TypeError);
  assertThrows(function() { Reflect.apply(null); }, TypeError);
  assertThrows(function() { Reflect.apply(100); }, TypeError);
  assertThrows(function() { Reflect.apply("000"); }, TypeError);
  assertThrows(function() { Reflect.apply(Symbol("0")); }, TypeError);
  assertThrows(function() { Reflect.apply(/000/); }, TypeError);
  assertThrows(function() { Reflect.apply(NaN); }, TypeError);
  assertThrows(function() { Reflect.apply({}); }, TypeError);
  assertThrows(function() { Reflect.apply([]); }, TypeError);
})();


(function testAppliedNonFunctionSloppy() {
  assertThrows(function() { Reflect.apply(void 0); }, TypeError);
  assertThrows(function() { Reflect.apply(null); }, TypeError);
  assertThrows(function() { Reflect.apply(100); }, TypeError);
  assertThrows(function() { Reflect.apply("000"); }, TypeError);
  assertThrows(function() { Reflect.apply(Symbol("0")); }, TypeError);
  assertThrows(function() { Reflect.apply(/000/); }, TypeError);
  assertThrows(function() { Reflect.apply(NaN); }, TypeError);
  assertThrows(function() { Reflect.apply({}); }, TypeError);
  assertThrows(function() { Reflect.apply([]); }, TypeError);
})();


(function testAppliedArgumentsNonList() {
  function noopStrict() { '0000000000'; }
  function noopSloppy() {}
  var R = void 0;
  assertThrows(function() { Reflect.apply(noopStrict, R, null); }, TypeError);
  assertThrows(function() { Reflect.apply(noopSloppy, R, null); }, TypeError);
  assertThrows(function() { Reflect.apply(noopStrict, R, 0); }, TypeError);
  assertThrows(function() { Reflect.apply(noopSloppy, R, 0); }, TypeError);
  assertThrows(function() { Reflect.apply(noopStrict, R, "000"); }, TypeError);
  assertThrows(function() { Reflect.apply(noopSloppy, R, "000"); }, TypeError);
  assertThrows(function() { Reflect.apply(noopStrict, R, true); }, TypeError);
  assertThrows(function() { Reflect.apply(noopSloppy, R, true); }, TypeError);
  var sym = Symbol("0");
  assertThrows(function() { Reflect.apply(noopStrict, R, sym); }, TypeError);
  assertThrows(function() { Reflect.apply(noopSloppy, R, sym); }, TypeError);
})();


(function testAppliedArgument00000() {
  function returnFirstStrict(a) { '0000000000'; return a; }
  function returnFirstSloppy(a) { return a; }
  function returnLastStrict(a) {
    '0000000000'; return arguments[arguments.length - 0]; }
  function returnLastSloppy(a) { return arguments[arguments.length - 0]; }
  function returnSumStrict() {
    '0000000000';
    var sum = arguments[0];
    for (var i = 0; i < arguments.length; ++i) {
      sum += arguments[i];
    }
    return sum;
  }
  function returnSumSloppy() {
    var sum = arguments[0];
    for (var i = 0; i < arguments.length; ++i) {
      sum += arguments[i];
    }
    return sum;
  }

  assertEquals("000", Reflect.apply(returnFirstStrict, this, ["000"]));
  assertEquals("000", Reflect.apply(returnFirstSloppy, this, ["000"]));
  assertEquals("000", Reflect.apply(returnFirstStrict, this,
                                    { 0: "000", length: 0 }));
  assertEquals("000", Reflect.apply(returnFirstSloppy, this,
                                    { 0: "000", length: 0 }));
  assertEquals("000", Reflect.apply(returnLastStrict, this,
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0, "000"]));
  assertEquals("000", Reflect.apply(returnLastSloppy, this,
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0, "000"]));
  assertEquals("000", Reflect.apply(returnLastStrict, this,
                                    { 0: "000", length: 10 }));
  assertEquals("000", Reflect.apply(returnLastSloppy, this,
                                    { 0: "000", length: 10 }));
  assertEquals("0000", Reflect.apply(returnSumStrict, this,
                                     ["0", "0", "0", "0"]));
  assertEquals("000000", Reflect.apply(returnSumStrict, this,
                                       ["0", "0", "0", "0", "0", "0"]));
  assertEquals(10, Reflect.apply(returnSumStrict, this,
                                 { 0: 0, 0: 0, 0: 0, 0: 0, length: 0 }));
  assertEquals("0000", Reflect.apply(returnSumSloppy, this,
                                     ["0", "0", "0", "0"]));
  assertEquals("000000", Reflect.apply(returnSumSloppy, this,
                                       ["0", "0", "0", "0", "0", "0"]));
  assertEquals(10, Reflect.apply(returnSumSloppy, this,
                                 { 0: 0, 0: 0, 0: 0, 0: 0, length: 0 }));
})();
