/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kel = celsius + 273.15
    let Fahren = celsius * 1.80 + 32.00
    return [kel,Fahren]
};