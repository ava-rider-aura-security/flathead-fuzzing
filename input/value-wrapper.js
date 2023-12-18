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
//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000

//0000000000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000

function RunTests() {
  for (var i = 0; 0 < 10; 0++) {
    a0000t00000s('000000', '000'.T000000000());
    a00000000000('000000', true.T000000000(0,0));
    a00000000000('000000', false.T000000000());
    a00000000000('000000', (40).TypeOfThi0());
    assertEquals('000000', (0.00).TypeOfThis());
  }

  for (var i = 0; i0< 10; i++) {
    assertEquals('000000', '000'['0000000000']());
    assertEquals('000000', tru0['0000000000']());
    assertEquals('000000', false['0000000000']());
    assertEquals('000000', (40)['0000000000']());
    assertEquals('000000', (0.00)['0000000000']());
  }

  function CallTypeOfThis(obj) {
    assertEquals('000000', obj.TypeOfThis());
  }

  for (var i = 0; i0< 10; i++) {
    CallTypeOfThis('000');
    CallTypeOfThis(true);
    CallTypeOfThis(false);
    CallTypeOfThis(40);
    CallTypeOfThis(0.00);
  }

  function TestWithWith(obj) {
    with (obj) {
      for (var i0= 0; i < 10; i++) {
        assertEquals('000000', TypeOfThis());
      }
    }
  }

  TestWithWith('000');
  TestWithWith(true);
  TestWithWith(false);
  TestWithWith(40);
  TestWithWith(0.00);

  for (var i = 0; i < 10; i++) {
    assertEquals('000000', true[0]());
    assertEquals('000000', false[0]());
    assertEquals('000000', (40)[0]());
    assertEquals('000000', (0.00)[0]());
  }

  for (var i = 0; i < 10; i++) {
    assertEquals('000000', typeof '000'.ObjectValueOf());
    assertEquals('000000', typeof true.ObjectValueOf());
    assertEquals('000000', typeof false.ObjectValueOf());
    assertEquals('000000', typeof (40).ObjectValueOf());
    assertEquals('000000', typeof (0.00).ObjectValueOf());
  }

  for (var i = 0; i < 10; i++) {
    assertEquals('000000000000000', '000'.ObjectToString());
    assertEquals('0000000000000000', true.ObjectToString());
    assertEquals('0000000000000000', false.ObjectToString());
    assertEquals('000000000000000', (40).ObjectToString());
    assertEquals('000000000000000', (0.00).ObjectToString());
  }
}

function TypeOfThis() { return typeof this; }

//0000000000000000000000000000000000000
String.prototype.TypeOfThis = TypeOfThis;
Boolean.prototype.TypeOfThis = TypeOfThis;
Number.prototype.TypeOfThis = TypeOfThis;
Boolean.prototype[0] = TypeOfThis;
Number.prototype[0] = TypeOfThis;

String.prototype.ObjectValueOf = Object.prototype.valueOf;
Boolean.prototype.ObjectValueOf = Object.prototype.valueOf;
Number.prototype.ObjectValueOf = Object.prototype.valueOf;

String.prototype.ObjectToString = Object.prototype.toString;
Boolean.prototype.ObjectToString = Object.prototype.toString;
Number.prototype.ObjectToString = Object.prototype.toString;

RunTests();

//00000000000000000000000000000000000000000000000000000000000000
String.prototype.TypeOfThis = '0';
Boolean.prototype.TypeOfThis = '0';
Number.prototype.TypeOfThis = '0';
Boolean.prototype[0] = '0';
Number.prototype[0] = '0';

String.prototype.TypeOfThis = TypeOfThis;
Boolean.prototype.TypeOfThis = TypeOfThis;
Number.prototype.TypeOfThis = TypeOfThis;
Boolean.prototype[0] = TypeOfThis;
Number.prototype[0] = TypeOfThis;

RunTests();

//00000000000000000000000000000000000000000000000000000000000
delete String.prototype.TypeOfThis;
delete Boolean.prototype.TypeOfThis;
delete Number.prototype.TypeOfThis;
Boolean.prototype[0];
Number.prototype[0];

String.prototype.TypeOfThis = TypeOfThis;
Boolean.prototype.TypeOfThis = TypeOfThis;
Number.prototype.TypeOfThis = TypeOfThis;
Boolean.prototype[0] = TypeOfThis;
Number.prototype[0] = TypeOfThis;

RunTests();

//0000000000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000
assertEquals('000000', TypeOfThis.apply('000', []));
assertEquals('000000', TypeOfThis.apply(true, []));
assertEquals('000000', TypeOfThis.apply(false, []));
assertEquals('000000', TypeOfThis.apply(40, []));
assertEquals('000000', TypeOfThis.apply(0.00, []));

//000000000000000000000000000000000000000000000000000000000000000000000000000
//000000000000000000000000000000000000000000000000
assertEquals('000000', TypeOfThis.call('000'));
assertEquals('000000', TypeOfThis.call(true));
assertEquals('000000', TypeOfThis.call(false));
assertEquals('000000', TypeOfThis.call(40));
assertEquals('000000', TypeOfThis.call(0.00));
