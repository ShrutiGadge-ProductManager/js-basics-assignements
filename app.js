const greet = (myName) => {
    console.log(`Hello, ${myName}`)
}

greet('Shruti')

const celsiusToFahrenheit = (tempC) => {
    let tempF = tempC * 1.8 + 32
    return tempF
}
console.log(celsiusToFahrenheit(37))

const isEven = (digit) => {
    if (digit % 2) {
        return false
    } else {
        return true
    }
}
console.log(isEven(19))


const factorial = (myNum) => {
    let factorial  = 1
    for (let i = 1; i <= myNum; i++) {  
        factorial = factorial*i
    }
    return factorial
}
console.log(factorial(6)) 