"use strict";
var fs= require('fs');
var parse= require('csv-parse/lib/sync');
var readlineSync = require('readline-sync');

//  Input the file with readfilesunc
//  Show whole string to console
//  Parse as csv & output row 2d Array
//  Output raw at a time, output 1d Array
//  Next step only print ID and name 
//  Search 

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // Input file 
    // var inputFile="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\Sandbox\\csvReaderDemo\\Ottawa_Ball_Diamonds.csv";

    var inputFile="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\Sandbox\\csvReaderDemo\\Ottawa_Ball_Diamonds_With_Headings.csv";

    // Read in as text file 
    var rowData= fs.readFileSync(inputFile,"utf-8");

    // parse csv data into 2-D array 

    var parseData = parse(rowData);

    // Temp output raw to the array 
    // console.log(parseData);

    // Ask which field type
    var fieldType = readlineSync.question("Enter field type you want(T-Ball, softball,baseball): ");
   
    // Go over 2D array one row (1d array) at a time
    for(var i=0; i<parseData.length;i++)
    {
        if(fieldType === parseData[i][3])
        {
            // Output facility ID 3rd column and field name 6th column 
            console.log(`ID ${parseData[i][2]} Name: ${parseData[i][5]}`);
        }
     
    }
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
