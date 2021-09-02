/*
Arrow Functions
*/

//normal function declaration
function coffee(){
    return 'coffee is Goooooood!!!!!';
}

//normal function expression
// this function is un-named. to call an un-named function you use the name of the variable 
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

// arrow functions are *-always-* anonymous
//arrow function expression
// arrow functions do not get hoisted
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3,2));
console.log(animals(0,0));

//concise vs. block body
// concise body
let apples = x => `there are ${x} apples`
console.log(apples(10));

//block body-- must have curly braces and the keyWord return because we stretched it to more than one line
let bananas = (x) => {
    return `There are ${x} bananas`
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function




