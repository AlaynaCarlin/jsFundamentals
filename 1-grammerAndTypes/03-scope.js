/*
Scope

1grammar and types
    03-scope
*/

/*
what is scope?

JS has both Local and Global scope
*/

//example 1
var x = 12;//global scope, this exists anywhere (even within the function)

// variables that you write within a function only exist within that function
function scope (){
    var x = 33;// local scope, this only exists within this function
    var y = 10;
    console.log(x);
}
scope();// logs 33
// console.log(y);
console.log(x);//logs 12

//example 2
var x = 12;

function scope(){ 
    x=33; // we reassigned the value of x here so it is still a globally scoped var
    console.log(x);
}

scope();//33
console.log(x);//33

//example 3

var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x);//3
    }
    scopeInner();
    console.log(x);//2
}
scope();
console.log(x);//1

//example 4 contrast w/ 5
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x);//45
    }
    console.log(x);//33
}

scope();
console.log(x);//12

//example 5 contrast w/ 4
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;// only difference- var instead of let
        console.log(x);//45
    }
    console.log(x);//45 -> var doesn't obey 'block' scope
}

scope();
console.log(x);//12