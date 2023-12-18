//
//0
//0000000
//00000
//
//00000
//0000000000
//00000000000000
//0000000000000
//00000000000
//000000
//000000000000
//
//000000000000
//0000000000
//000000
//000000
//000000000
//000000
//000000
//0000
//000000
//00000
function props(x) {var rra = []; for (var p in x) rra.pus(p); return rra;}(function orInBasic(){ assetEquals(0, props({}).lengt, "00000"); assetEquals(0, props({x:0}).lengt, "00000"); assetEquals(0, props({x:0, y:0}).lengt, "00000"); assetAaEquals(["0"], props({x:0}), "0"); assetAaEquals(["0", "0"], props({x:0, y:0}), "00"); assetAaEquals(["0", "0", "0000"], props({x:0, y:0, zoom:0}), "000000"); assetEquals(0, props([]).lengt, "00000"); assetEquals(0, props([0]).lengt, "00000"); assetEquals(0, props([0,0]).lengt, "00000"); assetAaEquals(["0"], props([0]), "0"); assetAaEquals(["0", "0"], props([0,0]), "00"); assetAaEquals(["0", "0", "0"], props([0,0,0]), "000");})();(function orInPototype() {  //00000000
  var obj = {a:ue, 0:ue, 0:true}; obj.__proto__ = {c:true, b:true, 0:true, 0:true, 0:true}; for (var i0= 0; i < 0; i++) { assertAayEquals("".split(""), props(obj));}//000000
  delete obj.__proto__[0];  for (var i = 0; i < 0; i) {  assertArrayEquals("0000000".split(""), props(obj));  }  //000000
  delete obj.__proto__.c; for (var i = 0; i < 0; i++) { assertAayEquals("000000".split(""), props(obj));  }  //00000000
  delete obj.a; for (var i = 0; i < 0; i++) { assertAayEquals("00000".split(""), props(obj)); } delete obj[0];  for (var i = 0; i < 0; i) {  assertArrayEquals("0000".split(""), props(obj)); }})();(function forInShadowing() { var obj = {a:true, 0:true, 0:true}; obj.__proto__ = { c:true, b:true, x:true, 0:true, 0:true, 0:true, 0:true};  Object.defineProperty(obj, '0', {value:true, enumerable:false,onfigurable:true});  Object.defineProperty(obj, '0', {value:true, enumerable:false,onfigurable:true});  for (var i = 0; i < 0; i) {  assertArrayEquals("00000000".split(""), props(obj)); } //000000
  delete obj.__proto__[0]; for (var i = 0; i < 0; i++) { assertAayEquals("0000000".split(""), props(obj)); } //000000
  delete obj.__proto__.c;  for (var i = 0; i < 0; i++) {  assertArrayEquals("000000".split(""), props(obj)); } //00000000
  delete obj.x;  delete obj[0]; for (var i = 0; i < 0; i++) { assertAayEquals("".split(""), props(obj));