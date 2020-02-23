"use strict";
var readlinesync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 
function main()
{
    // Input and variables 
    //var slicesPerSecond = 350;
    var slicesPerSecond = readlinesync.question("slices per second: ");
    //Processing
    var slicesPerDay = slicesPerSecond *60 *60 * 24;

    // Output
    console.log("americans eat" +slicesPerDay+ "slices a day");
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
