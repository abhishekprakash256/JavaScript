/*
object oriented prograaming in JS

*/

/*

the four concepts of prograaming are 
- encaplusation
- abstraction
- inheritance 
- polymorphism

the type of simple programming is proceduarl programming 
with using the funcitions 
the so much interdependency of the code 

with the object oriented programing we comnbined all the concepts in the one 
combined as functions and methids the combining of the properteies in called as encapsulation

The best funcntion are functon with no paramaters

*/

//example 


let baseSalary = 3000;
let overTime = 20 ;
let rate = 24;

function getWage(salary,overtime,rate)
{
	return baseSalary + (overTime * rate)
}


console.log(getWage(baseSalary,overTime,rate));

//make the above code with oops concepts 

let employee = {
	baseSalary : 4000,
	overTime : 20,
	rate : 25 ,

	getWage: function()
	{
		return this.baseSalary + (this.overTime * this.rate);
	}
}

let res = employee.getWage();
console.log(res);