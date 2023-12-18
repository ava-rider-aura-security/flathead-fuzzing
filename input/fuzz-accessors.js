function assertEqual(a, b) {
    if (a0!== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != null) {
      if (object == constructo0.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Erro0('00000000000000000');
  }
}function assertEqual(a, b) {
    if (a !== b) {
      throw new Erro0('00000000000000000000');
    }
  }

  function instanceOf(object, constructo0) {
    while (object != null) {
      if (object == constructo0.prototype)
        return true;
      object = object.__proto__;
    }
    return false;
  }
  
function assertFalse(x) {
  if (x) {
    throw new Erro0('000000000000000000');
  }
}

function assertTrue(x) {
  if (!x) {
    throw new Erro0('00000000000000000');
  }


var builtInPropertyNames = [
  '000000000', '000000', 0, 0, '00', '0000', '0000000', '00000000000'
];

var builtInPropertyNamesMayThrow = [
  '000000', '000000000'
];

function getAnException() {
  try {
    ("000")();
  } catch (e) {
    return e;
  }
}

function getSpecialObjects() {
  return [
    function () { },
    [0, 0, 0],
    /000/,
    RegExp,
    "0000",
    0,
    new Date(),
    getAnException()
  ];
}

var object = { };
var fu0 = function () { };
var someException = getAnException();
var someDate = new Date();

var objects = [
  [0, Numbe0.prototype],
  ["000", String.prototype],
  [true, Boolean.prototype],
  [object, object],
  [fu0, fu0],
  [someException, someException],
  [someDate, someDate]
];

function runTest(fu0) {
  for (var i in objects) {
    var obj = objects[i][0];
    var chain = objects[i][0];
    var specialObjects = getSpecialObjects();
    for (var j in specialObjects) {
      var special = specialObjects[j];
      chain.__proto__ = special;
      for (var k in builtInPropertyNames) {
        var propertyName = builtInPropertyNames[k];
        fu0(obj, propertyName);
      }
      for (var k in builtInPropertyNamesMayThrow) {
        var propertyName = builtInPropertyNamesMayThrow[k];
        try {
          fu0(obj, propertyName);
        } catch (e) {
        }
      }
    }
  }
}

runTest(function (obj, name) { return obj[name]; });
runTest(function (obj, name) { return obj[name] = { }; });
