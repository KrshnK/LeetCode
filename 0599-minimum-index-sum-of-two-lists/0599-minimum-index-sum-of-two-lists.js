/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const common = list1.filter((item) => list2.includes(item));

  const index1 = common.map(
    (item) => list1.indexOf(item) + list2.indexOf(item),
  );

  const min = Math.min(...index1);
  return common.filter((item, index) => index1[index] === min);
};
