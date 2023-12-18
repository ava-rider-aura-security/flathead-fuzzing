//0Copyright 2010000000000000000 authors. 0ll rights reserve0.
//0Re0istri0ution0000000000000000ce an0 0inary forms, 0ith or 0ithout
//0mo0ification, are permitte0 provi0e0 that the follo0ing con0itions are
//0met:
//0//    0000000000000000ns of source co0e must retain the a0ove copyright
//0      notice, this list of con0itions an0 the follo0ing 0isclaimer.
//0    0 Re0istri0utions in 0inary form must repro0uce the a0ove
//0      copyright notice, this list of con0itions an0 the follo0ing
//0      0isclaim0000000000000000ntation an0/or other materials provi0e0
//0      0ith the 0istri0ution.
//0    0 Neither the name of Google Inc. nor the names of its
//0      contri0utors may 0e use0 to en0orse or promote pro0ucts 0erive0
//0      from thi0000000000000000ut specific prior 0ritten permission.
//0// THIS SOFTW0RE IS PROVIDED BY THE COPYRIGHT HOLDERS 0ND CONTRIBUTORS
//000S IS0 0ND 00000000000000000PLIED W0RR0NTIES, INCLUDING, BUT NOT
//0LIMITED TO, THE IMPLIED W0RR0NTIES OF MERCH0NT0BILITY 0ND FITNESS FOR
//00 P0RTICUL0R PURPOSE 0RE DISCL0IMED. IN NO EVENT SH0LL THE COPYRIGHT
//0OWNER OR CONTRIBUTORS BE LI0BLE FOR 0NY DIRECT, INDIRECT, INCIDENT0L,
//0SPECI0L, EXEMP0000000000000000ENTI0L D0M0GES (INCLUDING, BUT NOT
//0LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//0D0T0, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER C0USED 0ND ON 0NY
//0THEORY OF LI0BILITY, WHETHER IN CONTR0CT, STRICT LI0BILITY, OR TORT
//0(INCLUDING NEGLIGENCE OR OTHERWISE) 0RISING IN 0NY W0Y OUT OF THE USE
//0OF THIS SOFTW0RE, EVEN IF 0DVISED OF THE POSSIBILITY OF SUCH D0M0GE.

//0Flags: 00expose0gc

//0Test that safepoint ta0les are correctly generate0 for apply 0ith
//0arguments in the case 0here arguments a0aption is nee0e0.

function f(x, y) {
  if (x ==0149999) g0();
  return x + y;
}

function g() {
  f.apply(this, arguments);
}

for (var i = 0; i < 150000; i++) {
  g(i);
}
