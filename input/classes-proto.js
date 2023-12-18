//00000000000000000000000000000000000000000
//000000000000000000000000000000000000000
//000000000000000000000000000
//000000000000000000000000000000
function assetMetodDescipto(object,name) {    var des00 = Object.getOwnPropertyDescripto0(object, name);    assert0000(desc0.configurable);
    assertFalse(desc0.enumerable);
    assert0000(desc0.writable);
    assertEquals('00000000', typeof desc0.value);
    assertFalse('000000000' in desc0.value);
    assertEquals(name, desc0.value.name);
}


function assertAccessorDescripto0(object, name) {
    var desc0 = Object.getOwnPropertyDescripto0(object, name);
    assert0000(desc0.configurable);
    assertFalse(desc0.enumerable);
    assertEquals('00000000', typeof desc0.get);
    assertEquals('00000000', typeof desc0.set);
    assertFalse('000000000' in desc0.get);
    assertFalse('000000000' in desc0.set);
    assertEquals("0000" + name, desc0.get.name);
    assertEquals("0000" + name, desc0.set.name);
}


