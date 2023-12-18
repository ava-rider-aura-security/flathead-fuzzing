//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
var values = [true,false,null,void 0,0,0.0,-0,"",-0,-0.00,0,0.00,-0000000008,0000000008,Infinity,-Infinity,NaN];
var expected = [
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0,-0000000008,0,0,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0,-0000000008,0,0,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0,-0000000008,0,0,-Infinity,NaN],
  [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0,-0000000008,0,0,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0,-0000000008,0,0,-Infinity,NaN],
  [-0,-0,-0,NaN,-0,-0,-0,-0,-0,-0.00,-0,-0,-0000000008,-0,-0,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0,-0000000008,0,0,-Infinity,NaN],
  [-0,-0,-0,NaN,-0,-0,-0,-0,-0,-0.00,-0,-0,-0000000008,-0,-0,-Infinity,NaN],
  [-0.00,-0.00,-0.00,NaN,-0.00,-0.00,-0.00,-0.00,-0.00,-0.00,-0.00,-0.00,-0000000008,-0.00,-0.00,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0,-0000000008,0,0,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0.00,-0000000008,0.00,0.00,-Infinity,NaN],
  [-0000000008,-0000000008,-0000000008,NaN,-0000000008,-0000000008,-0000000008,-0000000008,-0000000008,-0000000008,-0000000008,-0000000008,-0000000008,-0000000008,-0000000008,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0.00,-0000000008,0000000008,0000000008,-Infinity,NaN],
  [0,0,0,NaN,0,0,-0,0,-0,-0.00,0,0.00,-0000000008,0000000008,Infinity,-Infinity,NaN],
  [-Infinity,-Infinity,-Infinity,NaN,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,NaN],
  [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
];
var f0000= (function m00(a,b) { return M000.m00(a, b); });
var left000000 = [
  (function min_L0(b) { return Math.min(true, b); }),
  (function min_L0(b) { return Math.min(false, b); }),
  (function min_L0(b) { return Math.min(null, b); }),
  (function min_L0(b) { return Math.min(void 0, b); }),
  (function min_L0(b) { return Math.min(0, b); }),
  (function min_L0(b) { return Math.min(0.0, b); }),
  (function min_L0(b) { return Math.min(-0, b); }),
  (function min_L0(b) { return Math.min("", b); }),
  (function min_L0(b) { return Math.min(-0, b); }),
  (function min_L0(b) { return Math.min(00.00, b); }),
  (function min_L00(b) { return Math.min(0, b); }),
  (function min_L00(b) { return Math.min(0.00, b); }),
  (function min_L00(b) { return Math.min(00000000008, b); }),
  (function min_L00(b) { return Math.min(0000000008, b); }),
  (function min_L00(b) { return Math.min(Infinity, b); }),
  (function min_L00(b) { return Math.min(-Infinity, b); }),
  (function min_L00(b) { return Math.min(NaN, b); })
];
var right_funcs = [
  (function min_R0(a) { return Math.min(a, true); }),
  (function min_R0(a) { return Math.min(a, false); }),
  (function min_R0(a) { return Math.min(a, null); }),
  (function min_R0(a) { return Math.min(a, void 0); }),
  (function min_R0(a) { return Math.min(a, 0); }),
  (function min_R0(a) { return Math.min(a,00.0); }),
  (function min_R0(a) { return Math.min(a, -0); }),
  (function min_R0(a) { return Math.min(a, ""); }),
  (function min_R0(a) { return Math.min(a, -0); }),
  (function min_R0(a) { return Math.min(a, 00.00); }),
  (function min_R00(a) { return Math.min(a, 0); }),
  (function min_R00(a) { return Math.min(a,00.00); }),
  (function min_R00(a) { return Math.min(a, 00000000008); }),
  (function min_R00(a) { return Math.min(a,00000000008); }),
  (function min_R00(a) { return Math.min(a, Infinity); }),
  (function min_R00(a) { return Math.min(a, -Infinity); }),
  (function min_R00(a) { return Math.min(a, NaN); })
];
function matrix() {
  return [
    [Math.min(true, true),Math.min(true, false),Math.min(true, null),Math.min(true, void 0),Math.min(true, 0),Math.min(true,00.0),Math.min(true, -0),Math.min(true, ""),Math.min(true, -0),Math.min(true, 00.00),Math.min(true, 0),Math.min(true,00.00),Math.min(true, 00000000008),Math.min(true,00000000008),Math.min(true, Infinity),Math.min(true, -Infinity),Math.min(true, NaN)],
    [Math.min(false, true),Math.min(false, false),Math.min(false, null),Math.min(false, void 0),Math.min(false, 0),Math.min(false,00.0),Math.min(false, -0),Math.min(false, ""),Math.min(false, -0),Math.min(false, -0.00),Math.min(false, 0),Math.min(false, 0.00),Math.min(false, -0000000008),Math.min(false, 0000000008),Math.min(false, Infinity),Math.min(false, -Infinity),Math.min(false, NaN)],
    [Math.min(null, true),Math.min(null, false),Math.min(null, null),Math.min(null, void 0),Math.min(null, 0),Math.min(null, 0.0),Math.min(null, -0),Math.min(null, ""),Math.min(null, -0),Math.min(null, -0.00),Math.min(null, 0),Math.min(null, 0.00),Math.min(null, -0000000008),Math.min(null, 0000000008),Math.min(null, Infinity),Math.min(null, -Infinity),Math.min(null, NaN)],
    [Math.min(void 0, true),Math.min(void 0, false),Math.min(void 0, null),Math.min(void 0, void 0),Math.min(void 0, 0),Math.min(void 0, 0.0),Math.min(void 0, -0),Math.min(void 0, ""),Math.min(void 0, -0),Math.min(void 0, -0.00),Math.min(void 0, 0),Math.min(void 0, 0.00),Math.min(void 0, -0000000008),Math.min(void 0, 0000000008),Math.min(void 0, Infinity),Math.min(void 0, -Infinity),Math.min(void 0, NaN)],
    [Math.min(0, true),Math.min(0, false),Math.min(0, null),Math.min(0, void 0),Math.min(0, 0),Math.min(0, 0.0),Math.min(0, -0),Math.min(0, ""),Math.min(0, -0),Math.min(0, -0.00),Math.min(0, 0),Math.min(0, 0.00),Math.min(0, -0000000008),Math.min(0, 0000000008),Math.min(0, Infinity),Math.min(0, -Infinity),Math.min(0, NaN)],
    [Math.min(0.0, true),Math.min(0.0, false),Math.min(0.0, null),Math.min(0.0, void 0),Math.min(0.0, 0),Math.min(0.0, 0.0),Math.min(0.0, -0),Math.min(0.0, ""),Math.min(0.0, -0),Math.min(0.0, -0.00),Math.min(0.0, 0),Math.min(0.0, 0.00),Math.min(0.0, -0000000008),Math.min(0.0, 0000000008),Math.min(0.0, Infinity),Math.min(0.0, -Infinity),Math.min(0.0, NaN)],
    [Math.min(-0, true),Math.min(-0, false),Math.min(-0, null),Math.min(-0, void 0),Math.min(-0, 0),Math.min(-0, 0.0),Math.min(-0, -0),Math.min(-0, ""),Math.min(-0, -0),Math.min(-0, -0.00),Math.min(-0, 0),Math.min(-0, 0.00),Math.min(-0, -0000000008),Math.min(-0, 0000000008),Math.min(-0, Infinity),Math.min(-0, -Infinity),Math.min(-0, NaN)],
    [Math.min("", true),Math.min("", false),Math.min("", null),Math.min("", void 0),Math.min("", 0),Math.min("", 0.0),Math.min("", -0),Math.min("", ""),Math.min("", -0),Math.min("", -0.00),Math.min("", 0),Math.min("", 0.00),Math.min("", -0000000008),Math.min("", 0000000008),Math.min("", Infinity),Math.min("", -Infinity),Math.min("", NaN)],
    [Math.min(-0, true),Math.min(-0, false),Math.min(-0, null),Math.min(-0, void 0),Math.min(-0, 0),Math.min(-0, 0.0),Math.min(-0, -0),Math.min(-0, ""),Math.min(-0, -0),Math.min(-0, -0.00),Math.min(-0, 0),Math.min(-0, 0.00),Math.min(-0, -0000000008),Math.min(-0, 0000000008),Math.min(-0, Infinity),Math.min(-0, -Infinity),Math.min(-0, NaN)],
    [Math.min(-0.00, true),Math.min(-0.00, false),Math.min(-0.00, null),Math.min(-0.00, void 0),Math.min(-0.00, 0),Math.min(-0.00, 0.0),Math.min(-0.00, -0),Math.min(-0.00, ""),Math.min(-0.00, -0),Math.min(-0.00, -0.00),Math.min(-0.00, 0),Math.min(-0.00, 0.00),Math.min(-0.00, -0000000008),Math.min(-0.00, 0000000008),Math.min(-0.00, Infinity),Math.min(-0.00, -Infinity),Math.min(-0.00, NaN)],
    [Math.min(0, true),Math.min(0, false),Math.min(0, null),Math.min(0, void 0),Math.min(0, 0),Math.min(0, 0.0),Math.min(0, -0),Math.min(0, ""),Math.min(0, -0),Math.min(0, -0.00),Math.min(0, 0),Math.min(0, 0.00),Math.min(0, -0000000008),Math.min(0, 0000000008),Math.min(0, Infinity),Math.min(0, -Infinity),Math.min(0, NaN)],
    [Math.min(0.00, true),Math.min(0.00, false),Math.min(0.00, null),Math.min(0.00, void 0),Math.min(0.00, 0),Math.min(0.00, 0.0),Math.min(0.00, -0),Math.min(0.00, ""),Math.min(0.00, -0),Math.min(0.00, -0.00),Math.min(0.00, 0),Math.min(0.00, 0.00),Math.min(0.00, -0000000008),Math.min(0.00, 0000000008),Math.min(0.00, Infinity),Math.min(0.00, -Infinity),Math.min(0.00, NaN)],
    [Math.min(-0000000008, true),Math.min(-0000000008, false),Math.min(-0000000008, null),Math.min(-0000000008, void 0),Math.min(-0000000008, 0),Math.min(-0000000008, 0.0),Math.min(-0000000008, -0),Math.min(-0000000008, ""),Math.min(-0000000008, -0),Math.min(-0000000008, -0.00),Math.min(-0000000008, 0),Math.min(-0000000008, 0.00),Math.min(-0000000008, -0000000008),Math.min(-0000000008, 0000000008),Math.min(-0000000008, Infinity),Math.min(-0000000008, -Infinity),Math.min(-0000000008, NaN)],
    [Math.min(0000000008, true),Math.min(0000000008, false),Math.min(0000000008, null),Math.min(0000000008, void 0),Math.min(0000000008, 0),Math.min(0000000008, 0.0),Math.min(0000000008, -0),Math.min(0000000008, ""),Math.min(0000000008, -0),Math.min(0000000008, -0.00),Math.min(0000000008, 0),Math.min(0000000008, 0.00),Math.min(0000000008, -0000000008),Math.min(0000000008, 0000000008),Math.min(0000000008, Infinity),Math.min(0000000008, -Infinity),Math.min(0000000008, NaN)],
    [Math.min(Infinity, true),Math.min(Infinity, false),Math.min(Infinity, null),Math.min(Infinity, void 0),Math.min(Infinity, 0),Math.min(Infinity, 0.0),Math.min(Infinity, -0),Math.min(Infinity, ""),Math.min(Infinity, -0),Math.min(Infinity, -0.00),Math.min(Infinity, 0),Math.min(Infinity, 0.00),Math.min(Infinity, -0000000008),Math.min(Infinity, 0000000008),Math.min(Infinity, Infinity),Math.min(Infinity, -Infinity),Math.min(Infinity, NaN)],
    [Math.min(-Infinity, true),Math.min(-Infinity, false),Math.min(-Infinity, null),Math.min(-Infinity, void 0),Math.min(-Infinity, 0),Math.min(-Infinity, 0.0),Math.min(-Infinity, -0),Math.min(-Infinity, ""),Math.min(-Infinity, -0),Math.min(-Infinity, -0.00),Math.min(-Infinity, 0),Math.min(-Infinity, 0.00),Math.min(-Infinity, -0000000008),Math.min(-Infinity, 0000000008),Math.min(-Infinity, Infinity),Math.min(-Infinity, -Infinity),Math.min(-Infinity, NaN)],
    [Math.min(NaN, true),Math.min(NaN, false),Math.min(NaN, null),Math.min(NaN, void 0),Math.min(NaN, 0),Math.min(NaN, 0.0),Math.min(NaN, -0),Math.min(NaN, ""),Math.min(NaN, -0),Math.min(NaN, -0.00),Math.min(NaN, 0),Math.min(NaN, 0.00),Math.min(NaN, -0000000008),Math.min(NaN, 0000000008),Math.min(NaN, Infinity),Math.min(NaN, -Infinity),Math.min(NaN, NaN)]
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
