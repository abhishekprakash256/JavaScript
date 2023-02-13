/*

The use of the objects 
primitive are copied by value
and the objects are copied by refrence 

*/

let x = 6;
let y = x ;


x = 10;
console.log(x);
console.log(y);


let a = {value:3};
let b = a ;

a.value = 4;

console.log(a);
console.log(b)