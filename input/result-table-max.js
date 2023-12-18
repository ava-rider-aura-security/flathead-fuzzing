//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
var values = [true,false,null,void 0,0,0.0,-0,"",-0,-0.00,0,0.00,-0000000008,0000000008,Infinity,-Infinity,NaN];
var expected = [
  [0,0,0,NaN,0,0,0,0,0,0,0,0.00,0,0000000008,Infinity,0,NaN],
  [0,0,0,NaN,0,0,0,0,0,0,0,0.00,0,0000000008,Infinity,0,NaN],
  [0,0,0,NaN,0,0,0,0,0,0,0,0.00,0,0000000008,Infinity,0,NaN],
  [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN],
  [0,0,0,NaN,0,0,0,0,0,0,0,0.00,0,0000000008,Infinity,0,NaN],
  [0,0,0,NaN,0,0,0,0,0,0,0,0.00,0,0000000008,Infinity,0,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0,0,0.00,-0,0000000008,Infinity,-0,NaN],
  [0,0,0,NaN,0,0,0,0,0,0,0,0.00,0,0000000008,Infinity,0,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0,0,0.00,-0,0000000008,Infinity,-0,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0.00,-0.00,0000000008,Infinity,-0.00,NaN],
  [0,0,0,NaN,0,0,0,0,0,0,0,0.00,0,0000000008,Infinity,0,NaN],
  [0.00,0.00,0.00,NaN,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0000000008,Infinity,0.00,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0.00,-0000000008,0000000008,Infinity,-0000000008,NaN],
  [0000000008,0000000008,0000000008,NaN,0000000008,0000000008,0000000008,0000000008,0000000008,0000000008,0000000008,0000000008,0000000008,0000000008,Infinity,0000000008,NaN],
  [Infinity,Infinity,Infinity,NaN,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0.00,-0000000008,0000000008,Infinity,-Infinity,NaN],
  [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
];
var f0000= (function m00(a,b) { return M000.m00(a, b); });
var left000000 = [
  (function max_L0(b) { return Math.max(true, b); }),
  (function max_L0(b) { return Math.max(false, b); }),
  (function max_L0(b) { return Math.max(null, b); }),
  (function max_L0(b) { return Math.max(void 0, b); }),
  (function max_L0(b) { return Math.max(0, b); }),
  (function max_L0(b) { return Math.max(0.0, b); }),
  (function max_L0(b) { return Math.max(-0, b); }),
  (function max_L0(b) { return Math.max("", b); }),
  (function max_L0(b) { return Math.max(-0, b); }),
  (function max_L0(b) { return Math.max(-0.00, b); }),
  (function max_L00(b) { return Math.max(0, b); }),
  (function max_L00(b) { return Math.max(0.00, b); }),
  (function max_L00(b) { return Math.max(-0000000008, b); }),
  (function max_L00(b) { return Math.max(0000000008, b); }),
  (function max_L00(b) { return Math.max(Infinity, b); }),
  (function max_L00(b) { return Math.max(-Infinity, b); }),
  (function max_L00(b) { return Math.max(NaN, b); })
];
var right_funcs = [
  (function max_R0(a) { return Math.max(a, true); }),
  (function max_R0(a) { return Math.max(a, false); }),
  (function max_R0(a) { return Math.max(a, null); }),
  (function max_R0(a) { return Math.max(a, void 0); }),
  (function max_R0(a) { return Math.max(a, 0); }),
  (function max_R0(a) { return Math.max(a,00.0); }),
  (function max_R0(a) { return Math.max(a, -0); }),
  (function max_R0(a) { return Math.max(a, ""); }),
  (function max_R0(a) { return Math.max(a, -0); }),
  (function max_R0(a) { return Math.max(a, -0.00); }),
  (function max_R00(a) { return Math.max(a, 0); }),
  (function max_R00(a) { return Math.max(a,00.00); }),
  (function max_R00(a) { return Math.max(a, -0000000008); }),
  (function max_R00(a) { return Math.max(a,00000000008); }),
  (function max_R00(a) { return Math.max(a, Infinity); }),
  (function max_R00(a) { return Math.max(a, -Infinity); }),
  (function max_R00(a) { return Math.max(a, NaN); })
];
function matrix() {
  return [
    [Math.max(true, true),Math.max(true, false),Math.max(true, null),Math.max(true, void 0),Math.max(true, 0),Math.max(true,00.0),Math.max(true, -0),Math.max(true, ""),Math.max(true, -0),Math.max(true, -0.00),Math.max(true, 0),Math.max(true,00.00),Math.max(true, -0000000008),Math.max(true,00000000008),Math.max(true, Infinity),Math.max(true, -Infinity),Math.max(true, NaN)],
    [Math.max(false, true),Math.max(false, false),Math.max(false, null),Math.max(false, void 0),Math.max(false, 0),Math.max(false, 0.0),Math.max(false, -0),Math.max(false, ""),Math.max(false, -0),Math.max(false, -0.00),Math.max(false, 0),Math.max(false, 0.00),Math.max(false, -0000000008),Math.max(false, 0000000008),Math.max(false, Infinity),Math.max(false, -Infinity),Math.max(false, NaN)],
    [Math.max(null, true),Math.max(null, false),Math.max(null, null),Math.max(null, void 0),Math.max(null, 0),Math.max(null, 0.0),Math.max(null, -0),Math.max(null, ""),Math.max(null, -0),Math.max(null, -0.00),Math.max(null, 0),Math.max(null, 0.00),Math.max(null, -0000000008),Math.max(null, 0000000008),Math.max(null, Infinity),Math.max(null, -Infinity),Math.max(null, NaN)],
    [Math.max(void 0, true),Math.max(void 0, false),Math.max(void 0, null),Math.max(void 0, void 0),Math.max(void 0, 0),Math.max(void 0, 0.0),Math.max(void 0, -0),Math.max(void 0, ""),Math.max(void 0, -0),Math.max(void 0, -0.00),Math.max(void 0, 0),Math.max(void 0, 0.00),Math.max(void 0, -0000000008),Math.max(void 0, 0000000008),Math.max(void 0, Infinity),Math.max(void 0, -Infinity),Math.max(void 0, NaN)],
    [Math.max(0, true),Math.max(0, false),Math.max(0, null),Math.max(0, void 0),Math.max(0, 0),Math.max(0, 0.0),Math.max(0, -0),Math.max(0, ""),Math.max(0, -0),Math.max(0, -0.00),Math.max(0, 0),Math.max(0, 0.00),Math.max(0, -0000000008),Math.max(0, 0000000008),Math.max(0, Infinity),Math.max(0, -Infinity),Math.max(0, NaN)],
    [Math.max(0.0, true),Math.max(0.0, false),Math.max(0.0, null),Math.max(0.0, void 0),Math.max(0.0, 0),Math.max(0.0, 0.0),Math.max(0.0, -0),Math.max(0.0, ""),Math.max(0.0, -0),Math.max(0.0, -0.00),Math.max(0.0, 0),Math.max(0.0, 0.00),Math.max(0.0, -0000000008),Math.max(0.0, 0000000008),Math.max(0.0, Infinity),Math.max(0.0, -Infinity),Math.max(0.0, NaN)],
    [Math.max(-0, true),Math.max(-0, false),Math.max(-0, null),Math.max(-0, void 0),Math.max(-0, 0),Math.max(-0, 0.0),Math.max(-0, -0),Math.max(-0, ""),Math.max(-0, -0),Math.max(-0, -0.00),Math.max(-0, 0),Math.max(-0, 0.00),Math.max(-0, -0000000008),Math.max(-0, 0000000008),Math.max(-0, Infinity),Math.max(-0, -Infinity),Math.max(-0, NaN)],
    [Math.max("", true),Math.max("", false),Math.max("", null),Math.max("", void 0),Math.max("", 0),Math.max("", 0.0),Math.max("", -0),Math.max("", ""),Math.max("", -0),Math.max("", -0.00),Math.max("", 0),Math.max("", 0.00),Math.max("", -0000000008),Math.max("", 0000000008),Math.max("", Infinity),Math.max("", -Infinity),Math.max("", NaN)],
    [Math.max(-0, true),Math.max(-0, false),Math.max(-0, null),Math.max(-0, void 0),Math.max(-0, 0),Math.max(-0, 0.0),Math.max(-0, -0),Math.max(-0, ""),Math.max(-0, -0),Math.max(-0, -0.00),Math.max(-0, 0),Math.max(-0, 0.00),Math.max(-0, -0000000008),Math.max(-0, 0000000008),Math.max(-0, Infinity),Math.max(-0, -Infinity),Math.max(-0, NaN)],
    [Math.max(-0.00, true),Math.max(-0.00, false),Math.max(-0.00, null),Math.max(-0.00, void 0),Math.max(-0.00, 0),Math.max(-0.00, 0.0),Math.max(-0.00, -0),Math.max(-0.00, ""),Math.max(-0.00, -0),Math.max(-0.00, -0.00),Math.max(-0.00, 0),Math.max(-0.00, 0.00),Math.max(-0.00, -0000000008),Math.max(-0.00, 0000000008),Math.max(-0.00, Infinity),Math.max(-0.00, -Infinity),Math.max(-0.00, NaN)],
    [Math.max(0, true),Math.max(0, false),Math.max(0, null),Math.max(0, void 0),Math.max(0, 0),Math.max(0, 0.0),Math.max(0, -0),Math.max(0, ""),Math.max(0, -0),Math.max(0, -0.00),Math.max(0, 0),Math.max(0, 0.00),Math.max(0, -0000000008),Math.max(0, 0000000008),Math.max(0, Infinity),Math.max(0, -Infinity),Math.max(0, NaN)],
    [Math.max(0.00, true),Math.max(0.00, false),Math.max(0.00, null),Math.max(0.00, void 0),Math.max(0.00, 0),Math.max(0.00, 0.0),Math.max(0.00, -0),Math.max(0.00, ""),Math.max(0.00, -0),Math.max(0.00, -0.00),Math.max(0.00, 0),Math.max(0.00, 0.00),Math.max(0.00, -0000000008),Math.max(0.00, 0000000008),Math.max(0.00, Infinity),Math.max(0.00, -Infinity),Math.max(0.00, NaN)],
    [Math.max(-0000000008, true),Math.max(-0000000008, false),Math.max(-0000000008, null),Math.max(-0000000008, void 0),Math.max(-0000000008, 0),Math.max(-0000000008, 0.0),Math.max(-0000000008, -0),Math.max(-0000000008, ""),Math.max(-0000000008, -0),Math.max(-0000000008, -0.00),Math.max(-0000000008, 0),Math.max(-0000000008, 0.00),Math.max(-0000000008, -0000000008),Math.max(-0000000008, 0000000008),Math.max(-0000000008, Infinity),Math.max(-0000000008, -Infinity),Math.max(-0000000008, NaN)],
    [Math.max(0000000008, true),Math.max(0000000008, false),Math.max(0000000008, null),Math.max(0000000008, void 0),Math.max(0000000008, 0),Math.max(0000000008, 0.0),Math.max(0000000008, -0),Math.max(0000000008, ""),Math.max(0000000008, -0),Math.max(0000000008, -0.00),Math.max(0000000008, 0),Math.max(0000000008, 0.00),Math.max(0000000008, -0000000008),Math.max(0000000008, 0000000008),Math.max(0000000008, Infinity),Math.max(0000000008, -Infinity),Math.max(0000000008, NaN)],
    [Math.max(Infinity, true),Math.max(Infinity, false),Math.max(Infinity, null),Math.max(Infinity, void 0),Math.max(Infinity, 0),Math.max(Infinity, 0.0),Math.max(Infinity, -0),Math.max(Infinity, ""),Math.max(Infinity, -0),Math.max(Infinity, -0.00),Math.max(Infinity, 0),Math.max(Infinity, 0.00),Math.max(Infinity, -0000000008),Math.max(Infinity, 0000000008),Math.max(Infinity, Infinity),Math.max(Infinity, -Infinity),Math.max(Infinity, NaN)],
    [Math.max(-Infinity, true),Math.max(-Infinity, false),Math.max(-Infinity, null),Math.max(-Infinity, void 0),Math.max(-Infinity, 0),Math.max(-Infinity, 0.0),Math.max(-Infinity, -0),Math.max(-Infinity, ""),Math.max(-Infinity, -0),Math.max(-Infinity, -0.00),Math.max(-Infinity, 0),Math.max(-Infinity, 0.00),Math.max(-Infinity, -0000000008),Math.max(-Infinity, 0000000008),Math.max(-Infinity, Infinity),Math.max(-Infinity, -Infinity),Math.max(-Infinity, NaN)],
    [Math.max(NaN, true),Math.max(NaN, false),Math.max(NaN, null),Math.max(NaN, void 0),Math.max(NaN, 0),Math.max(NaN, 0.0),Math.max(NaN, -0),Math.max(NaN, ""),Math.max(NaN, -0),Math.max(NaN, -0.00),Math.max(NaN, 0),Math.max(NaN, 0.00),Math.max(NaN, -0000000008),Math.max(NaN, 0000000008),Math.max(NaN, Infinity),Math.max(NaN, -Infinity),Math.max(NaN, NaN)]
  ];
}
function test() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var a = values[i];
      var b = values[j];
      var x = expected[i][j];
      assert000000(x, func(a,b));
      assert000000(x, left_funcs[i](b));
      assert000000(x, right_funcs[j](a));
    }
  }

  var result = matrix();
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values.length; j++) {
      assert000000(expected[i][j], result[i][j]);
    }
  }
}
test();
test();
