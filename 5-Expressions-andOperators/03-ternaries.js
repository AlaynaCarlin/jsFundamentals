/*
Ternaries
*/

let x = 6;
x > 0 ? console.log('x is positive') : console.log('x is negative');
// is x is > 0 run 'x is positive, else run 'x is negative'

if (x>0){
    console.log("x is positive");
} else {
    console.log('x is negative');
}

let greeting = 'salutations';

if (greeting.length > 10){
    console.log('that is a long greeting');
} else if (greeting.length == 10){
    console.log('your greeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting');
}

//ternaries are a fast elegant way to do conditional checks
greeting.length>10 ? console.log('that is a ling greeting') :
greeting.length=10 ? console.log('your greeting is exactly 10 characters'):
console.log('what a normal greeting');

