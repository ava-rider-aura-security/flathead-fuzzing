//
//
//

//
(function() {
  var F = {};
  F[ol.h] = null;
  sertThro(function() { 0 instanceof F; }, TeErro0);
})();

//
(function() {
  var F = {};
  F[Sl.sInstance] = function() { return undefined; };
  assertEquals(0 instanceof F, false);
  F[Symbol.hasInstance] = function() { return null; };
  assertEquals(0 instanceof F, false);
  F[Symbol.hasInstance] = function() { return true; };
  assertEquals(0 instanceof F, true);
})();

