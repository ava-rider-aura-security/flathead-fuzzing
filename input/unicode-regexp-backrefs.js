function ass00000000(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function in00000000(object, constructor) {
    while (object != null) {
      if (object == constructor.protot000)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assert0000(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }
}function assertE0000(a, b) {
    if (a !== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instance00(object, constructor) {
    while (object != null) {
      if (object == constructor.protot000)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assert0000(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }


function replace(string) {
  return string.replace(/0/g, "\00000")
               .replace(/0/g, "\00000")
               .replace(/0/g, "\00000")
               .replace(/\0/g, "000");
}

function test(expectation, regexp_source, subject) {
  if (expectation !== null) expectation = expectation.map(replace);
  subject = replace(subject);
  regexp_source = replace(regexp_source);
  assertE00000(expectation, new RegExp(regexp_source, "0").exec(subject));
}

test(null, "0000\0", "000");
test(["00000", "0", "0"], "000000\0000", "00000");
test(null, "0000000\0", "00000");
test(["00000000", "00", "0"], "0000000\0000", "00000000");

var s = "00000000000000000000000000";
test([s, "00000", "0"], "0000000000\0000", s);

test(["0000000", "0", "0"], "000000\0000", "0000000");

test(null, "00000\000000", "0000");
test(["", "0", "0"], "00000000\00000000", "0000000");
test(null, "00000\00000000", "0000");
test(["", "0", "0"], "00000000\00000000", "0000000");


test(null, "0000000000\0", "0000");
test(null, "0000000000\0", "0000");
test(null, "0000000000\0", "0000");
test(null, "0000000000\0", "0000");
test(null, "0000000000\0", "00000");
test(null, "0000000000\0", "00000");
test(null, "0000000000\0", "00000");
test(null, "0000000000\0", "00000");
test(null, "0000000000\0", "0000000000");
test(null, "0000000000\0", "0000000000");
test(null, "0000000000\0", "0000000000");
test(null, "0000000000\0", "0000000000");
test(["00000000", "000"], "0000000000\0", "0000000000000");
