/*
The absiastraction is the hiding of the mechanism 
helps the simpler interface 
reduce the impact of change 

inheritance is the mechnaism of the redudance code 
getting the property from the other objects 
emilinate the redudacny 

polymorphism 
making a method that is used by different classes but with 
variation in the functionality 

*/

const circle = {
	radius :1,
	location: {
		x:1,
		y:1
	},

	draw: function()
	{
		console.log("draw");
	}


}

circle.draw();