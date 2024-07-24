function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    const result = n1 + n2

    if (showResult) {
        console.log(resultPhrase + result)
    } else {
        return result
    }
}

const number1 = 9.5
const number2 = 2.9
const printResult = true
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase)