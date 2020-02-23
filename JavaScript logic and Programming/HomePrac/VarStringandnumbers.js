"use strict";
 //var readlineSync = require("readline-sync");
function main()
{
var name = readlineSync.question("What is your name?");
console.log(name);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
