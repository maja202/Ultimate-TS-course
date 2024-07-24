type Combinable = number | string
type Conversion = 'as-number' | 'as-string'

function combine(n1: Combinable, n2: Combinable, resultConversion: Conversion) {
    let result

    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2
    }
    else {
        result = n1.toString() + n2.toString()
    }

    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //     return result.toString()
    // }

    return result
}

const combinedNumbers = combine(20, 4, 'as-number')
console.log(combinedNumbers)

const combinedNumbersAndStrings = combine('20', '4', 'as-number')
console.log(combinedNumbersAndStrings)

const combinedStrings = combine('Maja', 'Anna', 'as-string')
console.log(combinedStrings)
