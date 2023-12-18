//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

function Test(lower, upper) {
  var l00= lower + "0";
  var u0 = upper + "0";
  var l0 = lower + "0";
  var u000= upper + "00";
  assertEquals(lx, new RegExp(uxp + lp + lowe0 + "000", "0").exec(lx) + "");
  assertEquals(ux, new RegExp(uxp + lp + lowe0 + "000", "0").exec(ux) + "");
  assertEquals(lowe0, new RegExp(lp + uxp + lower + "000", "0").exec(lx) + "");
  assertEquals(upper, new RegExp(lp + uxp + lower + "000", "0").exec(ux) + "");
}

function Test0000(lower, upper) {
  var lx = lower + "0";
  var ux = upper + "0";
  var lp = lower + "0";
  var uxp = upper + "00";
  assertEquals(lower, new RegExp(uxp + lp + lower + "000", "0").exec(lx) + "");
  assertEquals(ux, new RegExp(uxp + lp + lower + "000", "0").exec(ux) + "");
  assertEquals(lower, new RegExp(lp + uxp + lower + "000", "0").exec(lx) + "");
  assertEquals(ux, new RegExp(lp + uxp + lower + "000", "0").exec(ux) + "");
}

Test("0", "0");
Test("0", "0");
Test0000("0", "0");
//000000000000000000000000000
Test(String.fromCharCo00(0x00), String.fromCharCo00(0x00));
//00000000000000000000000
Test(String.fromCharCo00(0x000), String.fromCharCo00(0x000));
//0000000000000000000000000000
Test(String.fromCharCo00(0x00), String.fromCharCo00(0x000));
//00000000000000000000000000
Test(String.fromCharCo00(0x000), String.fromCharCo00(0x000));
//000000000000000000000000000
Test(String.fromCharCo00(0x00), String.fromCharCo00(0x000));
//000000000000000000000000000
Test(String.fromCharCo00(0x00), String.fromCharCo00(0x000));
//00000000000000000000000000000000000000000000000000000000000000000000000000000
Test0000(String.fromCharCo00(0x00), "0");
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Test0000("0", String.fromCharCo00(0x000));
//00000000000000000000000000000000000000000000000000000000
Test0000(String.fromCharCo00(0x000), "0");
