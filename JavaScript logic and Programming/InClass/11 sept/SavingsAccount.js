"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    var balance = 100;
    balance = (balance * 1.05) + 100;
    balance = (balance * 1.05) + 100;
    balance = balance * 1.05;
    console.log("Value: " +balance .toFixed(2) );

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
