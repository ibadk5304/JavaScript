"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    var fixed_costs = 5000;
    var price_per_unit = 8;
    var cost_per_unit = 6;
    var break_even_point= fixed_costs/(price_per_unit - cost_per_unit);
    console.log("break even point: " +break_even_point );
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
