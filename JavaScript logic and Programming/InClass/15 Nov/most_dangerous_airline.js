"use strict";
var fs= require('fs');
var parse= require('csv-parse/lib/sync');
var readlineSync = require('readline-sync');

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // Input file 
    var inputFile="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\InClass\\15 Nov\\airline-safety.csv";

    // Read in as text file 
    var airlineData= fs.readFileSync(inputFile,"utf-8");

    // parse csv data into 2-D array 

    var parseAirlineData= parse(airlineData);
    // array of total fatalities
    var arrayTotalFatalities =[];

   
    // Go over 2D array one row (1d array) at a time
    var maximumRatio=0;
    var maximumRatioAirline = "";

    for(var i=1; i<parseAirlineData.length;i++)
    {
        var totalfatalities= parseInt(parseAirlineData[i][3]) + parseInt(parseAirlineData[i][7]);
        
       
        

        var averageFatalities =  totalfatalities / parseAirlineData[i][1];

        if(averageFatalities>maximumRatio)
        {
            maximumRatio=averageFatalities;
            maximumRatioAirline = parseAirlineData[i][0];
        }
        
        console.log(`Name:  ${parseAirlineData[i][0]} Fatalities Ratio: ${averageFatalities.toFixed(10)}`);
        

    }

    // var max= parseInt(Math.max(...arrayTotalFatalities));

    console.log(maximumRatioAirline);  // airline with most fatalities
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
