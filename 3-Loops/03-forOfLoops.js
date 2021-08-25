/*
FOR OF LOOPS
*/

//of requires that your 'thing' that you're looping through be iterable--that means it needs to be numbered

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};// broken code

// for (item of student){
//     console.log(item);
// }

//for of grabs the value of the thing not its number or key

let catArray = ['tabby','british shorthair', 'burmese', 'main coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}