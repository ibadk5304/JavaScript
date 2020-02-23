"use strict";

// DO NOT EDIT: The main function to house our program code 
var leapYearChecker = require("./leap-year")

function main()
{
    console.log(leapYearChecker.CheckLeapYear(2000));

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
