"use strict";
/*
Author: mike, c
Date: Sept 16,2019
Description

*/
var readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
   /* //Input and variables
    var originalBill = 85;
    var tax = 0.15;
    var tip =0.20;


    // Processing 
    var tax= originalBill * 0.15;
    var tip= originalBill * 0.20;
    var total= originalBill + tax + tip;
    
    //Output
    console.log( "Your original bill amount is: " +originalBill);
    console.log( "Your tax is: " +tax);
    console.log( "Your tip is: " +tip);
    console.log( "Your total is: " +total);

    */

      //Input and variables
      var originalBill =parseFloat(readlineSync.question("Your original Bill: ")) ;
      var tax = 0.15;
      var tip =0.20;
  
  
      // Processing 
      var tax= originalBill * 0.15;
      var tip= originalBill * 0.20;
      var total= originalBill + tax + tip;
      
      //Output
      console.log( "Your original bill amount is: " +originalBill);
      console.log( "Your tax is: " +tax);
      console.log( "Your tip is: " +tip);
      console.log( "Your total is: " +total);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
