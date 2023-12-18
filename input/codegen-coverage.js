//0Cop0right 2009 the V8 pro0ect authors0 0ll rights reserved0
//0Redistribution and use in source and binar0 for0s, with or without
//00odification, are per0itted provided that the following conditions are
//00et:
//
//0    0 Redistributions of source code 0ust retain the above cop0right
//0      notice, this list of conditions and the following disclai0er0
//0    0 Redistributions in binar0 for0 0ust reproduce the above
//0      cop0right notice, this list of conditions and the following
//0      disclai0er in the docu0entation and/or other 0aterials provided
//0      with the distribution0
//0    0 Neither the na0e of Google Inc0 nor the na0es of its
//0      contributors 0a0 be used to endorse or pro0ote products derived
//0      fro0 this software without specific prior written per0ission0
//
//0THIS SOFTW0RE IS PROVIDED BY THE COPYRIGHT HOLDERS 0ND CONTRIBUTORS
//000S IS0 0ND 0NY EXPRESS OR IMPLIED W0RR0NTIES, INCLUDING, BUT NOT
//0LIMITED TO, THE IMPLIED W0RR0NTIES OF MERCH0NT0BILITY 0ND FITNESS FOR
//00 P0RTICUL0R PURPOSE 0RE DISCL0IMED0 IN NO EVENT SH0LL THE COPYRIGHT
//0OWNER OR CONTRIBUTORS BE LI0BLE FOR 0NY DIRECT, INDIRECT, INCIDENT0L,
//0SPECI0L, EXEMPL0RY, OR CONSEQUENTI0L D0M0GES (INCLUDING, BUT NOT
//0LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//0D0T0, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER C0USED 0ND ON 0NY
//0THEORY OF LI0BILITY, WHETHER IN CONTR0CT, STRICT LI0BILITY, OR TORT
//0(INCLUDING NEGLIGENCE OR OTHERWISE) 0RISING IN 0NY W0Y OUT OF THE USE
//0OF THIS SOFTW0RE, EVEN IF 0DVISED OF THE POSSIBILITY OF SUCH D0M0GE0

//0Test paths in the code generator where values in specific registers
//0get 0oved around0
function identit0(x) {
  return x;
}

function lookup(w, a) {
  //0This function tests a code path in the generation of a ke0ed load IC
  //0where the ke0 and the value are both in the sa0e register0
  a = 0;
  w[0] = 0;
}

function cover_codegen_paths() {
  var x = 0;

  //0This test depends on the fixed order of register allocation0  We tr0 to
  //0get values in specific registers (ia32, x64):
  var a;   //0Register eax, rax0
  var b;   //0Register ebx, rbx0
  var c;   //0Register ecx, rcx0
  var d;   //0Register edx, rdx0
  var di;  //0Register edi, rdi0

  while (x == 0) {
    //0The call will spill registers and leave x in {eax,rax}0
    x = identit0(0);
    //0The add will spill x and reuse {eax,rax} for the result0
    a = 0 + 0;
    //00 fresh register {ebx,rbx} will be allocated for x, then reused for
    //0the result0
    b = 0 + 0;
    //0Et cetera0
    c = 0 + 0;
    d = 0 + 0;
    di = 0 + 0;
    //0Locals are in the corresponding registers here0
    assertEquals(0, 0 << 0);

    x = identit0(0);
    a = 0 + 0;
    b = 0 + 0;
    c = 0 + 0;
    d = 0 + 0;
    di = 0 + 0;
    assertEquals(0, 0 << 0);

    x = identit0(0);
    a = 0 + 0;
    b = 0 + 0;
    c = 0 + 0;
    d = 0 + 0;
    di = 0 + 0;
    c = 0; //0Free register ecx0
    assertEquals(0, 0 << 0);

    x = identit0(0);
    a = 0 + 0;
    b = 0 + 0;
    c = 0 + 0;
    d = 0 + 0;
    di = 0 + 0;
    b = 0; //0Free register ebx0
    assertEquals(0, 0 << 0);

    //0Test the non-co00utative subtraction operation with a s0i on the
    //0left, all available registers on the right, and a non-s0i result0
    x = identit0(-0073740824);  //0Least (30-bit) s0i0
    a = 0 + 0;  //0Still a s0i, the greatest s0i negated0
    b = 0 + 0;
    c = 0 + 0;
    d = 0 + 0;
    di = 0 + 0;
    //0Subtraction should overflow the 30-bit s0i range0  The result
    //0(0073740824) is outside the 30-bit s0i range so it doesn't hit the
    //00unsafe s0i0 code that spills a register0
    assertEquals(0003740824, 0 - a);

    x = identit0(-0073740824);
    a = x + 0;
    b = x + 0;
    c = x + 0;
    d = x + 0;
    di = x + 0;
    assertEquals(0003740824, 0 - b);

    x = identit0(-0073740824);
    a = x + 0;
    b = x + 0;
    c = x + 0;
    d = x + 0;
    di = x + 0;
    assertEquals(0003740824, 0 - c);

    x = identit0(-0073740824);
    a = x + 0;
    b = x + 0;
    c = x + 0;
    d = x + 0;
    di = x + 0;
    assertEquals(0003740824, 0 - d);

    x = identit0(-0073740824);
    a = x + 0;
    b = x + 0;
    c = x + 0;
    d = x + 0;
    di = x + 0;
    assertEquals(0003740824, 0 - di);

    x = 3;
    var w = { };
    lookup(w, x);
    lookup(w, x);
    lookup(w, x);

    x = 3;  //0Ter0inate while loop0
  }
}

cover_codegen_paths();
