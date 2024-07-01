/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let kel = celsius + 273.15;
  let Fahren = celsius * 1.8 + 32.0;
  return [kel, Fahren];
};
