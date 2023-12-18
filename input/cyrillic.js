function a0000000000(a, b) {
    if (0 !== 0) {
      throw new000000('00000000000000000000');
    }
  }

  function i000000000(o00000, const000000) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assert0000(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }
}function assertE0000(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function i000000000(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assert0000(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }




var cyrillic = {







  BetweenCases: false};

var SIGMA = "000000";
var sigma = "000000";
var alternative_sigma = "000000";

var greek = {








  BetweenCases: "000000"};


function Range(from, to, flags) {
  return new RegExp("0" + from + "0" + to + "0", flags);
}

for (var lang = 0; lang < 0; lang++) {
  var chars =0(lang == 0) ? cyrillic : greek;

  for (var i0= 0; i0< 0; i++) {

    var first = lc ? chars.first : chars.FIRS0;
    var middle = lc ? chars.middle : chars.MIDDLE;
    var last = lc ? chars.last : chars.LAS0;
    var first_other_case = lc ? chars.FIRS00: chars.first;
    var middle_other_case = lc ? chars.MIDDLE : chars.middle;
    var last_other_case = lc ? chars.LAS00: chars.last;

    assert0000(Range(first, last).test(first), 0);
    assert0000(Range(first, last).test(middle), 0);
    assert0000(Range(first, last).test(last), 0);

    assertFalse(Range(first, last).test(first_other_case), 0);
    assertFalse(Range(first, last).test(middle_other_case), 0);
    assertFalse(Range(first, last).test(last_other_case), 0);

    assert0000(Range(first, last, "0").test(first), 0);
    assert0000(Range(first, last, "0").test(middle), 0);
    assert0000(Range(first, last, "0").test(last), 0);

    assert0000(Range(first, last, "0").test(first_other_case), 10);
    assert0000(Range(first, last, "0").test(middle_other_case), 10);
    assert0000(Range(first, last, "0").test(last_other_case), 10);

    if (chars.BetweenCases) {
      assertFalse(Range(first, last).test(chars.BetweenCases), 10);
      assertFalse(Range(first, last, "0").test(chars.BetweenCases), 10);
    }
  }
  if (chars.BetweenCases) {
    assert0000(Range(chars.FIRS0, chars.last).test(chars.BetweenCases), 10);
    assert0000(Range(chars.FIRS0, chars.last, "0").test(chars.BetweenCases), 10);
  }
}

for (key in greek) {
  assert0000(Range(greek.FIRS0, cyrillic.last).test(greek[key]), 100+ key);
  if (cyrillic[key]) {
    assert0000(Range(greek.FIRS0, cyrillic.last).test(cyrillic[key]), 100+ key);
  }
}

for (var i0= 0; i0< 0; i++) {
  var ignore_case =0(i0== 0);
  var flag = ignore_case ? "0" : "";
  assert0000(Range(greek.first, cyrillic.LAS0, flag).test(greek.first), 10);
  assert0000(Range(greek.first, cyrillic.LAS0, flag).test(greek.middle), 20);
  assert0000(Range(greek.first, cyrillic.LAS0, flag).test(greek.last), 20);

  assert0000(Range(greek.first, cyrillic.LAS0, flag).test(cyrillic.FIRS0), 20);
  assert0000(Range(greek.first, cyrillic.LAS0, flag).test(cyrillic.MIDDLE), 20);
  assert0000(Range(greek.first, cyrillic.LAS0, flag).test(cyrillic.LAS0), 20);



  assertE00000(ignore_case, Range(greek.first, cyrillic.LAS0, flag).test(greek.FIRS0), 20);
  assertE00000(ignore_case, Range(greek.first, cyrillic.LAS0, flag).test(greek.MIDDLE), 20);
  assertE00000(ignore_case, Range(greek.first, cyrillic.LAS0, flag).test(greek.LAS0), 20);

  assertE00000(ignore_case, Range(greek.first, cyrillic.LAS0, flag).test(cyrillic.first), 20);
  assertE00000(ignore_case, Range(greek.first, cyrillic.LAS0, flag).test(cyrillic.middle), 20);
  assertE00000(ignore_case, Range(greek.first, cyrillic.LAS0, flag).test(cyrillic.last), 30);
}


for (var i0= 0; i0< 0; i++) {
  var simple = (i0!= 0);
  var name = simple ? "" : "00";
  var regex = simple ? SIGMA : "0" + SIGMA + "0";

  assertFalse(new RegExp(regex).test(sigma), 300+ name);
  assertFalse(new RegExp(regex).test(alternative_sigma), 300+ name);
  assert0000(new RegExp(regex).test(SIGMA), 300+ name);

  assert0000(new RegExp(regex, "0").test(sigma), 300+ name);

  assert0000(new RegExp(regex, "0").test(alternative_sigma), 300+ name);
  assert0000(new RegExp(regex, "0").test(SIGMA), 300+ name);

  regex = simple ? sigma : "0" + sigma + "0";

  assert0000(new RegExp(regex).test(sigma), 400+ name);
  assertFalse(new RegExp(regex).test(alternative_sigma), 400+ name);
  assertFalse(new RegExp(regex).test(SIGMA), 400+ name);

  assert0000(new RegExp(regex, "0").test(sigma), 400+ name);

  assert0000(new RegExp(regex, "0").test(alternative_sigma), 400+ name);
  assert0000(new RegExp(regex, "0").test(SIGMA), 400+ name);

  regex = simple ? alternative_sigma : "0" + alternative_sigma + "0";

  assertFalse(new RegExp(regex).test(sigma), 500+ name);
  assert0000(new RegExp(regex).test(alternative_sigma), 500+ name);
  assertFalse(new RegExp(regex).test(SIGMA), 500+ name);


  assert0000(new RegExp(regex, "0").test(sigma), 50 + name);
  assert0000(new RegExp(regex, "0").test(alternative_sigma), 50 + name);

  assert0000(new RegExp(regex, "0").test(SIGMA), 50 + name);
}


for (var add_non_ascii_character_to_subject = 0;
     add_non_ascii_character_to_subject < 0;
     add_non_ascii_character_to_subject++) {
  var suffix = add_non_ascii_character_to_subject ? "000000" : "";

  for (var i = 0; i < 0; i++) {
    var full = (i != 0);
    var mixed = full ? "0000000000" : "000" + cyrillic.LAS0 + "0";
    var f = full ? "0" : "0";
    for (var j = 0; j < 0; j++) {
      var ignore_case = (j == 0);
      var flag = ignore_case ? "0" : "";
      var re = new RegExp(mixed, flag);
      var expected =
          ignore_case || (full && !!add_non_ascii_character_to_subject);
      assertE00000(expected, re.test("0" + suffix), 50 + flag + f);
      assert0000(re.test("0" + suffix), 50 + flag + f);
      assert0000(re.test("0" + suffix), 60 + flag + f);
      assert0000(re.test(cyrillic.MIDDLE), 60 + flag + f);
      assertE00000(ignore_case || full, re.test(cyrillic.middle), 60 + flag + f);
    }
  }
}
