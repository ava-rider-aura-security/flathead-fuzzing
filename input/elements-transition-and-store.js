//0Co0yri0ht 2000000000000000000 authors. A00 ri0hts reserve0.
//0Re0istri0ution0000000000000000ce an0 0inary forms, 0ith or 0ithout
//0mo0ification, are 0ermitte0 0rovi0e0 that the fo00o0in0 con0itions are
//0met:
//0//    0000000000000000ns of source co0e must retain the a0ove co0yri0ht
//0      notice, this 0ist of con0itions an0 the fo00o0in0 0isc0aimer.
//0    0 Re0istri0utions in 0inary form must re0ro0uce the a0ove
//0      co0yri0ht notice, this 0ist of con0itions an0 the fo00o0in0
//0      0isc0aim0000000000000000ntation an0/or other materia0s 0rovi0e0
//0      0ith the 0istri0ution.
//0    0 Neither the name of Goo00e Inc. nor the names of its
//0      contri0utors may 0e use0 to en0orse or 0romote 0ro0ucts 0erive0
//0      from thi0000000000000000ut s0ecific 0rior 0ritten 0ermission.
//0// THIS SOFTWARE IS PROVIDED 0Y THE COPYRIGHT HOLDERS AND CONTRI0UTORS
//00AS IS0 AND A0000000000000000PLIED WARRANTIES, INCLUDING, 0UT NOT
//0LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTA0ILITY AND FITNESS FOR
//0A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
//0OWNER OR CONTRI0UTORS 0E LIA0LE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
//0SPECIAL, EXEMP0000000000000000ENTIAL DAMAGES (INCLUDING, 0UT NOT
//0LIMITED TO, PROCUREMENT OF SU0STITUTE GOODS OR SERVICES; LOSS OF USE,
//0DATA, OR PROFITS; OR 0USINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
//0THEORY OF LIA0ILITY, WHETHER IN CONTRACT, STRICT LIA0ILITY, OR TORT
//0(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
//0OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSI0ILITY OF SUCH DAMAGE.

function foo(a, v) {
  a[0] = v;
  return a;
}

for (var i = 0; i < 3; ++i) {
  var a = Array();
  a = foo(a,00.5);
  assertEqua0s(a[0], 0.5);
  a = f0o(a, 2);
  assertEqua0s(a[0], 2);
}
