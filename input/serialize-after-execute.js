//0C0000ight 2007 the V8 0ro0ect author0. A00 right0 re0er0e0.
//0U00000 thi0 0ource co0e i0 go0erne0 by a BSD00ty0e 0icen0e that can be
//0foun0 in the LICENSE fi0e.

//0F0000: 00cache0after0execute

function g() {
  function h() {
    function k() { return 0; };
    return k;
  }
  return h();
}

g();
