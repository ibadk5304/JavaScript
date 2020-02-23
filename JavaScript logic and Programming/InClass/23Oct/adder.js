"use strict";
var readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    var regEx = /^\d+$/;
    do
    {
        var number_one = readlineSync.question("Enter the first number: ");

    var sum= number_one + number_two;
    }while(!regEx.test(number_one))

    do
    {
        var number_two = readlineSync.question("Enter the second number: ");

    
    }while(!regEx.test(number_two));

    var sum= parseInt(number_one) + parseInt(number_two);

    console.log(`The total is ${sum}`);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
