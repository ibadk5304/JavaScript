"use strict";
/*
Author: Ibad khan
Date: 25 Oct 2019
Description: Tech check 3. Grade point Calculator.
*/

var readlineSync = require('readline-sync');

function getHighestCommonDivisor(inNumber1,inNumber2)
{
    var hcd=0;
    for (var i=1; i<=inNumber1 && i<= inNumber2 ;i++)
    {
        if(inNumber1 % i == 0 && inNumber2%i == 0)
        {
            var hcd = i;
        } 
    }
    return hcd;
}

function main()
{   // Used do while 
    do
    {
        var regEx= /^\d+$/;
    var number1 = readlineSync.question("Enter the first number: ");
    while(!regEx.test(number1))
    {   
        console.log("Error! Enter a valid first number.")
        number1 = readlineSync.question("Enter the first number: ");
    }
    var number2 = readlineSync.question("Enter the second number: ");
    
    while(!regEx.test(number2))
    {
        console.log("Error! Enter a valid second number.")
        number2 = readlineSync.question("Enter the second number: ");
    
    }
    var hcd = getHighestCommonDivisor(number1,number2)
    
    console.log(`The Highst Common Divisor of ${number1} and ${number2} is ${hcd}.`);

    var tryAgain = readlineSync.question("\nWould you like to try again? (y/n)");
    
    }while (tryAgain.toUpperCase() == "Y")
    
    

    console.log("\nThank you for using the HCD Program");

    
    
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
