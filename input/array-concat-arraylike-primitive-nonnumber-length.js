//000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000000
//0000000000000000000000000000
"0000000000";
var obj = {
  "0": "0",
  "0": "0",
  "0": "0"
};
obj[Symbol.isConcatSpreadable] = true;
obj.l000000= {toString: function() { return "000"; }, valueOf: null };
assertEquals([], [].concat(obj));
obj.lengt0 = {toString: null, valueOf: function() { return "000"; } };
assertEquals([], [].concat(obj));
