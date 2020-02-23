"use strict";
var fs= require('fs');
var parse= require('csv-parse/lib/sync');
var readlineSync = require('readline-sync');
/*
Read in as text file X output whole text 
Read in as CSV and output raw 2-d array
Put in for loop to go over 1 row at  a Time & output 1d array
output like so "You were attacked by a _ "
*/

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // Input file 
    var monsterFile="G:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\TechChecks\\TechCheck6\\monsters.csv";

    // Read in as text file 
    var readMonsters= fs.readFileSync(monsterFile,"utf-8");
   

    // parse csv data into 2-D array 

    var parseMonsters= parse(readMonsters);

    console.log("Welcome to the dungeon attack application where non shall survive! Simply try to live");

    var continueLine = readlineSync.question("Hit any key to continue ('Q' or 'q' to quit) ");

    // Prompt to a valid user input

    while(continueLine.toUpperCase() != "Q")
    {
        do
        {   
            var hitPoint = readlineSync.question("Please enter you initial hit points(1-200): ");
            if(isNaN(hitPoint) || hitPoint < 0 || hitPoint > 200)
            {
                console.log("You do not listen very well do you? Think you are going to survive this dungeon")
            }
        }while(isNaN(hitPoint) || hitPoint < 0 || hitPoint > 200)

        console.log("============================================================================")

        for(var i=0; i<parseMonsters.length;i++)
        {
            hitPoint= hitPoint-(parseMonsters[i][2]);
            if(hitPoint < 0)
            {
                hitPoint=0;
            }
            
            console.log(`you are attacked by a ${parseMonsters[i][0]} with a ${parseMonsters[i][1]} attack for ${parseMonsters[i][2]} damage. Current hit point is ${hitPoint} `);
            if(hitPoint == 0)
            {
                console.log("That was sad and brief. At least the elf feels better about himself!!! ");
                break;
            }
        }
    }

    
    
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
