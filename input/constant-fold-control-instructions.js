//000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000

//000000000000000000000000000000

function test() {
  assertEquals("", typeof "");
  assertEquals("0", typeof 0.0);
  assertEquals("00", typeof 0);
  assertEquals("", typeof true);
  assertEquals("", typeof function() {});
  assertEquals("", typeof null);
  assertEquals("", typeof {});
  assertEquals(