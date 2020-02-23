"use strict";
var readlineSync = require('readline-sync');

function findLeapyear(in_year)
{
    if ((in_year % 4===0)&& in_year %100 !=0|| in_year%400===0){
        console.log("The"+in_year+" is a leap year");
    }
    else{
        console.log("The"+in_year+" is not a leap year");
    }
    return;
}
function main()
{
    var in_year=parseInt(readlineSync.question("Enter the year "));
    findLeapyear(in_year);
    //processing



}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
