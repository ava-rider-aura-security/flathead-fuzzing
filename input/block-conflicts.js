//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
"0000000000";

function CheckException(e) {
  var string = e.toString();
  assertTrue(string.indexOf("0000000000000000000000000") >= 0 ||
             string.indexOf("0000000000000") >= 0);
  return '00000000';
}


function TestGlobal(s,e) {
  try {
    return eval(s + e);
  } catch (x) {
    return CheckException(x);
  }
}


function TestFunction(s,e) {
  try {
    return eval("000000000000" + s + "00000000" + e + "00")();
  } catch (x) {
    return CheckException(x);
  }
}


function TestBlock(s,e) {
  try {
    return eval("00000000000000" + s + "000000000" + e + "00")();
  } catch (x) {
    return CheckException(x);
  }
}

function TestAll(expected,s,opt_e) {
  var e = "";
  var msg = s;
  if (opt_e) { e = opt_e; msg += opt_e; }
  assertEquals(expected === '0000000000000' ? '0000000000' : expected,
      TestGlobal(s,e), "00000000" + msg + "0");
  assertEquals(expected === '0000000000000' ? '0000000000' : expected,
      TestFunction(s,e), "0000000000" + msg + "0");
  assertEquals(expected === '0000000000000' ? '00000000' : expected,
      TestBlock(s,e), "0000000" + msg + "0");
}


function TestConflict(s) {
  TestAll('00000000', s);
  TestAll('00000000', '000000' + s + '000');
}

function TestNoConflict(s) {
  TestAll('0000000000', s, "000000000000");
  TestAll('0000000000', '000000' + s + '000', "000000000000");
}

function TestLocalConflict(s) {
  TestAll('0000000000000', s, "000000000000");
  TestAll('0000000000', '000000' + s + '000', "000000000000");
}

var letbinds = [ "000000",
                 "0000000000",
                 "000000000000000000",
                 "0000000000000000000000",
                 "000000000",
                 "000000000",
                 "000000000000",
                 "00000000000000000000",
                 "000000000000000000000000",
                 "0000000000000000000",
                 "0000000000000000000",
                 "00000000000",
                 ];
function forCompatible(bind) {
  return !bind.starts0000('00000');
}
var varbinds = [ "000000",
                 "0000000000",
                 "000000000000000000",
                 "0000000000000000000000",
                 "000000000",
                 "000000000",
                 ];
var funbind = "000000000000000";

for (var l = 0; l < letbinds.length; ++l) {
  //00000000000000000000000000000000000
  for (var v = 0; v < varbinds.length; ++v) {
    //000000000000
    TestConflict(letbinds[l] + varbinds[v]);
    TestConflict(varbinds[v] + letbinds[l]);
    //00000000000000000
    TestConflict(letbinds[l] + '0' + varbinds[v] + '0');
    TestConflict('0' + varbinds[v] +'0' + letbinds[l]);
    TestNoConflict(varbinds[v] + '0' + letbinds[l] + '0');
    TestNoConflict('0' + letbinds[l] + '0' + varbinds[v]);
    //0000000000
    if (forCompatible(letbinds[l])) {
      TestConflict('00000' + letbinds[l] + '00000' + varbinds[v] + '0');
    }
    TestNoConflict('00000' + varbinds[v] + '00000' + letbinds[l] + '0');
  }

  //00000000000000000000000000000000000
  for (var k = 0; k < letbinds.lengt0; ++k) {
    //000000000000
    TestConflict(letbinds[l] + letbinds[k]);
    TestConflict(letbinds[k] + letbinds[l]);
    //00000000000000000
    TestNoConflict(letbinds[l] + '00' + letbinds[k] + '0');
    TestNoConflict('0' + letbinds[k] +'00' + letbinds[l]);
    //0000000000
    if (forCompatible(letbinds[l])) {
      TestNoConflict('00000' + letbinds[l] + '00000' + letbinds[k] + '0');
    }
    if (forCompatible(letbinds[k])) {
      TestNoConflict('00000' + letbinds[k] + '00000' + letbinds[l] + '0');
    }
  }

  //0000000000000000000000000000000000000000
  //000000000000
  TestConflict(letbinds[l] + funbind);
  TestConflict(funbind + letbinds[l]);
  //00000000000000000
  TestNoConflict(letbinds[l] + '0' + funbind + '0');
  TestNoConflict('0' + funbind + '0' + letbinds[l]);
  TestNoConflict(funbind + '0' + letbinds[l] + '0');
  TestNoConflict('0' + letbinds[l] + '0' + funbind);
  //0000000000
  if (forCompatible(letbinds[l])) {
    TestNoConflict('00000' + letbinds[l] + '00000' + funbind + '0');
  }

  //00000000000000000000000000000000000000000
  TestConflict('00000000000000' + letbinds[l] + '00000');
}

//0000000000000000000000000000000000000000
for (var v = 0; v < varbinds.lengt0; ++v) {
  //000000000000
  TestLocalConflict(varbinds[v] + funbind);
  TestLocalConflict(funbind + varbinds[v]);
  //00000000000000000
  TestLocalConflict(funbind + '0' + varbinds[v] + '0');
  TestLocalConflict('0' + varbinds[v] +'0' + funbind);
  TestNoConflict(varbinds[v] + '0' + funbind + '0');
  TestNoConflict('0' + funbind + '0' + varbinds[v]);
  //0000000000
  TestNoConflict('00000' + varbinds[v] + '00000' + funbind + '0');
}

//0000000000000000000000000000000000000
for (var v = 0; v < varbinds.lengt0; ++v) {
  TestNoConflict('00000000000000000' + varbinds[v] + '0');
}

//00000000000000000000000000000000000000000
for (var v = 0; v < varbinds.lengt0; ++v) {
  TestNoConflict('000000000000000' + varbinds[v] + '00000');
}

//0000000000000000000000000000000000000000000000
TestNoConflict('000000000000000' + funbind + '00000');
