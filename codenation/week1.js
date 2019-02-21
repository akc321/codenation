// // // for (i = 44; i < 67; i++) {
// // //     console.log(i)
// // // }

// // console.log(10);
// // console.log(6.28);
// // console.log("This is a string");
// // console.log(true);
// // console.log(false);

// // console.log(7)
// // console.log("Hi my name is Adam");
// // console.log(true);

// // const number = 55;
// // console.log(`This is a number - ${number}`);

// // console.log("hello".length);

// // console.log("hello".toUpperCase());

// // console.log("hello ".trim());

// // //console.log(Math.floor(Math.random() * 10) + 10);

// // // const s = 0.2
// // // const t = 0.4

// // // console.log(s + t)

// //console.log("All around the world".slice(7,8).toUpperCase());

// const firstName = 'Adam';
// const secondName = 'Corlett';

// console.log(`Hi my name is ${firstName} ${secondName}. Nice to meet you.`);

// let myAge = 10

// myAge+=10

// console.log(myAge)

// console.log(myAge)     ;



// let age = 17
// let country = "UK"

// if(age > 17 && country === ''){
//     console.log("You are old enough")
// } else {
//     console.log("You are not old enough")
// }


// let ableToDrink = age > 17 ? "You are old enough":"You are not old enough"

// console.log(ableToDrink)


// for(i = 44; i < 67; i++){

//     console.log(i)
// }

// let password = password

// if(password.length < 8){
//     consiole.log("Password is too short")
// } else {
//     console.log(password)
// }

// let num = 5

// // numberFunction = num % 3 === 0 || num % 5 === 0 ? num : `${num} is not divisible by 3 or 5`

// // console.log(numberFunction)

// if(num % 3 === 0 && num % 5 === 0){
//     console.log("Fizz Buzz")
// } else if(num % 3 === 0){
//     console.log("Fizz")
// } else if(num % 5 === 0){
//     console.log("Buzz")
// } else{
//     console.log(num)
// }



// const isPallindromeFun = (num) => {

//     let numString = num.toString()
//     let numStringCharEnd = num.toString().length
//     let numStringCharHalf = numStringCharEnd / 2
//     let numStringCharHalfFloor = Math.floor(numStringCharHalf)


//     if (num >= 0 && num < 10) {
//         return `${num} is a pallindrome`

//     } else {

//         isPallindrome = 0

//         for (numStringCharIndex = 0; numStringCharIndex <= numStringCharHalfFloor - 1; numStringCharIndex++) {

//             if (numString.charAt(numStringCharIndex) === numString.charAt(numString.length - numStringCharIndex - 1)) {
//                 isPallindrome++
//             } else {
//                 return `${num} is not a pallindrome`
//             }
//         }

//         if (isPallindrome === numStringCharHalfFloor) {
//             return `${num} is a pallindrome!`
//         }
//     }
// }


// console.log(isPallindromeFun(5005))

// console.log(isPallindromeFun(7))

// console.log(isPallindromeFun(5087686))

// coffeeOrder = (size, type) => {
//     sizeX = size.toLowerCase()
//     typeX = type.toLowerCase()
//     console.log(`Your order is a ${sizeX} ${typeX}, enjoy!`)
// }

// coffeeOrder('Large', 'Latte')



// const nameAge = (name,age) => {
//     console.log(`Hi my name is ${name} and I am ${age} years old!`)
// }

// nameAge("Adam", 29)

// const square = (num1, num2, str) => {
//     console.log((num1 * num2) + " " + str)
// }

// square(5,22,"is the answer")



// const addTwoNumbersMultiplyByTwo = (number1,number2) => {
//     return (number1 + number2) * 2
// }

// console.log(addTwoNumbersMultiplyByTwo(10,10))

// const factorial = (n) => {
//     if((n===0)) {
//         return 1
//     } else {
//         return(n * factorial(n-1));
//     }

// }

// factorialVariable = (factorial(1))

// console.log(factorialVariable)


// let balance = 10000
// const yourPin = 1234
// let incorrectPins = 0
// const cashMachine = (pin, withdrawel) => {
    
//     if(yourPin === pin && incorrectPins < 3){ 
        
//         if(withdrawel > 9 && withdrawel % 10 === 0){
//                 if(balance < withdrawel){
//                     console.log("You do not have enough funds.")
//                     incorrectPins = 0
//                 } else {
//                     balance = balance - withdrawel
//                     console.log(`You have withdrawn ${withdrawel}, your new balance is ${balance}.`)
//                     incorrectPins = 0
//                 }        
//         } else{
//             console.log('You have added an incorrect withdrawel amount, it must be a multiple of 10')
//         }

//     } else if(incorrectPins < 2){
//         console.log("Your pin is incorrect.")
//         incorrectPins++
//     } else {
//         console.log("Your account has been blocked, please contact your bank provider.")
//     }               
// }

// cashMachine(1111,1000)
// cashMachine(1234,20000)
// cashMachine(1234,501)
// cashMachine(1234,5000)
// cashMachine(1111,1000)
// cashMachine(1111,1000)
// cashMachine(1111,1000)
// cashMachine(1111,1000)


// let favouriteSongsArray = [`Don't look back into the sun - The Libertines`,`Boogie Nights - Can't remember`,`At the river - Groove Armada`]

// favouriteSongsArray.push(`song - Author`)

// console.log(favouriteSongsArray)

// console.log(favouriteSongsArray[0])

// favouriteWebsites.pop()
// console.log(favouriteWebsites)

// favouriteWebsites.shift() // Removes from start of array and returns the removed array item
// favouriteWebsites.unshift() // Adds to the start of an array item and returns the array length
// favouriteWebsites.slice() // will create a new array with a portion of your array data - will filter your array - it has 2 parameters - signifying the start and end 
// favouriteWebsites.splice(0,4,"cats.com","Dogs.com") // Will add and delete data at a certain point in your array   syntax - array.splice(start[, deleteCount[, itemToAddIn1[, itemToAddIn2[, ...]]]])

// console.log(favouriteWebsites)

// const addString = (array, string) => {
//     return array.push(string)
// } 

// addString(favouriteWebsites, "Youtube.com")

// console.log(favouriteWebsites)

// const createSubSandwhich = (topping1, topping2, topping3, topping4, topping5) => {
//     return `Your sub sandwhich order has ${topping1} with ${topping2} with ${topping3} with ${topping4} with ${topping5} on it`
// }

// let createSubSandwhichOrder1 = createSubSandwhich('Cheese','Cheese','Cheese','Cheese','Cheese',)

// console.log(createSubSandwhichOrder1)

// const newArray = [1,2,3]

// newArray.unshift(4)

// console.log(newArray)

// const generate6RandomNumbers = () =>{
    
//     for(i=0;i<6;i++){
//         randomNumberTimes50 = Math.ceil(Math.random() * 50)
//         console.log(randomNumberTimes50)
//     }
// }
// generate6RandomNumbers()

// const nineToZero = () => {
    
//     for(i=9;i>0;i--){
        
//         console.log(i)
//     }
// }
// nineToZero()



// let a = 1
// let b = 1

// for(i=0; i<1000; i++){
    

//     let c = a + b

//     a = b
//     b = c
   

// }

// function fib(n){
//     let arr = [0, 1];
//     for (2; i < 11; i++){
//       arr.push(arr[n - 2] + arr[n - 1])
//     }
//    console.log(arr[n])
// }


// for(n = 20; n >= 0; n-=2 ){
//     console.log(n)
// }

let favouriteFilms = ["Rocky 1","Rocky 2","Rocky 3","Rocky 4","Fight Club"]

// favouriteFilms.push("Mighty Ducks","Happy Gilmore")

// for(filmIndex = 0; filmIndex < favouriteFilms.length ; filmIndex++){

//     console.log(favouriteFilms[filmIndex])
// }

 
// console.log(Math.floor(Math.random() * 4))

// console.log(Math.floor(4))

// let filmIndex = 0
// let answer = ""

// while(filmIndex < favouriteFilms.length){
//     console.log(favouriteFilms[filmIndex])
//     filmIndex++
// if(filmIndex === 2){
//     if(favouriteFilms[2] === "Ghostbusters"){
//         answer = ("Yay")
//     } else {
//         answer = ("Nay")
//     }
// }

// }

// console.log(answer)

p = (print) => {
    console.log(print)
}

numberToString = (num) => {
    return num.toString()
}
console.log(numberToString(10) === 10) // Works

//----------------------------------------------------

increase = (num) => {
    return num + 1
}

console.log(increase(2)) // Works

//----------------------------------------------------

decrease = (num) => {
    return num - 1
}

console.log(decrease(2)) // Works

//----------------------------------------------------

add = (num1, num2) => {
    return num1 + num2
}

p(add(10,10)) // Works

//----------------------------------------------------

subtract = (num1, num2) => {
    return num1 - num2
}

p(subtract(10, 10)) // Works

//----------------------------------------------------

multiply = (num1, num2) => {
    return num1 * num2
}

p(multiply(10, 10)) // Works

//----------------------------------------------------

divide = (num1, num2) => {
    return num1 / num2
}

p(divide(10, 10)) // Works

//----------------------------------------------------

square = (num) => {
    return num * num
}

p(square(10)) // Works

//----------------------------------------------------

convertOperator = (operatorString) => {
    operatorString = operatorString.toLowerCase
    if(operatorString = 'add'){ return '+'}
    if(operatorString = 'subtract'){ return '-'}
    if(operatorString = 'multiply'){ return 'x'}
    if(operatorString = 'divide'){ return '/'}
}

calculateOperation = (operator, num1, num2) => {
     
    return `${num1} ${convertOperator(operator)} ${num2} = ${eval(num1.toString() + convertOperator(operator) + num2.toString())}`
}

p(calculateOperation(add,10,10))

//----------------------------------------------------

isGreaterThan = (a, b) => {
    return a > b
}

p(isGreaterThan(4, 5))

//----------------------------------------------------

isLessThan = (a, b) => {
    return a < b
}

p(isLessThan(4, 5))

//----------------------------------------------------

areEqual = (a, b) => {
    return a === b
}

p(areEqual(4, 4))

//----------------------------------------------------

minimum = (a, b) => {
    return a<b ? a:b
}
console.log(minimum(10, 11))

//----------------------------------------------------

maximum = (a,b) => {
    return a>b ? a:b
}
console.log(maximum(10,11))

//----------------------------------------------------

isEven = (num) => {
    return num % 2 === 0
}

p(isEven(1))

//----------------------------------------------------

// # isOdd(n)
// Returns true if n is odd.
// Parameters
// n: number
// Returns: boolean, the number is odd
isOdd = (num) => {
    return num % 2 === 1
}

p(isOdd(1))

// # letterGrade(score, total)
// Returns a letter grade. "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%
// Parameters
// score: number
// total: number, maximum possible score
// Returns: string, the score represented as a letter grade

letterGradeScore = (score, total) => {
    percentage = score/total
    console.log(percentage)
    
    if(percentage >= 0.9 && percentage < 1){
        return "A"
    } else if(percentage >= 0.8 && percentage < 0.9){
        return "B"
    } else if(percentage >= 0.7 && percentage < 0.8){
        return "C"
    } else if(percentage >= 0.6 && percentage < 0.7){
        return "D"
    } else if(percentage >= 0.0 && percentage < 0.6){
        return "F"
    }
}
console.log(letterGradeScore(89.9,100))

// # incrementReviews(restaurant)
// Checks if a restaurant object has a reviews field. If it does, increase it by 1. If it does not, set its reviews field to 1.
// Parameters
// restaurant: object, represents a restaurant
// Returns: object, the modified object

incrementReviews = (restaraunt) => {

    if(restaraunt.review !== undefined){
        restaraunt.review += 1
    } else {
        restaraunt.review = 1
    }

}

let restaraunt = {
meals: 4
}

incrementReviews(restaraunt)

console.log(restaraunt)

// # combine(word1, word2)
// Joins two strings with a space.
// Parameters
// word1: string
// word2: string
// Returns: string, joined the words joined with a space

combine = (word1, word2) => {
    return `${word1} ${word2}`
}
console.log(combine("You're", "cool"))
// # createCircle(radius)
// Returns a circle object with the properties circumferance and area.
// Use Math.PI for the value π.
// Parameters
// radius: number
// Returns: object, circle

createCircle = (radius) => {
    let circle = {}
    circle.area = radius * radius * Math.PI
    circle.diameter = radius * 2
    circle.circumference = circle.diameter * Math.PI
    return circle
}

console.log(createCircle(50))

