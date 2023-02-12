

//make a object 

const bike = {
	speed : 50,
	weight: 200,
	color : "red",
	acclerate: function()
	{
		return 10;
	}
}



console.log(bike.acclerate());

//using the factory function 

function accleration(speed) 
{
	return {
		speed,
		val: function()
		{
			console.log(50);
		}
	};
}

const newCar = accleration(2)
console.log(newCar.val())


//constructor function 
//use the upper case in naming 


function Circle(radius)
{
	this.radius = radius,
	this.draw = function ()
	{
		console.log('draw');
	}
};

const another = new Circle(1);


//every object has a constructore object that is used 