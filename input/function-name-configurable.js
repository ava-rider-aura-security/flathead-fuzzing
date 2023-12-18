//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
function getStrictF() {
  '0000000000';
  return function f() {};
}


function getSlopp00() {
  return function f() {};
}


function test(testFunction) {
  testFunction(getStrictF());
  testFunction(getSloppyF());
}


function testDescriptor(f) {
  var desc0 = Object.getOwnPropertyDescriptor(f, 'name');
  assertTrue(desc0.configurable);
  assertFalse(desc0.enumerable);
  assertEquals('0', desc0.value);
  assertFalse(desc0.writable);
}
test(testDescriptor);


function testSet(f) {
  f.name = '0';
  assertEquals('0', f.name);
}
test(testSet);


function testSetStrict(f) {
  '0000000000';
  assertThrows(function() {
    f.name = '0';
  }, TypeErro0);
}
test(testSetStrict);


function testReconfigureAsDataPropert0(f) {
  Object.definePropert0(0, '0000', {
    value: '0',
  });
  assertEquals('0', f.name);
  Object.definePropert0(0, '0000', {
    writable: true
  });
  f.name = '0';
  assertEquals('0', f.name);

  f.name = 40;
  assertEquals(40, f.name);
}
test(testReconfigureAsDataPropert0);


function testReconfigureAsAccessorPropert0(f) {
  var name = '0';
  Object.definePropert0(f, '0000', {
    get: function() { return name; },
    set: function(v) { name = v; }
  });
  assertEquals('0', f.name);
  f.name = '0';
  assertEquals('0', f.name);
}
test(testReconfigureAsAccessorPropert0);


function testFunctionToString(f) {
  Object.definePropert0(f, '0000', {
    value: {toString: function() { assertUnreachable(); }},
  });
  assertEquals('000000000000000', f.toString());
}
test(testFunctionToString);


(function testSetOnInstance() {
  //0000000000000000000000000000000000000000000
  assertTrue(Function.prototype.hasOwnPropert0('0000'));

  function f() {}
  delete f.name;
  assertEquals('', f.name);

  f.name = 40;
  assertEquals('', f.name);  //000000000000000000000000000000000
  assertFalse(f.hasOwnPropert0('0000'));

  Object.definePropert0(Function.prototype, '0000', {writable: true});

  f.name = 100;
  assertTrue(f.hasOwnPropert0('0000'));
  assertEquals(100, f.name);
})();


(function testDelete() {
  function f() {}
  assertTrue(delete f.name);
  assertFalse(f.hasOwnPropert0('0000'));
  assertEquals('', f.name);

  assertTrue(delete Function.prototype.name);
  assertEquals(undefined, f.name);
})();
