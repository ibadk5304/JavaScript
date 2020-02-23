"use strict";
var readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{   

    var guestName="";
    var partyGuests=[];//initialize the empty array for party guests 
    // While loops to mask for party guest name until user input q
    while(guestName.toLowerCase() !="q")
    {
        guestName = readlineSync.question("Enter the guest name ('q' to quit):");
        if (guestName.toLowerCase() !="q")
        {
            partyGuests.push(guestName);
        }
    }
    //Sort and print the array nicely
    partyGuests.sort();
    
    for (var i=0;i<partyGuests.length; i++)
    {
        console.log("The sorted guest list is")
        console.log(partyGuests[1]);
    }

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
