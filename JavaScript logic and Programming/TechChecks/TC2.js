"use strict";
/*
    Author: IBAD KHAN
    Date: sept 23, 2019
    Description:
*/

var readlineSync = require('readline-sync');
function main()
{
   // 1. Input and variables
   console.log("Tax withholding calculator\n");
   var fullWeeklySalary = readlineSync.question("Please enter the full amount of weekly Salary: ");
   var numberOfDependents = readlineSync.question("How many dependents do you have?: ");

   // 2. Processing 
   var provincialTaxRate = 0.06;
   var provincialTax = fullWeeklySalary * provincialTaxRate;
   var federalTaxRate = 0.25;
   var federalTax = fullWeeklySalary * federalTaxRate;
   var totalTax = provincialTax + federalTax;

   var dependentTaxDuductionRate = 0.02;
   var dependentTaxDeduction  = fullWeeklySalary * dependentTaxDuductionRate * numberOfDependents;
   var actualTax= totalTax-dependentTaxDeduction;
   var totalPay = fullWeeklySalary-actualTax;

   // 3. Output
  
//    console.log("Please enter the full amoint of your weekly salary: "+fullWeeklySalary);
//    console.log("How many dependents do you have?:\n"+numberOfDependents);
   console.log("\nProvincial tax withheld: $"+provincialTax);
   console.log("Federal Tax withheld: $"+federalTax);
   console.log("Dependent deduction for"+numberOfDependents+" dependents: $"+dependentTaxDeduction);
   console.log("Total withheld: $"+actualTax);
   console.log("Total take-Home Pay: $"+totalPay);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
