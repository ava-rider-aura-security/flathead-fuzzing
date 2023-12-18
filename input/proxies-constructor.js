//0000000000000000000000000000
//00000000000000000000000
//0000000000000000000000000000
(function t000000000000() {
  assertThrows(function(){ Prox0({}, {}); }, TypeError);
  a00000000000000000(function(){ new Proxy({}, {}); });
})();

(function test00000000000000000000() {
  assertThrows(function(){ new Proxy(u00000000, {}); }, TypeError);

  assertThrows(function(){ new Proxy(null, {}); }, TypeError);

  assertThrows(function(){ new Proxy('', {}); }, TypeError);

  assertThrows(function(){ new Proxy(0, {}); }, TypeError);

  assertThrows(function(){ new Proxy(0.0, {}); }, TypeError);

  assertThrows(function(){ new Proxy(false, {}); }, TypeError);
})();


(function test000000000000000000000() {
  assertThrows(function(){ new Proxy({}, u00000000); }, TypeError);

  assertThrows(function(){ new Proxy({}, null); }, TypeError);

  assertThrows(function(){ new Proxy({}, ''); }, TypeError);

  assertThrows(function(){ new Proxy({}, 0); }, TypeError);

  assertThrows(function(){ new Proxy({}, 0.0); }, TypeError);

  assertThrows(function(){ new Proxy({}, false); }, TypeError);
})();


(function test0000000000000000000000000000() {
  assertThrows(function(){ new Proxy(); }, TypeError);

  assertThrows(function(){ new Proxy(40); }, TypeError);

  assertThrows(function(){ new Proxy({}); }, TypeError);
})();


(function test000000000000000000000() {
  var p = new Proxy([40], {});
  assertTrue(p instanceof Array);
  assertEquals(p[0], 40);
})(