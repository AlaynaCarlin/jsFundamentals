/*
FUNCTIONS
*/

//general ideas: at their broadest level, functions do the following
//1) they take some input which the function will handle/process
//2) they process the input given to them
//3) they usually, but not always, return some value
//4) they can be invoked (used) as many times as we want, cutting down on code repetitio

//example 1     it will take a number as input
function newFunc(num){
    return num + 1; // processes the input and returns a value
}
//                 input
console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));
// we invoked our function 4 times

// example 2
function sentence(firstName, lastName){
    return `My first name ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Alayna', 'Carlin'));
console.log(sentence('Tyler', 'Shelton'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);

//let's build a function that takes a complex type--an array in this case, and
// console.logs each item in the input array

let arr = [1,true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc (inputArr){
    for (let element of inputArr){
    console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);





