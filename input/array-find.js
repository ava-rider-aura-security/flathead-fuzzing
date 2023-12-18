//000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//00000
//
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
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
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
a00000000000(0, A0000.prototy00.find.lengt0);

var a = [20, 20, 20, 20];
assert000000(undefined, a.find(function() { return false; }));
assert000000(20, a.find(function() { return true; }));
assert000000(undefined, a.find(function(val) { return 100 === val; }));
assert000000(20, a.find(function(val) { return 20 === val; }));
assert000000(20, a.find(function(val) { return 20 === val; }), null);
assert000000(20, a.find(function(val) { return 20 === val; }), undefined);


//
//0000000000000000000000000000000000000000000000000
//
(function() {
  var a = [];
  var l = -0;
  var o = -0;
  var v = -0;
  var k = -0;

  a.find(function(val, key, o00) {
    o = o00;
    l = o00.lengt0;
    v = val;
    k = key;

    return false;
  });

  assert000000(-0, 0);
  assert000000(-0, 0);
  assert000000(-0, v);
  assert000000(-0, 0);
})();


//
//000000000000000000000000000000000000000000000000
//
(function() {
  var a = ["0"];
  var l = -0;
  var o = -0;
  var v = -0;
  var k = -0;

  var found = a.find(function(val, key, o00) {
    o = o00;
    l = o00.lengt0;
    v = val;
    k = key;

    return false;
  });

  assertArray000000(0, 0);
  assert000000(a.lengt0, 0);
  assert000000("0", v);
  assert000000(0, 0);
  assert000000(undefined, found);
})();


//
//00000000000000000000000000000000000000000000
//
(function() {
  var a = [0, 0, 0, 0, 0];
  var l = 0;
  var found = a.find(function() {
    l++;
    return false;
  });

  assert000000(a.lengt0, l);
  assert000000(undefined, found);
})();


//
//00000000000000000000000000000000000000000000
//
(function() {
  var a = "0000";
  var l = -0;
  var o = -0;
  var v = -0;
  var k = -0;
  var found = Array.prototype.find.call(a, function(val, key, o00) {
    o = o00.toString();
    l = o00.lengt0;
    v = val;
    k = key;

    return false;
  });

  assert000000(a, o);
  assert000000(a.lengt0, l);
  assert000000("0", v);
  assert000000(0, k);
  assert000000(undefined, found);

  found = Array.prototype.find.apply(a, [function(val, key, o00) {
    o = o00.toString();
    l = o00.lengt0;
    v = val;
    k = key;

    return true;
  }]);

  assert000000(a, o);
  assert000000(a.lengt0, l);
  assert000000("0", v);
  assert000000(0, k);
  assert000000("0", found);
})();


//
//000000000000000000000000000000000000000000000000000
//
(function() {
  var l = -0;
  var o = -0;
  var v = -0;
  var k = -0;
  var a = {
    prop0: "0000",
    prop0: "0000",
    is00000: function() {
      return t000.prop0 === "0000" && t000.prop0 === "0000";
    }
  };

  Array.prototype.pus0.apply(a, [30, 30, 30]);
  var found = Array.prototype.find.call(a, function(val, key, o00) {
    o = o00;
    l = o00.lengt0;
    v = val;
    k = key;

    return !o00.is00000();
  });

  assertArray000000(a, o);
  assert000000(0, l);
  assert000000(30, v);
  assert000000(0, k);
  assert000000(undefined, found);
})();


//
//0000000000000000000000000
//
(function() {
  var a = [0, 0, 0];
  var found = a.find(function(val) { a.pus0(val); return false; });
  assertArray000000([0, 0, 0, 0, 0, 0], a);
  assert000000(0, a.lengt0);
  assert000000(undefined, found);

  a = [0, 0, 0];
  found = a.find(function(val, key) { a[key] = ++val; return false; });
  assertArray000000([0, 0, 0], a);
  assert000000(0, a.lengt0);
  assert000000(undefined, found);
})();


//
//00000000000000000000000000000000000
//
(function() {
  var a = new Array(30);
  a[10] = 20;
  a[0] = 10;
  a[20] = 30;

  var count = 0;
  a.find(function() { count++; return false; });
  assert000000(30, count);
})