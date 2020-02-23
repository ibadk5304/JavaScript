"use strict";

/*
Author: Ibad Khan
Date: Oct 18,2019
Description:Write a program that computes monthly insurance according to the following schedule: 
If you are ‘Male’ and your age is 	But less than 	the price of the vehicle multiplied by 
15 or greater 	25 	25% / 12 
25 	40 	17% / 12 
40 	70 	10% / 12 
If you are ‘Female’ and your age is 	But less than 	the price of the vehicle multiplied by 
15 or greater 	25 	20% / 12 
25 	40 	15% / 12 
40 	70 	10% / 12 
 
First, create a flowchart that clearly shows all of the paths of execution that will exist within your designed solution to this problem. Then, write a console application that will input the sex and price of vehicle, and then output the corresponding monthly insurance amount. 
Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (decision structures).


*/
var readlineSync = require('readline-sync');

function numericGrade(in_course_name)
{
    
    
    
    var letterGrade = 
    readlineSync.question(`Please enter a letter grade for ${in_course_name}: `).toUpperCase();
var modifier = readlineSync.question("Please enter a modifier (+, - or nothing) : ");

     var numericGrade = 0.0;

    // Determine base numeric value of the grade
    if(letterGrade == "A")
    {
        numericGrade = 4.0;
    }
    else if(letterGrade == "B")
    {
        numericGrade = 3.0;
    }
    else if(letterGrade == "C")
    {
        numericGrade = 2.0;
    }
    else if(letterGrade == "D")
    {
        numericGrade = 1.0;
    }
    else if(letterGrade == "F")
    {
        numericGrade = 0.0;
    }
    else
    {
        console.log("You entered an invalid letter grade.");
    }
    
    // Determine whether to apply a modifier
    if(modifier == "+")
    {
        if(letterGrade != "A" && letterGrade != "F") // Plus is not valid on A or F
        {
            numericGrade += 0.3;
        }
    }
    else if(modifier == "-")
    {
        if(letterGrade != "F")     // Minus is not valid on F
        {
            numericGrade -= 0.3;
        }
    }
    // console.log(`The numeric value is: ${numericGrade.toFixed(1)}`);

    return numericGrade;
    // Output final message and result, with formatting

    
    
}


////////////////////////////////////////////
// Tech Check 4 - Provided Starter File
////////////////////////////////////////////

//FUNCTION
function main()
{
    console.log("Grade Point Calculator\n");
    console.log("Valid letter grades that can be entered: A, B, C, D, F.");
    console.log("Valid grade modifiers are +, - or nothing.");
    console.log("All letter grades except F can include a + or - symbol.");
    console.log("Calculated grade point value cannot exceed 4.0.\n");

    //Grade store here
    var in_course_name="Prog1700";
    var grade1 = numericGrade(in_course_name);

    var in_course_name="NETW1700";
    var grade2 = numericGrade(in_course_name);

    var in_course_name="OSYS1200";
    var grade3 = numericGrade(in_course_name);

    var in_course_name="WEBD1000";
    var grade4 = numericGrade(in_course_name);

    var in_course_name="COMM1700";
    var grade5 = numericGrade(in_course_name);

    var in_course_name="DBAS1007";
    var grade6 = numericGrade(in_course_name);
    // var in_course_name="NETW1700";
    // numericGrade(in_course_name);
    console.log("The numeric value for PROG1700:"+grade1);
    console.log("The numeric value for NETW1700:"+grade2);
    console.log("The numeric value for OSYS1200:"+grade3);
    console.log("The numeric value for WEBD1000:"+grade4);
    console.log("The numeric value for COMM1700:"+grade5);
    console.log("The numeric value for DBAS1007:"+grade6);

    var averageGrade= (grade1+grade2+grade3+grade4+grade5+grade6)/6;
    
    console.log(`Your grade point average for the semester: ${averageGrade.toFixed(1)}`);
    
}

// PROGRAM STARTS HERE
if (require.main === module)
{
    main();
}