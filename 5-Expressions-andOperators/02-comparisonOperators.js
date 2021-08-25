/*
Comparison Operators
*/
//equality comparison operator
console.log('3' == 3); //true, different type, same value
console.log(3 == '4'); //false, different type and --different value
console.log('3'=='5'); //flase, same type,-- different value


//strict equality comparison operator
console.log(3 === 3);//true- type and value must match
console.log('3'===3);//false

//not equal comparison operator
console.log('3' != 4); //true, because different values
console.log('3' != 3); //false, be the values are the same

// strict !== comparison operator
console.log('3' !== 3);//true, because the types are different
console.log(3 !== 3);//false, because they are the same in type and value

// greater then
console.log(3>2);//true
console.log(2>3);//false

//less than
console.log(2<3);//true
console.log(3<2);//false

//greater than or equal to
console.log(3 >= 2);//true
console.log(3>=3);//true

//less than or equal to
console.log(2<=3);//true
console.log(3<=2);//false

//And (both expressions on either side of the operator must be true for 'and' to return true)
console.log(1<2 && 3>0); //true
console.log(2<1 && 3>0); //false

//or (either expression on one side of the operator must be true for or to return true)
console.log(1<2 || 3<0); //true, single true so the entire expression is true
console.log(2<1 || 3<0); //false, neiter one is true so the entire expression is false

console.log('end of operator explenations');


//complex types (obj, arrays, functions) equality cares about sameness of the thing not contents
let obj = {key:'test'};
console.log(obj == {key: 'test'});//false because it is not comparing the values. the two objects look the same but because they are not the same object
// (they're just duplicates) the expresion returns false/

console.log(obj == obj);//true because we are talking about the exact same object

let arr =[1,2,3,4];
console.log(arr == [1,2,3,4]);//false
console.log(arr == arr);//true



console.log('my work');

let c1 = 3;
let c2 = 5;
let c3 = 7;


console.log(c1 == 3);
console.log(c1 == c2);

console.log(c1 != c2);
console.log(c1 != c1);

console.log(c1 === c1);
console.log(c1 === '3');

console.log(c1 !== '3');
console.log(c2 !== 5);

console.log(c3 > c2);
console.log(c1 > c3);

console.log(c1 >= c1);
console.log(c1 >= c2);

console.log(c1 < c2);
console.log(c3 < c2);

console.log(c1 <= c2);
console.log(c3 <= c1);

if (c1 == 3 && c2 < c3){
    console.log('&& both are true');
}

if (c1 === c2 || c1 !== c2){
    console.log('|| or, one of them is true');
}











