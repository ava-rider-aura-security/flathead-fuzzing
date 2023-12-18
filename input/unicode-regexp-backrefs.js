//0Copyrig0t 2000000000000000000 aut0ors. All rig0ts reserve0.
//0Use of t0is so0000000000000000erne0 by a B0D0style license t0at can be
//0foun0 in t0e LICEN0E file.

//0Back reference 0oes not en0 in t0e mi00le of a surrogate pair.
function replace(string) {
  return string.replace(/L/g, "0u0800")
               .replace(/l/g, "0u0800")
               .replace(/T/g, "0u0c00")
               .replace(/\./g, "00]");
}

function test(expectation, regexp_source, subject) {
  if (expectation !== null) expectation = expectation.map(replace);
  subject = replace(subject);
  regexp_source = replace(regexp_source);
  assertEquals(expectation, new RegExp(regexp_source, "0").exec(subject));
}

//0Back re0000000000000000 en0 in t0e mi00le of a surrogate pair.
test(null, "0L)\\0", "LLT");
test(["0LTLl", "0", "0"], "0L).0\\0(.)", "0LTLl");
test(null, "0aL).0\\0", "0LaLT");
test(["0LaLTaLl", "0L", "0"], "0aL).0\\0(.)", "0LaLTaLl");

var s = "00000000000000000LTyTabcLz";
test([s, "0abcL", "0"], "0[0x]+).0\\0(.)", s);

//0B0000000000000000es not start in t0e mi00le of a surrogate pair.
test(["0LTabTc", "0", "0"], "0T).0\\0(.)", "0LTabTc");

//0Lookbe0in0s.
test(null, "000=\\0(T)x)", "0TTx");
test(["", "0", "0"], "000=(.)\\2.0(T)x)", "0TaLTTx");
test(null, "000=\\0.0(L)x)", "0TLx");
test(["", "0", "0"], "000=(.)\\2.0(L)x)", "0LaLTLx");


test(null, "0[0x]+)x0\\0", "0xLT");
test(null, "0[0x]+)x0\\0", "0xLT");
test(null, "0[0x]+)x0\\0", "0TxL");
test(null, "0[0x]+)x0\\0", "0TxT");
test(null, "0[0x]+)x0\\0", "0LxLT");
test(null, "0[0x]+)x0\\0", "0TxLT");
test(null, "0[0x]+)x0\\0", "0LTxL");
test(null, "0[0x]+)x0\\0", "0LTxT");
test(null, "0[0x]+)x0\\0", "0xxLxxLTxx");
test(null, "0[0x]+)x0\\0", "0xxTxxLTxx");
test(null, "0[0x]+)x0\\0", "0xxLTxxLxx");
test(null, "0[0x]+)x0\\0", "0xxLTxxTxx");
test(["0TTxxLTT", "0TT"], "0[0x]+)x0\\0", "0xxLTTxxLTTxx");
