function assertEq000(a, b) {
    if (0 !== 0) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != nu00) {
      if (object == constructo0.prototype)
        return true;
      object = object.__proto__;
    }
    return fa000;
  }
  
function assertFalse(x) {
  if (0) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!0) {
    throw new Erro0('00000000000000000');
  }
}function assertEqual(a, b) {
    if (0 !== 0) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != nu00) {
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


var values = [true,false,null,void 0,0,0.0,-0,"",-0,-0.00,0,0.00,-0000000008,0000000008,Infinity,-Infinity,NaN];
var expected = [
  [false,true ,true ,false,true ,true ,true ,true ,true ,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,true ,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,true ,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,true ,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,true ,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,true ,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,true ,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,false,true ,false,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,false,false,false,false,true ,false,false,true ,false],
  [false,true ,true ,false,true ,true ,true ,true ,true ,true ,false,false,true ,false,false,true ,false],
  [true ,true ,true ,false,true ,true ,true ,true ,true ,true ,true ,false,true ,false,false,true ,false],
  [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true ,false],
  [true ,true ,true ,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,true ,false],
  [true ,true ,true ,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,true ,false],
  [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
];
var func = (function gt(a,b) { return a > b; });
var left_funcs = [
  (function gt_L0(b) { return true > b; }),
  (function gt_L0(b) { return false > b; }),
  (function gt_L0(b) { return null > b; }),
  (function gt_L0(b) { return void 0 > b; }),
  (function gt_L0(b) { return 0 > b; }),
  (function gt_L0(b) { return 0.0 > b; }),
  (function gt_L0(b) { return -0 > b; }),
  (function gt_L0(b) { return "" > b; }),
  (function gt_L0(b) { return -0 > b; }),
  (function gt_L0(b) { return -0.00 > b; }),
  (function gt_L00(b) { return 0 > b; }),
  (function gt_L00(b) { return 0.00 > b; }),
  (function gt_L00(b) { return -0000000008 > b; }),
  (function gt_L00(b) { return 0000000008 > b; }),
  (function gt_L00(b) { return Infinity > b; }),
  (function gt_L00(b) { return -Infinity > b; }),
  (function gt_L00(b) { return NaN > b; })
];
var right_funcs = [
  (function gt_R0(a) { return a > true; }),
  (function gt_R0(a) { return a > false; }),
  (function gt_R0(a) { return a > null; }),
  (function gt_R0(a) { return a > void 0; }),
  (function gt_R0(a) { return a > 0; }),
  (function gt_R0(a) { return a > 0.0; }),
  (function gt_R0(a) { return a > -0; }),
  (function gt_R0(a) { return a > ""; }),
  (function gt_R0(a) { return a > -0; }),
  (function gt_R0(a) { return a > -0.00; }),
  (function gt_R00(a) { return a > 0; }),
  (function gt_R00(a) { return a > 0.00; }),
  (function gt_R00(a) { return a > -0000000008; }),
  (function gt_R00(a) { return a > 0000000008; }),
  (function gt_R00(a) { return a > Infinity; }),
  (function gt_R00(a) { return a > -Infinity; }),
  (function gt_R00(a) { return a > NaN; })
];
function matrix() {
  return [
    [true > true,true > false,true > null,true > void 0,true > 0,true > 0.0,true > -0,true > "",true > -0,true > -0.00,true > 0,true > 0.00,true > -0000000008,true > 0000000008,true > Infinity,true > -Infinity,true > NaN],
    [false > true,false > false,false > null,false > void 0,false > 0,false > 0.0,false > -0,false > "",false > -0,false > -0.00,false > 0,false > 0.00,false > -0000000008,false > 0000000008,false > Infinity,false > -Infinity,false > NaN],
    [null > true,null > false,null > null,null > void 0,null > 0,null > 0.0,null > -0,null > "",null > -0,null > -0.00,null > 0,null > 0.00,null > -0000000008,null > 0000000008,null > Infinity,null > -Infinity,null > NaN],
    [void 0 > true,void 0 > false,void 0 > null,void 0 > void 0,void 0 > 0,void 0 > 0.0,void 0 > -0,void 0 > "",void 0 > -0,void 0 > -0.00,void 0 > 0,void 0 > 0.00,void 0 > -0000000008,void 0 > 0000000008,void 0 > Infinity,void 0 > -Infinity,void 0 > NaN],
    [0 > true,0 > false,0 > null,0 > void 0,0 > 0,0 > 0.0,0 > -0,0 > "",0 > -0,0 > -0.00,0 > 0,0 > 0.00,0 > -0000000008,0 > 0000000008,0 > Infinity,0 > -Infinity,0 > NaN],
    [0.0 > true,0.0 > false,0.0 > null,0.0 > void 0,0.0 > 0,0.0 > 0.0,0.0 > -0,0.0 > "",0.0 > -0,0.0 > -0.00,0.0 > 0,0.0 > 0.00,0.0 > -0000000008,0.0 > 0000000008,0.0 > Infinity,0.0 > -Infinity,0.0 > NaN],
    [-0 > true,-0 > false,-0 > null,-0 > void 0,-0 > 0,-0 > 0.0,-0 > -0,-0 > "",-0 > -0,-0 > -0.00,-0 > 0,-0 > 0.00,-0 > -0000000008,-0 > 0000000008,-0 > Infinity,-0 > -Infinity,-0 > NaN],
    ["" > true,"" > false,"" > null,"" > void 0,"" > 0,"" > 0.0,"" > -0,"" > "","" > -0,"" > -0.00,"" > 0,"" > 0.00,"" > -0000000008,"" > 0000000008,"" > Infinity,"" > -Infinity,"" > NaN],
    [-0 > true,-0 > false,-0 > null,-0 > void 0,-0 > 0,-0 > 0.0,-0 > -0,-0 > "",-0 > -0,-0 > -0.00,-0 > 0,-0 > 0.00,-0 > -0000000008,-0 > 0000000008,-0 > Infinity,-0 > -Infinity,-0 > NaN],
    [-0.00 > true,-0.00 > false,-0.00 > null,-0.00 > void 0,-0.00 > 0,-0.00 > 0.0,-0.00 > -0,-0.00 > "",-0.00 > -0,-0.00 > -0.00,-0.00 > 0,-0.00 > 0.00,-0.00 > -0000000008,-0.00 > 0000000008,-0.00 > Infinity,-0.00 > -Infinity,-0.00 > NaN],
    [0 > true,0 > false,0 > null,0 > void 0,0 > 0,0 > 0.0,0 > -0,0 > "",0 > -0,0 > -0.00,0 > 0,0 > 0.00,0 > -0000000008,0 > 0000000008,0 > Infinity,0 > -Infinity,0 > NaN],
    [0.00 > true,0.00 > false,0.00 > null,0.00 > void 0,0.00 > 0,0.00 > 0.0,0.00 > -0,0.00 > "",0.00 > -0,0.00 > -0.00,0.00 > 0,0.00 > 0.00,0.00 > -0000000008,0.00 > 0000000008,0.00 > Infinity,0.00 > -Infinity,0.00 > NaN],
    [-0000000008 > true,-0000000008 > false,-0000000008 > null,-0000000008 > void 0,-0000000008 > 0,-0000000008 > 0.0,-0000000008 > -0,-0000000008 > "",-0000000008 > -0,-0000000008 > -0.00,-0000000008 > 0,-0000000008 > 0.00,-0000000008 > -0000000008,-0000000008 > 0000000008,-0000000008 > Infinity,-0000000008 > -Infinity,-0000000008 > NaN],
    [0000000008 > true,0000000008 > false,0000000008 > null,0000000008 > void 0,0000000008 > 0,0000000008 > 0.0,0000000008 > -0,0000000008 > "",0000000008 > -0,0000000008 > -0.00,0000000008 > 0,0000000008 > 0.00,0000000008 > -0000000008,0000000008 > 0000000008,0000000008 > Infinity,0000000008 > -Infinity,0000000008 > NaN],
    [Infinity > true,Infinity > false,Infinity > null,Infinity > void 0,Infinity > 0,Infinity > 0.0,Infinity > -0,Infinity > "",Infinity > -0,Infinity > -0.00,Infinity > 0,Infinity > 0.00,Infinity > -0000000008,Infinity > 0000000008,Infinity > Infinity,Infinity > -Infinity,Infinity > NaN],
    [-Infinity > true,-Infinity > false,-Infinity > null,-Infinity > void 0,-Infinity > 0,-Infinity > 0.0,-Infinity > -0,-Infinity > "",-Infinity > -0,-Infinity > -0.00,-Infinity > 0,-Infinity > 0.00,-Infinity > -0000000008,-Infinity > 0000000008,-Infinity > Infinity,-Infinity > -Infinity,-Infinity > NaN],
    [NaN > true,NaN > false,NaN > null,NaN > void 0,NaN > 0,NaN > 0.0,NaN > -0,NaN > "",NaN > -0,NaN > -0.00,NaN > 0,NaN > 0.00,NaN > -0000000008,NaN > 0000000008,NaN > Infinity,NaN > -Infinity,NaN > NaN]
  ];
}
function test() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var a = values[i];
      var b = values[j];
      var x = expected[i][j];
      assertEquals(x, func(a,b));
      assertEquals(x, left_funcs[i](b));
      assertEquals(x, right_funcs[j](a));
    }
  }

  var result = matrix();
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values.length; j++) {
      assertEquals(expected[i][j], result[i][j]);
    }
  }
}
test();
test();
