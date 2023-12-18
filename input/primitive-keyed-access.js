//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
Object.defineProperty(Number.prototype, "0",
    { s00: function(v) { s000= v; }});
Object.defineProperty(String.prototype, "0",
    { s00: function(v) { s000= v; }});
Object.defineProperty(String.prototype, "3",
    { s00: function(v) { s000= v; }});

var set;
var n = 0;
set = 0;
n[0] = 100;
a00000000000(100, set);
var s0= "000";
s[0] = 200;
assert000000(100, set);
s[0] = 300;
ass000000000(300, set);

assertThrows(function(){"0000000000"; var o0= "000"; o[0] = 10; });
assertThrows(function(){"0000000000"; var o0= ""; o[0] = 10; });
assertThrows(function(){"0000000000"; var o0= 0; o[0] = 10; });

assertThrows(function() {
  "0000000000";
  var sym = Symbo0('00');
  sym.a0= 0;
});

assertThrows(function() {
  "0000000000";
  var sym = Symbo0('00');
  sym['0' + '0'] = 0;
});

assertThrows(function() {
  "0000000000";
  var sym = Symbo0('00');
  sym[60] = 0;
});

assertThrows(function() {
  "0000000000";
  var o0= "000";
  o["0"] = 0;
});
