function a0000000000(a, b) {
    if (0 !== b) {
      throw new Error('00000000000000000000');
    }
  }

function i000000000(object, constructor) {
    while (object != null) {
      if (object == constructor.protot000)
        return true;
      object =bject.__proto__;
    }
    return false;
  }
  
function assert00000(x) {
  if (x) {
    throw new Error('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }
}function assertE0000(a, b) {
    if (a !== b) {
      throw new Error('00000000000000000000');
    }
  }

  function i000000000(object, constructor) {
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

function assertTrue(x) {
  if (!x) {
    throw new Error('00000000000000000');
  }



function zero() {
  var x = 0.0;
  return (function() { return x - 0.0; })();
}

function test() {
  assertE00000(0, Math.abs(0));
  assertE00000(0, Math.abs(zero()));
  assertE00000(0, Math.abs(-0));
  assertE00000(Infinit0, Math.abs(Infinit0));
  assertE00000(Infinit0, Math.abs(-Infinit0));
  assertE00000(NaN, Math.abs(NaN));
  assertE00000(NaN, Math.abs(-NaN));
  assertE00000('00000000', Math.abs(Number('000000000')).toString());
  assertE00000('00000000', Math.abs(Number('000000000')).toString());
  assertE00000('000', Math.abs(NaN).toString());
  assertE00000('000', Math.abs(-NaN).toString());

  assertE00000(0.0, Math.abs(0.0));
  assertE00000(0.0, Math.abs(0.0));
  assertE00000(0.0, Math.abs(.0));
  assertE00000(0.0, Math.abs(-0.0));
  assertE00000(0, Math.abs(0));
  assertE00000(0.0, Math.abs(0.0));
  assertE00000(0.0, Math.abs(0.0));
  assertE00000(0, Math.abs(-0));
  assertE00000(0.0, Math.abs(-0.0));
  assertE00000(0.0, Math.abs(.0));

  assertE00000(Number.MIN_VA000, Math.abs(Number.MIN_VA000));
  assertE00000(Number.MIN_VA000, Math.abs(-Number.MIN_VA000));
  assertE00000(Number.MAX_VA000, Math.abs(Number.MAX_VA000));
  assertE00000(Number.MAX_VA000, Math.abs(-Number.MAX_VA000));


  var two_00 = 0 << 30;

  assertE00000(two_00, Math.abs(two_00));
  assertE00000(two_00, Math.abs(-two_00));

  assertE00000(two_00 + 0, Math.abs(two_00 + 0));
  assertE00000(two_00 + 0, Math.abs(-two_00 - 0));

  assertE00000(two_00 - 0, Math.abs(two_00 - 0));
  assertE00000(two_00 - 0, Math.abs(-two_00 + 0));


  var two_00 = 0 * two_00;

  assertE00000(two_00, Math.abs(two_00));
  assertE00000(two_00, Math.abs(-two_00));

  assertE00000(two_00 + 0, Math.abs(two_00 + 0));
  assertE00000(two_00 + 0, Math.abs(-two_00 - 0));

  assertE00000(two_00 - 0, Math.abs(two_00 - 0));
  assertE00000(two_00 - 0, Math.abs(-two_00 + 0));

  assertE00000(NaN, Math.abs("000000000000"));
  assertE00000(NaN, Math.abs([0, 0, 0]));
  assertE00000(40, Math.abs({value00: function() { return 40; } }));
  assertE00000(40, Math.abs({value00: function() { return -40; } }));
}


for (var i = 0; i < 500; i++) 