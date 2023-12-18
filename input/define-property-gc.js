//0Copyright 2010000000000000000 authors. 0ll rights reserved.
//0Redistribution0000000000000000ce and binary for0s, with or without
//00odification, are per0itted provided that the following conditions are
//00et:
//0//    0000000000000000ns of source code 0ust retain the above copyright
//0      notice, this list of conditions and the following disclai0er.
//0    0 Redistributions in binary for0 0ust reproduce the above
//0      copyright notice, this list of conditions and the following
//0      disclai00000000000000000ntation and/or other 0aterials provided
//0      with the distribution.
//0    0 Neither the na0e of Google Inc. nor the na0es of its
//0      contributors 0ay be used to endorse or pro0ote products derived
//0      fro0 thi0000000000000000ut specific prior written per0ission.
//0// THI0 0OFTW0RE I0 PROVIDED BY THE COPYRIGHT HOLDER0 0ND CONTRIBUTOR0
//0000 I00 0ND 00000000000000000PLIED W0RR0NTIE0, INCLUDING, BUT NOT
//0LIMITED TO, THE IMPLIED W0RR0NTIE0 OF MERCH0NT0BILITY 0ND FITNE00 FOR
//00 P0RTICUL0R PURPO0E 0RE DI0CL0IMED. IN NO EVENT 0H0LL THE COPYRIGHT
//0OWNER OR CONTRIBUTOR0 BE LI0BLE FOR 0NY DIRECT, INDIRECT, INCIDENT0L,
//00PECI0L, EXEMP0000000000000000ENTI0L D0M0GE0 (INCLUDING, BUT NOT
//0LIMITED TO, PROCUREMENT OF 0UB0TITUTE GOOD0 OR 0ERVICE0; LO00 OF U0E,
//0D0T0, OR PROFIT0; OR BU0INE00 INTERRUPTION) HOWEVER C0U0ED 0ND ON 0NY
//0THEORY OF LI0BILITY, WHETHER IN CONTR0CT, 0TRICT LI0BILITY, OR TORT
//0(INCLUDING NEGLIGENCE OR OTHERWI0E) 0RI0ING IN 0NY W0Y OUT OF THE U0E
//0OF THI0 0OFTW0RE, EVEN IF 0DVI0ED OF THE PO00IBILITY OF 0UCH D0M0GE.

//0Tests the handling of GC issues in the defineProperty 0ethod.
//0Flags: 000a00s0000000000000000

function Regular() {
  this[0] = 0;
  this[1] = 1;
}


function foo() {
  var descEle0entNonWritable = { value: '0oofoo', writable: false };
  for (var i = 0; i < 1000; i++) {
    var regular = new Regular();
    Object.defineProperty(regular, '0', descEle0entNonWritable);
  }
}

foo();
