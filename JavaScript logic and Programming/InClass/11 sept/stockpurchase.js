"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    var cost_per_share = 25.625;
    var number_of_shares = 400;

    var totalShare = cost_per_share * number_of_shares;

    console.log("The value: " +totalShare);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
