"use strict";
var readlineSync = require('readline-sync');
/*Pseudo Code
Start the program 
Input how many pound of orange customer want 
Start use of if statement 
Process the calculation (1.99* number of pounds)+ 7.5
Display the final cost
else 
reduce the shiping cost 
Display the out put 
end the program

*/
function main()
{
    var poundsOfOrange= parseFloat(readlineSync.question("Please enter the full amount of weekly Salary: "));

    const costPerPound=1.99;
    const shippingCost=7.50;
    var finalCost= (poundsOfOrange*costPerPound) + shippingCost;
    if(finalCost>=100){
        finalCost=finalCost-1.50;
    }

    console.log("The final cost: "+finalCost.toFixed(2));
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
