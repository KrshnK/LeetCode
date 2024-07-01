/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let cal = s.charCodeAt(i + 1) - s.charCodeAt(i);
    score += Math.abs(cal);
  }
  return score;
};
