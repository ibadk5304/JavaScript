"use strict";
/*
    Name: Ibad khan
    Date: 23rd Nov 2019
    Description: Battleship. Program 3, Assignment 4
*/

/*
     Pseudo Code
    1.	start the program.============================================================================================
    2.	Create a function to display the letter in target map.
    3.	Read the the file from map.txt and parse it into 2-D array.
    4.	Display the blank target map and call the function for letter.
    5.	Run a for loop for 30 time asking the question and 
        inside the For loop all the works would be completed except lose message.
         *******step 6- 12****** run again and again until it breaks with a condition.
    6.	Firstly, show the remaining missiles each time.
    7.	Ask for letter input and number input where letter match with column and number match with row.
                 *****Do while loop Used*****
    a.	Validate the letter input (A-J) and accept letter in any case.
    b.	Validate number input from 1-10.
    8.	After taking valid input, Run nested for loop of real map which will check the two condition,
        ” first if condition will match the input with column and row, 
        if matches it will have another if and else if statement which will match 1 or 0 inside the actual map.
            a.	If it is 1 ,count a hit and assign X to the position of target ship map.
            b.	If it is 0 ,count a miss and assign O to the position of target ship map.
    9.	Then, two else if statement is used not to change the pre-existing X and O in the target map.
    10.	Finally a else statement used to put a blank spot to the rest of the field in target ship map.
    11.	The nested loop will print each row at a time.
    12.	After printing the updated target map, there is a condition to check the hit count and if it is reaches to 17, 
        break the loop and show the win.
    13.	After 30 attempt if Hit count can not reach to 17, show lose the game.
    14.	End the program ===============================================================================================
*/

var fs = require('fs') 
var parse= require('csv-parse/lib/sync');

var readlineSync = require('readline-sync');

// This function is used for displaying the letter on map
function displayOutputLetter(inUserInputLetter)
{
    var inLineOutputLetter=""; 
    for(var i=0;i<inUserInputLetter.length;i++) // for loop used to set all letter in a same line 
    {   
        inLineOutputLetter += inUserInputLetter[i] + " "; 
    }

    return inLineOutputLetter; // return the whole line of letter (A-J)
}

function main()
{
    
    var mapFile ="map.txt"; // Map file path

    var mapData = fs.readFileSync(mapFile,"utf8"); // Read the map file
    var parseShipMap = parse(mapData);  // parse map file in 2D array
    
    var targetShipMap= parse(mapData); 
    
    var userInputLetters =[" ","A","B","C","D","E","F","G","H","I","J"]; // User input letters stored

    console.log(displayOutputLetter(userInputLetters)); // call the function to display the letters nicely on top*****************

    for(var i=0;i<targetShipMap.length;i++) //for loop to display a blank map before gameplay
    {   
        for(var j=0;j<targetShipMap[i].length;j++)// nested for loop used to go in each cell of line
        {
            targetShipMap[i][j]=" "; 
        }
        console.log(`${i+1} ${targetShipMap[i].join(" ")}`); // show each line after erasing from real map file
        
    }

    var hitCount= 0;
    var missCount=0;
    var attemtResult="";

    var targetShipMap2 = parse(mapData); // this map created to compare ship and water,
    
    console.log(`Let,s play Battleship!!`);

    // for loop for asking 30 times
    for(var h=30;h>0;h--)
    {
        console.log(`You have ${h} missiles to fire to sink all ships}`); // display the remaining missiles
            
        do
        {
            var attemtLetter = readlineSync.question(`Choose your target (Ex: letter A-J):`);

            if
            (
                (attemtLetter.toLowerCase() !== "a") &&
                (attemtLetter.toLowerCase() !== "b") &&
                (attemtLetter.toLowerCase() !== "c") &&
                (attemtLetter.toLowerCase() !== "d") &&
                (attemtLetter.toLowerCase() !== "e") &&
                (attemtLetter.toLowerCase() !== "f") &&
                (attemtLetter.toLowerCase() !== "g") &&
                (attemtLetter.toLowerCase() !== "h") &&
                (attemtLetter.toLowerCase() !== "i") &&
                (attemtLetter.toLowerCase() !== "j")
            )
            {
                console.log(`Invalid, Try Again`)
            }
        }while // ask to re-enter if input is invalid
        (
            // conditions are given
            (attemtLetter.toLowerCase() !== "a") &&
            (attemtLetter.toLowerCase() !== "b") &&
            (attemtLetter.toLowerCase() !== "c") &&
            (attemtLetter.toLowerCase() !== "d") &&
            (attemtLetter.toLowerCase() !== "e") &&
            (attemtLetter.toLowerCase() !== "f") &&
            (attemtLetter.toLowerCase() !== "g") &&
            (attemtLetter.toLowerCase() !== "h") &&
            (attemtLetter.toLowerCase() !== "i") &&
            (attemtLetter.toLowerCase() !== "j")
        );
        
        do
        {
            var attemtNumber = readlineSync.question(`Choose your target (Ex: Number 1-10):`);

            if
            (
                (attemtNumber !== "1") &&  
                (attemtNumber !== "2") &&  
                (attemtNumber !== "3") &&  
                (attemtNumber !== "4") &&  
                (attemtNumber !== "5") &&  
                (attemtNumber !== "6") &&  
                (attemtNumber !== "7") &&  
                (attemtNumber !== "8") &&  
                (attemtNumber !== "9") &&  
                (attemtNumber !== "10")
            )
            {
                console.log(`Invalid, Try Again`)
            }
        }while // ask to re-enter if input is invalid
        (
            // conditions are given
            (attemtNumber !== "1") &&  
            (attemtNumber !== "2") &&  
            (attemtNumber !== "3") &&  
            (attemtNumber !== "4") &&  
            (attemtNumber !== "5") &&  
            (attemtNumber !== "6") &&  
            (attemtNumber !== "7") &&  
            (attemtNumber !== "8") &&  
            (attemtNumber !== "9") &&  
            (attemtNumber !== "10") 
        
        );

        console.log(displayOutputLetter(userInputLetters)); // function called to display map letter on top.*************************
        
        // Both letter case stored
        var userSelectedLetters =["A","B","C","D","E","F","G","H","I","J"];
        var userSelectedLetters2 =["a","b","c","d","e","f","g","h","i","j"];
        
        // run the original ship map
        for(var i=0;i<parseShipMap.length;i++) 
        {   
            for(var j=0;j<parseShipMap[i].length;j++)
            {
                // Condition, match attemt number and letter with the map row and column
                // row is attemt number and column is attempt letter
                if(i===(attemtNumber-1) && (j===userSelectedLetters.indexOf(attemtLetter) || j===userSelectedLetters2.indexOf(attemtLetter)))
                {
                    // then if the attemt position equal 1 it will hit and change it to X
                    if(parseShipMap[i][j]==1)
                    {
                        targetShipMap2[i][j]= "X";
                        hitCount= hitCount +1; // this is used to count the hit
                        attemtResult= "========== Hit!!!";
                    }
                    // if the attemt position equal 0 it will miss and change it to O.
                    else if(parseShipMap[i][j]==0)
                    {
                        targetShipMap2[i][j]= "O";
                        missCount= missCount + 1;
                        attemtResult= "=======Miss=======";
                    }
                }

                // the next two else if statement used not to change the target X or O 
                else if(targetShipMap2[i][j]=== "X")
                {
                    targetShipMap2[i][j]="X";
                }
                else if(targetShipMap2[i][j]=== "O")
                {
                    targetShipMap2[i][j]="O";
                }

                // if the attemt do not match the it will be blank
                else
                {
                    
                    targetShipMap2[i][j]=" ";
                }
            }

            console.log(`${i+1} ${targetShipMap2[i].join(" ")}`); // It will show each row every time
        }
        console.log(attemtResult); // promt to display hit or miss
        
        if(hitCount===17) // If hit count reached to 17, for loop will break and give the win.
        {
            console.log("You sank my entire fleet!");
            console.log(`You had ${hitCount} of 17 hits, which sank all the ships`);
            console.log(`You won, congratulations!`)
            break;
        }

    }

    // after running 30 times if hit count is not 17, display lose the game
    if(hitCount !== 17)
    {
        console.log(`You have 0 missiles remaining\nGAME OVER`);
        console.log(`You had ${hitCount} of 17 hits, but didn't sink all the ships`);
        console.log(`Better luck next time.`);
    }
   
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
