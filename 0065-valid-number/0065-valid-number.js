/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let reg = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
  return reg.test(s.trim());
};
