/*

The use of the objects in the js
using this 
*/

const person = {
	name: "sam",
	work() {
		return "Phd"
	}

};

const jobs = [
{id:1,isActive: true},
{id:2, isActive: true},
{id:3, isActive: false}
];

const activeJobs = jobs.filter(function(job) {return job.isActive;});
console.log(activeJobs)



//combining the objects 

const obj1 = {
	first: 'test',
	second: 'second',
}

const obj2 = {
	third:'third'
}
const combine_obj = {...obj1,...obj2,fourth:'fourth'};

console.log(combine_obj)