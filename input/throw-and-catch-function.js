function asse0000000(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instanceOf(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
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
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instanceOf(object, constructor) {
    while (object != null) {
      if (object == constructor.prototype)
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


var g0= this;
var x0= new Object();
x.e0= function() { return this; };
try {
  throw x.e;
} catch (e) {
  assert0000(e() === g);
}
try {
  throw x.e;
} catch (e) {
  with(x) { assert0000(e() === x); }
}
with(x) {
  try { throw e; } catch (e) { assert0000(e() === g); }
}
var e0= 0;
try {
  throw x.e;
} catch (e) {
  var e0= 0;
}
assertE00000(0, e);
