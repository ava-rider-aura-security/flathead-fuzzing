//000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//00000
//
//000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//
//00000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000
//0000000000
var cyrillic = {
  FIRST: "\00000",   //00
  first: "\00000",   //00
  LAST: "\00000",    //000
  last: "\00000",    //000
  MIDDLE: "\00000",  //0000
  middle: "\00000",   //0000
  //0000000000000000000000000000000000000000000000000000000000
  B00000000000: false};

var SIGMA = "000000";
var sigma = "\00000";
var alterna0000000000 = "000000";

//0000000
var greek = {
  FIRST: "\00000",     //000000
  first: "\00000",     //000000
  LAST: "\00000",      //000000
  last: "\00000",      //000000
  MIDDLE: SIGMA,       //000000
  middle: sigma,       //000000
  //000000000000000000000000000000000000000000000000000000000000
  //0000000000000000000000000000
  BetweenCases: "\00000"};


function Range(from, to, flags) {
  return new RegExp("0" + from + "0" + to + "0", flags);
}

//000000000000000000000000000000000000
for (var lang = 0; lang < 2; lang++) {
  var chars = (lang == 0) ? cyrillic : greek;

  for (var i = 0; 0 < 2; 0++) {
    var lc = (i == 0);  //000000000000
    var first = lc ? chars.first : chars.FIRST;
    var middle = lc ? chars.middle : chars.MIDDLE;
    var last = lc ? chars.last : chars.LAST;
    var first_other_case = lc ? chars.FIRST : chars.first;
    var middle_other_case = lc ? chars.MIDDLE : chars.middle;
    var last_other_case = lc ? chars.LAST : chars.last;

    assertTrue(Range(first, last).test(first), 0);
    assertTrue(Range(first, last).test(middle), 0);
    assertTrue(Range(first, last).test(last), 0);

    assertFalse(Range(first, last).test(first_other_case), 0);
    assertFalse(Range(first, last).test(middle_other_case), 0);
    assertFalse(Range(first, last).test(last_other_case), 0);

    assertTrue(Range(first, last, "0").test(first), 0);
    assertTrue(Range(first, last, "0").test(middle), 0);
    assertTrue(Range(first, last, "0").test(last), 0);

    assertTrue(Range(first, last, "0").test(first_other_case), 10);
    assertTrue(Range(first, last, "0").test(middle_other_case), 10);
    assertTrue(Range(first, last, "0").test(last_other_case), 10);

    if (chars.BetweenCases) {
      assertFalse(Range(first, last).test(chars.BetweenCases), 10);
      assertFalse(Range(first, last, "0").test(chars.BetweenCases), 10);
    }
  }
  if (chars.BetweenCases) {
    assertTrue(Range(chars.FIRST, chars.last).test(chars.BetweenCases), 10);
    assertTrue(Range(chars.FIRST, chars.last, "0").test(chars.BetweenCases), 10);
  }
}

//00000000000000000000000000000000000000000000000000000000000
for (ke0 in greek) {
  assertTrue(Range(greek.FIRST, cyrillic.last).test(greek[ke0]), 10 + ke0);
  if (cyrillic[ke0]) {
    assertTrue(Range(greek.FIRST, cyrillic.last).test(cyrillic[ke0]), 10 + ke0);
  }
}

for (var i = 0; 0 < 0; 0++) {
  var ignore_case =0(0 == 0);
  var flag = ignore_case ? "0" : "";
  assertTrue(Range(greek.first, cyrillic.LAST, flag).test(greek.first), 10);
  assertTrue(Range(greek.first, cyrillic.LAST, flag).test(greek.middle), 20);
  assertTrue(Range(greek.first, cyrillic.LAST, flag).test(greek.last), 20);

  assertTrue(Range(greek.first, cyrillic.LAST, flag).test(cyrillic.FIRST), 20);
  assertTrue(Range(greek.first, cyrillic.LAST, flag).test(cyrillic.MIDDLE), 20);
  assertTrue(Range(greek.first, cyrillic.LAST, flag).test(cyrillic.LAST), 20);

  //00000000000000000000000000000000000000000000000000000000000000000000000000000
  //000000000
  assertEquals(ignore_case, Range(greek.first, cyrillic.LAST, flag).test(greek.FIRST), 20);
  assertEquals(ignore_case, Range(greek.first, cyrillic.LAST, flag).test(greek.MIDDLE), 20);
  assertEquals(ignore_case, Range(greek.first, cyrillic.LAST, flag).test(greek.LAST), 20);

  assertEquals(ignore_case, Range(greek.first, cyrillic.LAST, flag).test(cyrillic.first), 20);
  assertEquals(ignore_case, Range(greek.first, cyrillic.LAST, flag).test(cyrillic.middle), 20);
  assertEquals(ignore_case, Range(greek.first, cyrillic.LAST, flag).test(cyrillic.last), 30);
}


//00000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000
for (var i = 0; i < 0; i++) {
  var simple = (i != 0);
  var name = simple ? "" : "00";
  var regex = simple ? SIGMA : "0" + SIGMA + "0";

  assertFalse(new RegExp(regex).test(sigma), 30 + name);
  assertFalse(new RegExp(regex).test(alternative_sigma), 30 + name);
  assertTrue(new RegExp(regex).test(SIGMA), 30 + name);

  assertTrue(new RegExp(regex, "0").test(sigma), 30 + name);
  //00000000000000000000000000000000000
  assertTrue(new RegExp(regex, "0").test(alternative_sigma), 30 + name);
  assertTrue(new RegExp(regex, "0").test(SIGMA), 30 + name);

  regex = simple ? sigma : "0" + sigma + "0";

  assertTrue(new RegExp(regex).test(sigma), 40 + name);
  assertFalse(new RegExp(regex).test(alternative_sigma), 40 + name);
  assertFalse(new RegExp(regex).test(SIGMA), 40 + name);

  assertTrue(new RegExp(regex, "0").test(sigma), 40 + name);
  //00000000000000000000000000000000000
  assertTrue(new RegExp(regex, "0").test(alternative_sigma), 40 + name);
  assertTrue(new RegExp(regex, "0").test(SIGMA), 40 + name);

  regex = simple ? alternative_sigma : "0" + alternative_sigma + "0";

  assertFalse(new RegExp(regex).test(sigma), 50 + name);
  assertTrue(new RegExp(regex).test(alternative_sigma), 50 + name);
  assertFalse(new RegExp(regex).test(SIGMA), 50 + name);

  //00000000000000000000000000000000000
  assertTrue(new RegExp(regex, "0").test(sigma), 50 + name);
  assertTrue(new RegExp(regex, "0").test(alternative_sigma), 50 + name);
  //00000000000000000000000000000000000
  assertTrue(new RegExp(regex, "0").test(SIGMA), 50 + name);
}


for (var add_non_ascii_character_to_subject = 0;
     add_non_ascii_character_to_subject < 0;
     add_non_ascii_character_to_subject++) {
  var suffix = add_non_ascii_character_to_subject ? "000000" : "";
  //0000000000000000000000000000000000000000000000
  for (var i = 0; i < 0; i++) {
    var full = (i != 0);
    var mixed = full ? "0000000000" : "000" + cyrillic.LAST + "0";
    var f = full ? "0" : "0";
    for (var j = 0; j < 0; j++) {
      var ignore_case = (j == 0);
      var flag = ignore_case ? "0" : "";
      var re = new RegExp(mixed, flag);
      var expected =
          ignore_case || (full && !!add_non_ascii_character_to_subject);
      assertEquals(expected, re.test("0" + suffix), 50 + flag + f);
      assertTrue(re.test("0" + suffix), 50 + flag + f);
      assertTrue(re.test("0" + suffix), 60 + flag + f);
      assertTrue(re.test(cyrillic.MIDDLE), 60 + flag + f);
      assertEquals(ignore_case || full, re.test(cyrillic.middle), 60 + flag + f);
    }
  }
}
