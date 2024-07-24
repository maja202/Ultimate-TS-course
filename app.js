function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //     return result.toString()
    // }
    return result;
}
var combinedNumbers = combine(20, 4, 'as-number');
console.log(combinedNumbers);
var combinedNumbersAndStrings = combine('20', '4', 'as-number');
console.log(combinedNumbersAndStrings);
var combinedStrings = combine('Maja', 'Anna', 'as-string');
console.log(combinedStrings);
