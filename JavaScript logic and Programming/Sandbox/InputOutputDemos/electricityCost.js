"use strict";
var readlineSync = require('readline-sync');

/*
    Author: Mike
    Date: sept 18, 2019
    Description: The cost of the electricity used by a device is given by the formulacost of electricity (in dollars)  =  wattage of device * hours used1000 * cost per kWh (in cents)wherekWh is an abbreviation for “kilowatt hour.” The cost per kWh of electricity varies with locality. On March 1, 2012, the average cost of electricity for a residential customer in the United States was 11.76¢ per kWh. Based on this information, write a console program that allows the user to calculate the cost of operating an electrical devic
*/

/*
    Pseudocode is here

*/
// DO NOT EDIT: The main function to house our program code 
function main()
{
    /*
    //1.Input and variables
    const COST_PER_KILOWATT_HOUR = 11.76; //in cent
    var deviceWattage =100; // hard-coded for now
    var deviceHoursUsed= 3;

    //2.Processing 
    var electricityCost = (deviceWattage * deviceHoursUsed) / (1000 * COST_PER_KILOWATT_HOUR);


    //3. Output
    console.log(`The total cost of running the device is: $${electricityCost.tofixed(2)}`);
    */


     //1.Input and variables
     const COST_PER_KILOWATT_HOUR = 11.76; //in cent
     var deviceWattage = parseInt(readlineSync.question("Enter the device wattage")); // hard-coded for now
     var deviceHoursUsed= parseInt(readlineSync.question("Enter the hours used: "));
 
     //2.Processing 
     var electricityCost = (deviceWattage * deviceHoursUsed) / (1000 * COST_PER_KILOWATT_HOUR);
 
 
     //3. Output
     console.log(`The total cost of running the device is: $${electricityCost.toFixed(2)}`);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
