/*
HOISTING
*/
//hoisting-- a var is pulled above where it has been logged, but assigned a value after

//example 1
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown
var scissors;
console.log(scissors);
scissors = 'blue';

//example 2

function hoistTest(){
    console.log(testVar);//undefined
    var testVar = 10;
    console.log(testVar);//10
}

hoistTest();

//example 2 breakdown:
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();
