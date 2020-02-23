"use strict";
var readlinesync = require("readline-sync");

function main()
{
    /*
    //1.Input&Variables
    var employeeName = "Mike";
    var monthlySales = 50000;
    var commissionRate = 10;
    //2.Processing

    var commissionAmount = monthlySales * (commissionRate / 100);


    //3.Output
    console.log(" The monthly amount for " +employeeName+ "is $" + commissionAmount);
    */

    //1.Input&Variables
    var employeeName = readlinesync.question("Enter your first name: ");
    var monthlySales = parseInt(readlinesync.question("Enter your monthly sales: "));
    var commissionRate = parseInt(readlinesync.question("Enter your commission rate: "));
    //2.Processing

    var commissionAmount = monthlySales * (commissionRate / 100);


    //3.Output
    console.log(" The monthly amount for " +employeeName+ "is $" + commissionAmount);
}


if (require.main === module)
{
    main();
}
