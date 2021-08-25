/*
ARRAYS
*/

//what is an array
// has [] brackets
//can hold multiple data types,ordered
//arrays can list data types ina an ordered numbered way

// we have contained strings, number, boolean, and an array in this array
let students =['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:  0           1         2      3     4    5      6
console.log(typeof students);//type of doesn't tell me my variable is an array -> object
console.log(students instanceof Array);// instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let names = students[6][1];
console.log(names)
console.log(names[0]);
console.log(`Hello ${names}, you look nice today!`);

//recall for-of loop -> values of the array
let food = ['pecan pie', 'shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

    // for (f of food){
    //     console.log(f+ ' is amazing');
    // }

// array methods
// push lets us add elements to an array that already exists
//added to the end of our array
    // food.push('Pizza');
    // console.log(food);

//splice lets us take an array, remove some stuff, and add some stuff in it's place
//asks for an insertions point, how many things to remove, then the item/items to add
//(inserted at space 1, removed 1 item, replaced it with Bananas)
    // food.splice(1, 1, 'Bananas');
    // console.log(food);
//(insert at space 2, remove 0 items, insert sweet potato pie)
    // food.splice(2,0,'sweet potato pie');
    // console.log(food);

//pop removes the last element of an array
    // food.pop();
    // console.log(food);

// food = food.slice(2,5);  //first number is the first element to slice from the array, while 
// the second number is the stop position (no to be included)
    // console.log(food);

//forEach allows us to iterate with loops specifically, and we ca directly grab both the elements
//  and their index numbers

    // food.forEach((f)=> console.log(f));

    // food.forEach((food, index) => {
    //     console.log(food);
    //     console.log(index);
    // })
//`` = string interpolation

//we console.log the value of food and index 
food.forEach((food, index)=>{
    console.log(`The ${food} food in our array is at position ${index} `);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'THe Watchmen', 'THe Sound of Music'];

movies.push('The Force Awakens');
// console.log(movies);

movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
// console.log(movies);

// movie is the element in our array and then we console.log each element
movies.forEach(movie => console.log(movie));

console.log(movies.length);

// let's do the following with an array
//we will check  if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
// using a method only, let's print the values of the newly arranged array

let arr = new Array (1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}