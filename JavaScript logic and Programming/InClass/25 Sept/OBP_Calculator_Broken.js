"use strict";
var readlineSync = require('readline-sync');

/*
Student Name:   [Enter name here]
Date:           [Enter date here]  
Program Title:  Baseball OBP Calculator - BROKEN
Description:    Debugging and conditionals practice
*/

function main() // <-- Don't change this line!
{   
	console.log("Baseball On-Base Percentage Calculator");
    console.log("\nThis program will calculate a baseball player's OBP based on");
    console.log("how many at-bats, hits, walks, hit by pitch, and sacrifice flies");
    console.log("they have had.\n");
    
    //bug here
	var atBats = parseInt(readlineSync.question("Enter the number of at-bats: "));
	var hits = parseInt(readlineSync.question("Enter the number of hits: "));
	var walks = parseInt(readlineSync.question("Enter the number of walks: "));
	var hitByPitches = parseInt(readlineSync.question("Enter the number of hit by pitches: "));
	var sacrificeFlies = parseInt(readlineSync.question("Enter the number of sacrifice flies: "));
	
	//bug here
	var timesOnBase = hits + walks + hitByPitches;
	var totalAtBats = atBats + walks + hitByPitches + sacrificeFlies + hits;
	
	var onBasePercentage = timesOnBase / totalAtBats;
	
	
	console.log(`\nThe player's OBP is ${onBasePercentage.toFixed(3)} for the year.`);
	if (onBasePercentage > 0.482 ) {
		console.log("congratulations");
	  }
	
}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}