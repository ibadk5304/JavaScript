"use strict";
var readlineSync = require('readline-sync');

/*
    Author: Mike
    Date: sept 18, 2019
    Description: Hipster’s Local Vinyl Records sell and hand-deliver vinyl records to their customers. Delivery is charged at a rate of $15 per kilometer. 
All purchases are subject to a 14% sales tax. 

Because this store loves retro technology, you have been asked to develop a console application solution that will enable the company’s retail staff to calculate receipts. Begin by designing your solution to this problem in pseudocode, which will be submitted along with the program. The program user must be able to input the customer's name, the number of kilometers distance, and the cost of any records purchased. Once the input is provided, the program will display the customer's name and three calculated costs: delivery cost, records cost (plus tax) and total cost, as shown below.

*/

/*dfsdf
    1. Program start
    2. Prompt var name is Joe cool
    3. Promt var the number Kilometer for deliver
    4. Promt var cost of purchaseBeforeTax 
    5. Prompt Output the customer order details
    6. Calculate delivery cost $15 * number of KM
    7. calculate puchaseAfterTax by adding 15% tax
    8. calculate total cost by doing sum Purchase Cost+ Delivery cost
*/
// DO NOT EDIT: The main function to house our program code 
function main()
{
   

    // 1. Input and variables
    console.log("Hipster,s Local Vinyl Records - Customers Order Details\n");
    var name= readlineSync.question("Enter the customer,s name: ");
    var distanceKilometer =readlineSync.question("Enter the distance in kilometers for delivery: ");
    var costPurchaseBeforeTax= readlineSync.question("Enter the cost of records puchased: ");
    

    // 2. Processing
    var deliveryCost = 15* distanceKilometer;
    var costPurchaseAfterTax = costPurchaseBeforeTax * 1.14;
    var totalCost = deliveryCost +costPurchaseAfterTax;

    
    // 3. Output
    

    console.log("\nPurchase summary for "+name);
    console.log("Delivery Cost: $"+deliveryCost);
    console.log("Purchase Cost: $"+costPurchaseAfterTax.toFixed(2));
    console.log("Total Cost: $"+totalCost.toFixed(2));
    


}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
