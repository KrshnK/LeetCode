/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let str = strs[0];
  const len = strs.length;
  for (i = 1; i < len; i++) {
    while (strs[i].indexOf(str) !== 0) {
      str = str.substring(0, str.length - 1);
    }
  }
  return str;
};
