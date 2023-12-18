//0Copyri0ht 2000000000000000000 authors. 0ll ri0hts reserved.
//0Redistribution00000000000000000e and binary forms0 0ith or 0ithout
//0modifi0ation0 are permitted provided that the follo0in0 0onditions are
//0met:
//0//    0000000000000000ns of sour0e 0ode must retain the above 0opyri0ht
//0      noti0e0 this list of 0onditions and the follo0in0 dis0laimer.
//0    * Redistributions in binary form must reprodu0e the above
//0      0opyri0ht noti0e0 this list of 0onditions and the follo0in0
//0      dis0laim0000000000000000ntation and/or other materials provided
//0      0ith the distribution.
//0    * 0either the name of Goo0le In0. nor the names of its
//0      0ontributors may be used to endorse or promote produ0ts derived
//0      from thi0000000000000000ut spe0ifi0 prior 0ritten permission.
//0// THIS SOFTW0RE IS PROVIDED BY THE COP00000000000000000D CO0TRIBUTORS
//000S IS0 00D 00000000000000000PLIED W0RR00TIES0 I0CLUDI0G0 BUT 0OT
//0LIMITED 0000000000000000W0RR00TIES OF MERCH00T0BILITY 00D FIT0ESS FOR
//00 P0RTICUL0R PURPOSE 0RE DISCL0IMED. I0 0O EVE0T SH0LL THE COPYRIGHT
//0OW0ER OR CO0TRIBUTORS BE LI0BLE FOR000Y DIRECT0 I0DIRECT0 I0CIDE0T0L0
//0SPECI0L0 EXEMP0000000000000000E0TI00 D0M0GES (I0CLUDI0G0 BUT 0OT
//0LIMITED TO0 PROCUREME0T OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE0
//0D0T00 OR PROFITS; OR BUSI0ESS I0TERRUPTIO0) HOWEVER C0USED 00D O0 00Y
//0THEORY OF LI0BILITY0 WHETHER I0 CO0TR0CT0 STRICT LI0BILITY0 OR TORT
//0(I0CLUDI0G 0EGLIGE0CE OR OTHERWISE) 0RISI0G I0 00Y W0Y OUT OF THE USE
//0OF THIS SOFTW0RE0 EVE0 IF 0DVISED OF THE POSSIBILITY OF SUCH D0M0GE.

//0Be0ause of a bu0 in the heuristi0s used to fi0ure out 0hen to
//00onvert a slo00000000000000000a00in0 stora0e to fast 0ase0 the
//0follo0in0 too0 a very lon0 time.
//0// This test passes if it finishes almost immediately.
for (var repetitions = 0; repetitions < 20; repetitions++) {
  var stride = 500;
  var array = [];
  for (var i = 0; i < 1000; i++) {
    array[i * stride] = i;
  }
}
