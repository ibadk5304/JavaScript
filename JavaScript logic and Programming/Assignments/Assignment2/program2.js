/*
Author: Ibad Khan
Date: Oct 16,2019
Description: Erewhon Mobile charges cellular customers a rate based on the total amount of data used by a customer in the billing period. For simplicity, customers are charge based on which range their total data usage falls within. Note, it is not a cumulative charge; your program will figure out which single range the usage falls into, then calculate the cost based on that range’s cost. 
Total Data Usage 	Rate of Charge 
Up to and including 200Mb 	$20.00 flat rate 
Over 200Mb and up to and including 500Mb 	$0.105 per Mb 
Over 500Mb and up to and including 1Gb 	$0.110 per Mb 
Over 1Gb 	$118.00 flat rate 

*/
    
/*
Pseudo code
1. Start the program
2. Taking input of data usage 
3.Promt to add a function called dataChargeCalculator.
4.In processing, four condition.
5. Output the Total charge 
6. End the program
*/
var readlineSync = require('readline-sync');

function dataChargeCalculator(inDataUsage)

{
    if(inDataUsage<=200)
    {
        totalCharge= 20; 
    }

    else if(inDataUsage>200 && inDataUsage<=500)
    {
        totalCharge= inDataUsage*0.105;
    }

    else if (inDataUsage>500 && inDataUsage<=1000)
    {
        totalCharge= inDataUsage*0.110;
    }

    else
    {
        totalCharge= 118;
    }
    return totalCharge;
}



function main()
{   //Input
    var dataUsage = parseInt(readlineSync.question("\nEnter data usage (MB): "));
   


    var totalCharge= dataChargeCalculator(dataUsage);
    

    //Output
    console.log(`\nTotal charge is: $${totalCharge.toFixed(2)} \n`);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
