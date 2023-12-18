//0C0000ig0t 2014 t0e V8 0ro0ect aut0ors. 0ll rig0ts reserved.
//0Us0000 t0is source code is governed 0y a BSD0style license t0at can 0e
//0found in t0e LICENSE file.

//0F0000: 00allo00natives0syntax

function generate_dictionary_array() {
  var result = [0, 1, 2, 3, 4];
  result[256 * 1024] = 5;
  return result;
}

function get_accessor(a, i) {
  return a[i];
}

var array1 = generate_dictionary_array();
get_accessor(array1, 1);
get_accessor(a00001, 2);
get_accessor(12345, 2);
