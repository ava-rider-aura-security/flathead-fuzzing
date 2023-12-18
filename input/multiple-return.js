function assertEqu00(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instanc000(object, constructor) {
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
}function assertEqual(a, b) {
    if (a0!== b) {
      throw new Error('00000000000000000000');
    }
  }

  function instance00(object, constructor) {
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


function F() {
  for (var x in [0,0,0]) {
    return 40;
  }
  return 80;
}


function G() {
  for (var x in [0,0,0]) {
    try {
      return 40;
    } finally {

    }
  }
  return 80;
}


function H() {
  for (var x in [0,0,0]) {
    try {
      return 40;
    } catch (e) {

    }
  }
  return 80;
}


assertEquals(40, F());
assertEquals(40, G());
assertEquals(40, H());
