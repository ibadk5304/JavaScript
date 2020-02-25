"use strict";
var readlineSync = require('readline-sync');

/*
    Author: Mike
    Date: sept 18, 2019
    Description: 
*/

/* Pseudo code 
    1.Start the program 
    2.prompt var tons input
    3.Promt var stones input
    4.Promt var pounds input 
    5.Prompt var pound input 
    6. Process Total ounces
    7. Process  Total kilos 
    8. process metric tons 
    9.Output         
    10. End of the program 


*/

// DO NOT EDIT: The main function to house our program code 
function main()
{   
    console.log("Imperial To Metric conversion\n");
    // 1. Input and Output
    var numOfTons=parseInt(readlineSync.question("Enter the number of Tons: ")); // "5" 5
    var numOfStones=parseInt(readlineSync.question("Enter the number of Stone: "));
    var numOfPounds=parseInt(readlineSync.question("Enter the number of pounds: "));
    var numberOfOunces=parseInt(readlineSync.question("ENter the number of ounces: "));

    
    

    // 2. Processing
    var totalOunces = (35840*numOfTons) + (224*numOfStones) +(16*numOfPounds)+ numberOfOunces
    var totalKilos = totalOunces/35.274
    var metricTons= parseInt(totalKilos/1000)
    var kilos= parseInt(totalKilos-(metricTons*1000))
    var gram= ((totalKilos*1000)-((metricTons*1000*1000)+(kilos*1000)))

    // var totalOunces = (35840*numOfTons) + (224*numOfStones) +(16*numOfPounds)+ numberOfOunces
    // var totalKilos = totalOunces/35.274
    // var metricTons= parseInt(totalKilos/1000)
    // var kilos= (totalKilos-(metricTons*1000))
    // var kilos2 = parseInt(kilos)
    // var gram= (kilos-kilos2)*1000

    
    // 3. Output
    console.log("\nThe metric weight is "+metricTons+" metric tons,"+kilos+" kilos, and "+gram.toFixed(1)+" grams");
    

    

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}