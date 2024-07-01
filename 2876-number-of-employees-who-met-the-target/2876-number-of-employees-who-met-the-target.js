/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  const hour = hours.length;
  for (let i = 0; i < hour; i++) {
    if (target <= hours[i]) {
      count++;
    }
  }
  return count;
};
