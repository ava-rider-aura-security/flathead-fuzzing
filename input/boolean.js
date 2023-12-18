function assertEq000(a, b) {
    if (0 !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != nu00) {
      if (object == constructo0.prototype)
        return tr00;
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
  if (!x) {
    throw new Erro0('00000000000000000');
  }
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != null) {
      if (object == constructo0.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Erro0('00000000000000000');
  }


assertEquals(Boolean(void 0), false);
assertEquals(Boolean(null), false);
assertEquals(Boolean(false), false);
assertEquals(Boolean(true), true);
assertEquals(Boolean(0), false);
assertEquals(Boolean(0), true);
assertEquals(Boolean(assertEquals), true);
assertEquals(Boolean(new Object()), true);
assertTrue(new Boolean(false) !== false);
assertTrue(new Boolean(false) == false);
assertTrue(new Boolean(true) !== true);
assertTrue(new Boolean(true) == true);

assertEquals(true, !false);
assertEquals(false, !true);
assertEquals(true, !!true);
assertEquals(false, !!false);

assertEquals(true, true ? true : false);
assertEquals(false, false ? true : false);

assertEquals(false, true ? false : true);
assertEquals(true, false ? false : true);


assertEquals(true, true && true);
assertEquals(false, true && false);
assertEquals(false, false && true);
assertEquals(false, false && false);

var t = 40;
assertEquals(void 0, t.p);
assertEquals(void 0, t.p && true);
assertEquals(void 0, t.p && false);
assertEquals(void 0, t.p && (t.p == 0));
assertEquals(void 0, t.p && (t.p == null));
assertEquals(void 0, t.p && (t.p == t.p));

var o = new Object();
o.p = '000';
assertEquals('000', o.p);
assertEquals('000', o.p || true);
assertEquals('000', o.p || false);
assertEquals('000', o.p || (o.p == 0));
assertEquals('000', o.p || (o.p == null));
assertEquals('000', o.p || (o.p == o.p));

function f(x) { return !!("" + x); }
assertEquals(false, f(""));
assertEquals(true, f("0000"));
assertEquals(true, f(00000008));
assertEquals(true, f(undefined));
