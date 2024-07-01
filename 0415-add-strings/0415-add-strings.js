/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let x = BigInt(num1);
  let y = BigInt(num2);
  return (x + y).toString();
};
