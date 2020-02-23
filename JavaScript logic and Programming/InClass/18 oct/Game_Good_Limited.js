"use strict";

var readlineSync = require('readline-sync');

// DO NOT EDIT: The main function to house our program code 
function main()
{
    console.log("Welcome to my game!");
// Input (Hard coded)
var n = 10;
// var t = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var t= 15;
//Processing

for(var i = 0; i < n; i++)
{
	var guess = parseInt(readlineSync.question("Enter a number: "));
	
	if (guess < t)
	{
		console.log("Higher");
	} 
	else if (guess > t)
	{
		console.log("Lower");
	} 
	else if (guess == t)
	{
		console.log("You got it!");
		break;
	}
}
//Output

console.log("Game Over");
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}

