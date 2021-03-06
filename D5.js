/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1, l2) {
    console.log("The area = " + l1 * l2);
};

area(20 , 10)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(int1, int2) {
    
if (int1 != int2){
console.log("The sum is " + (int1 + int2))
}
else{
    console.log("The sum is " + (int1 + int2) * 3)
}
};

crazySum(20,20)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(num){
if (num > 19){
    console.log("The difference is " + (num - 19) * 3)
}
else{
    console.log("The difference is " + (19 - num))
}
}

crazyDiff(24)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n){
    return (n >= 20 && n <= 100 || n === 400) ? true : false
}
console.log(boundary(400))


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(userString){
if (userString.startsWith("Strive")) {
return userString
}
else{
userString = "Strive " + userString
return userString
}
}

console.log(strivify("School"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(num){
if((num % 3) === 0 ){
console.log("This number is a multiple of 3!")
}
else if((num % 7) === 0 ){
console.log("This number is a multiple of 7!")
}
else{
console.log("This number is not multiple of 3 or 7!")
}
}
check3and7(4)


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(string) {
    return string.split('').reverse().join('');
}
console.log(reverseString("Strive"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(userString){
let words = userString.split(" ")

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    
}
return words.join(" ")
}

console.log(upperFirst("strive school"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(string){
return string.slice(1, string.length - 1)
}

console.log(cutString("Strive School"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n){
    let randNums = []
    for (let i = 0; i < n; i++) {
randNums.push(Math.floor(Math.random() * 10))
}
return(randNums)

}
console.log(giveMeRandom(4))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/