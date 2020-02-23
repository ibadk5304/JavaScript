"use strict";
var readlineSync = require('readline-sync');
 
function main()
{
   //Input
   var earningPerShare = readlineSync.question("Earnings per share: ");
   var pricePerShare = readlineSync.question("Price of the share: ");

   

    //Processing
    var priceEarningRatio = pricePerShare / earningPerShare;

    

   //Output
   console.log("Price earning ratio: " +priceEarningRatio+ ":1 ");
}


if (require.main === module)
{
    main();
}
