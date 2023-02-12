/*
array in the js with methods
*/


const colors = ['red','green','blue'];

const items = colors.map(function(color)
{
 return '</li>' + color + '</li>';
})

console.log(items)

const items0 = colors.map(color => '<li>' + color + '</li>');

console.log(items0)


let arr1 = ['car','bike','gadgets'];
let arr2 = ['food','sleep','peace'];

let combined1 = arr1.concat(arr2);
let combined2 = [...arr1,...arr2];

console.log(combined1);
console.log(combined2);