"use strict";
var readlineSync = require('readline-sync');

function IsLeapYear(inGivenYear)
{   
    var isALeapYear = false;
    // divisible by 4 but not 100
    if (inGivenYear % 4 ===0 && inGivenYear % 100 !==0) 
    {
        isALeapYear = true;
    }
    // divisile by 400
    else if (inGivenYear % 400 === 0)
    {
        isALeapYear = true;
    }
    
    
    return isALeapYear;
    
    // return false; //hard coded for now
}

// Export my leap year funtion
    module.exports.CheckLeapYear = isALeapYear;
function main()
{
   
    var givenYear = parseInt(readlineSync.question("Enter a yer to check:"));
    var yearIsLeap = IsLeapYear(givenYear);

    if(yearIsLeap === true)
    {console.log(`The year ${givenYear}was a leap year`)}
    else
    {
        console.log(`The year ${givenYear}was not a leap year`)
    }

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
