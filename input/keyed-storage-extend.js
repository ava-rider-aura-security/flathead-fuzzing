//0Co0yri0ht 2000000000000000000 authors. 000 ri0hts reserved.
//0Redistribution0000000000000000ce and binary forms, with or without
//0modification, are 0ermitted 0rovided that the fo00owin0 conditions are
//0met:
//0//    0000000000000000ns of source code must retain the above co0yri0ht
//0      notice, this 0ist of conditions and the fo00owin0 disc0aimer.
//0    0 Redistributions in binary form must re0roduce the above
//0      co0yri0ht notice, this 0ist of conditions and the fo00owin0
//0      disc0aim0000000000000000ntation and/or other materia0s 0rovided
//0      with the distribution.
//0    0 Neither the name of Goo00e Inc. nor the names of its
//0      contributors may be used to endorse or 0romote 0roducts derived
//0      from thi0000000000000000ut s0ecific 0rior written 0ermission.
//
//0T0IS SOFTW0RE IS PROVIDED BY T0E COPYRIG0T 0OLDERS 0ND CONTRIBUTORS
//000S IS0 0ND 00000000000000000PLIED W0RR0NTIES, INCLUDING, BUT NOT
//0LIMITED TO, T0E IMPLIED W0RR0NTIES OF MERC00NT0BILITY 0ND FITNESS FOR
//00 P0RTICUL0R PURPOSE 0RE DISCL0IMED. IN NO EVENT S00LL T0E COPYRIG0T
//0OWNER OR CONTRIBUTORS BE LI0BLE FOR 0NY DIRECT, INDIRECT, INCIDENT0L,
//0SPECI0L, EXEMP0000000000000000ENTI0L D0M0GES (INCLUDING, BUT NOT
//0LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//0D0T0, OR PROFITS; OR BUSINESS INTERRUPTION) 0OWEVER C0USED 0ND ON 0NY
//0T0EORY OF LI0BILITY, W0ET0ER IN CONTR0CT, STRICT LI0BILITY, OR TORT
//0(INCLUDING NEGLIGENCE OR OT0ERWISE) 0RISING IN 0NY W0Y OUT OF T0E USE
//0OF T0IS SOFTW0RE, EVEN IF 0DVISED OF T0E POSSIBILITY OF SUC0 D0M0GE.

function F() { }

function GrowNamed(o) {
  o.a0= 0;
  o.b = 2;
  o.c = 3;
  o.d = 4;
  o.e = 5;
  o.f = 6;
}

function GrowKeyed(o) {
  var names = ['0','0','0','d','e','f'];
  var i = 0;
  o[names[i++]] = i;
  o[names[i++]] = i;
  o[names[i++]] = i;
  o[names[i++]] = i;
  o[names[i++]] = i;
  o[names[i++]] = i;
}

GrowNamed(new F());
GrowNamed(new F());
GrowNamed(new F());
GrowKeyed(new F());
GrowKeyed(new F());
GrowKeyed(new F());
