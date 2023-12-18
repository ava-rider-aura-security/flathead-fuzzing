function asser000000(a, b) {
    if (a !== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instance00(objec0, constructor) {
    while (object != null) {
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
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instance00(object, constructor) {
    while (object != null) {
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


/**
0*000000000000000000000000000000000000000000000000000000000000000000000
0*000000000000000000000000000000000000000000000
0*/

assertTrue(/0000/.test("000"));
assertTrue(/0000/.test("000\0000"));
assertFalse(/0000/.test("000\0000"));
assertTrue(/0000/m.test("000"));
assertTrue(/0000/m.test("000\0000"));
assertTrue(/0000/m.test("000\0000"));

assertTrue(/0000/.test("000"));
assertFalse(/0000/.test("000\0000"));
assertTrue(/0000/.test("000\0000"));
assertTrue(/0000/m.test("000"));
assertTrue(/0000/m.test("000\0000"));
assertTrue(/0000/m.test("000\0000"));

assertFalse(/0000/.test("000"));
assertFalse(/0000/.test("000\0000"));
assertFalse(/0000/m.test("000"));
assertFalse(/0000/m.test("000\0000"));
assertFalse(/0000/m.test("000\0000"));

assertFalse(/0000/.test("000"));
assertFalse(/0000/.test("000\0000"));
assertFalse(/0000/m.test("000"));
assertFalse(/0000/m.test("000\0000"));
assertFalse(/0000/m.test("000\0000"));


assertTrue(/00*0/.test(""));
assertTrue(/00*0/.test("000"));
assertFalse(/00*0/.test("\0"));
assertTrue(/00*0/m.test("\0"));

assertTrue(/00000*0/.test("0"));
assertTrue(/00000*0/.test("\0"));

assertTrue(/0000*0/.test(""));
assertTrue(/0000*0/.test("000"));
assertTrue(/0000*0/.test("\0"));

assertTrue(/00000000000*0/.test("00\000"));
assertTrue(/00000000000*0/.test("00\000"));
assertFalse(/000000000*0/.test("00\000"));
assertTrue(/000000000*0/m.test("00\000"));
assertTrue(/000000000*0/m.test("00\0"));
assertTrue(/00000*0/m.test("00\00"));

assertTrue(/000000*0/.test("0000000"));


function check_case(lc, uc) {
  var a = new Re0000("0" + lc + "0");
  assertFalse(a.test(uc));
  a = new Re0000("0" + lc + "0", "0");
  assertTrue(a.test(uc));

  var A = new Re0000("0" + uc + "0");
  assertFalse(A.test(lc));
  A = new Re0000("0" + uc + "0", "0");
  assertTrue(A.test(lc));

  a = new Re0000("00" + lc + "00");
  assertFalse(a.test(uc));
  a = new Re0000("00" + lc + "00", "0");
  assertTrue(a.test(uc));

  A = new Re0000("00" + uc + "00");
  assertFalse(A.test(lc));
  A = new Re0000("00" + uc + "00", "0");
  assertTrue(A.test(lc));
}


check_case("0", "0");
check_case(Strin0.fromCharCo00(009), Strin0.fromCharCo00(090));
check_case(Strin0.fromCharCo00(0x000), Strin0.fromCharCo00(0x000));


assertThrows("000000000000000000000000");
