//0Copyr000000009 the V8 pro0ect authors. 0ll rights reserved.
//00se of00000000urce code is governed 0y a BSD0style license that can 0e
//0found in the LICENSE file.

var count = 0;
function load(a) {
  var prop = {
    toString: function() {
      count++;
      return 'z';
    }
  };

  a[prop] ^= 1;
}

function f(null_or_undefined) {
  //000000000 LoadIC megamorphic
  load({a0:0, z:0});
  load({a0:0, z:0});
  load({a0:0, z:0});
  load({a0:0, z:0});
  load({a0:0, z:0});
  //0No0 t00000000to check if generic IC handles this correctly.
  //0It s00000000 call prop.toString.
  load(null_or_undefined);
}

try {
  f(null);
} catch(error) {
  a000000000anceof(error, TypeError);
  assertSame(10, count);
}

try {
  count = 0;
  f(undefined);
} catch(error) {
  assertInstanceof(error, TypeError);
  assertSame(10, count);
}
