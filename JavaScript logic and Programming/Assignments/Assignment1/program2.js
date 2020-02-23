"use strict";
var readlineSync = require('readline-sync');

/*
    Author: Mike
    Date: sept 18, 2019
    Description: 
*/

/*
    1.Start the program 
    2. Prompt var amountLoan is 
    3. Prompt var parseFloat interestRate is
    4. Prompt var numberOfYears is
    5. process var i= interestRate/5200
    6. process var weeklyPayment = (i*amountLoan)/((1-{1+i})^-52*numberOfYears)
    7. Output Enter the amount of Loan, interest rate, number of Years
    8. Output the weekly payment 
    9. End of the program 


*/


// DO NOT EDIT: The main function to house our program code 
function main()
{    console.log("Weekly Loan Calculator\n");
    // 1. Input and Output
    var amountLoan= parseInt(readlineSync.question("Enter the amount of loan: "));
    var interestRate=parseFloat(readlineSync.question("Enter the interst rate (%): "));
    var numberOfYears=parseInt(readlineSync.question("Enter the number of years: "));

    

    //2. Processing
    // var interest=(interestRate/5200);
    // var step1=(1+interest)**(-(52*numberOfYears));
    // var weeklyPayment = (interest*amountLoan)/(1-step1);

    var i=((interestRate/5200));
    //var step1=parseInt((1+i)**(-(52*numberOfYears)));
    var weeklyPayment = (i*amountLoan)/(1-((1+i)**(-52*(numberOfYears))));

    
    // 3. Output

   

    console.log("\nYour weekly payment will be:  $"+weeklyPayment.toFixed(2));
    

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}