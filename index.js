function add(a, b) {
    console.log(a + b);
}

add(5, 10)

// Arguments are the value you pass in
//Parameters are the named variables inside the function that recieve.

function sub(x, y) {
    console.log(x - y)
}

sub(10, 5)

function foo(z = 3) {
    console.log(z)
}

foo(undefined)

function example(a,b,c) {       //This names the function and gives it parameters
    console.log(a + b + c)      //This tells the parameters what to do
}

example(10,5,3)                 //This gives the parameters values

console.log('example = ' + example.length) //.length checks the amount of parameters

//if (example.length == 1) {
//    return example(a, b, c)
//}

function foof(x,y = 10) {
    console.log(x)
}

console.log(foof.length);


console.log("Break")

// Function with 3 parameters and console.log length inside of it
function hello(x,y,z) {
    console.log(arguments.length) //arguments.length looks at the number of values, whereas hello.length would look at the number of parameters.
}

hello(5)

// function foo(...args) {
//     console.log(args[3])
// }

// var arr = [1,2,3,4,5]

// foo(...arr)

function foo(x,y,z,d, ...args) {
    return console.log(x,y,z,d, args) //Args will be an array in this case.
}

foo(1,2,3,4,5,6,7)

console.log("Break")

function asd(...args) { // [1]
    console.log(args[5]) // [1a]
}

var arr = [1,2,3,4,5,6,7] // [2]

asd(...arr)

/* ASD is defined as an array prior [1], which calls the fifth value in the ARR statement [1a]. 
So once ASD calls the ARR variable, it becomes an array which then calls ARR's fifth value. [2]  */

let arr1 = [1,2,3]
let arr2 = [...arr1,4,5,6] 

console.log(arr2)

console.log("Break")

function one(...args) {
    console.log(args[5])
}

var two = [20,30,40,50,60,70]

one(...two)

