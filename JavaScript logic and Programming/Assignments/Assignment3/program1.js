"use strict";
/*
Author: Ibad Khan
Date: Oct 11,2019
Description:
Design and write a program that accepts the number of hours worked on each of five work days from the user, then displays different information calculated about those entries as output. 
Your solution should demonstrate an understanding of how to apply list and looping concepts in a program that should:
•	Include a flowchart that clearly shows all the paths of execution that will exist within your designed solution to this problem.
•	Prompt the user to enter the five daily hours worked amounts, and store them in the program. 
•	Determine the day(s) on which the most hours were worked and display the day(s) and hours onscreen. 
•	Calculate and display both the total and the daily average of hours worked.
•	Display a list of all days that had insufficient hours, which is defined as less than 7 hours.

Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (loops and lists).
*/
/*
    Pseudo code
    1.Start the Program
    2. Create a funtion called timesheet.
    3. Promt for the input.
    4. Find the maximum hour by using for loop
    5. Total number of hours.
    6. Average hours.
    7. Days worked <7 hours.
    8. Call the function in main function.
    9. Output will display.
    10. End the program.


*/
var readlineSync = require('readline-sync');

function timesheet()
{
    var dayNumber= [];
    var maxHour = 0;
    var dailyHours=0;
    for ( var i=1; i<6; i++)
    {
    
    do
    {   
        dailyHours = parseFloat(readlineSync.question(`Enter hours worked on Day #${i} : `));
    }while(isNaN(dailyHours));
    
    dayNumber.push(dailyHours);
    }
    // find max hours
    for(var i=0; i< dayNumber.length; i++)
    {
        if(maxHour < dayNumber[i])
        {
            maxHour = dayNumber[i];
        }
    }
   console.log("---------------------------------------------------------------------------")

    for ( var i=0; i<5; i++)
    {
       
       if(maxHour===dayNumber[i])
       {   
           console.log(`The most hours worked was on:`)
           console.log("Day #"+(i+1)+" when you worked "+dayNumber[i]+" hours.");
       }
    }
    console.log("---------------------------------------------------------------------------")

    
    //Total number of hours

    var totalNumber=0;
    for (var i=0;i<dayNumber.length;i++)
    {
        totalNumber += parseInt(dayNumber[i]);
        
        
    }

    console.log("Total number of hours worked was: "+totalNumber);

    // Average number of hours worked
    var averageNumber = totalNumber/(dayNumber.length);

    console.log("The average number of hours worked each day was: "+averageNumber);


    console.log("---------------------------------------------------------------------------")

    // days worked less than seven hours 
    console.log("Days you slacked off (i.e. worked less than 7 hours):")
    for(var i=0;i<dayNumber.length;i++)
    {
        if(dayNumber[i] <7)
        console.log("day #"+(i+1)+": "+dayNumber[i]+" hours");
    }

    
}

function main()
{   
    
    //Call the total function
    timesheet();    
   
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
