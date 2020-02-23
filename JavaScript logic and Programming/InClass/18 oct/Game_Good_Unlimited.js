"use strict";
var readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    console.log("Welcome to my game!");
// Input (Hard coded)
//var n = "";
var t = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(t); // cheat
//var t= 15;
//Processing
var guess = 0;


while(guess != t)
{
	var guess = parseInt(readlineSync.question("Enter a number: "));
	
	if (guess > t)
	{
		console.log("Lower");
	} 
	else if (guess < t)
	{
		console.log("Higher");
	} 
	else if (guess == t)
	{
		console.log("You got it!");
		//break;
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
