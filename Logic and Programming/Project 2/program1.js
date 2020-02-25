"use strict";
/*
Author: Ibad Khan
Date: Oct 11,2019
Description: A landscaping company needs a program that computes the price of landscaping for a new housing development. Work orders are based on: address, plot length and width in feet, type of grass (“fescue”, “bentgrass” or “campus”), and number of trees. The price is computed as follows:  
•	There is a base labour charge of $1000. 
•	If the surface (length * width) is over 5000 square feet, add $500. 
•	The cost is calculated per square foot. If the grass is “fescue” the cost is $0.05; for “bentgrass” it is $0.02; “campus” is $0.01. 
•	Each tree requested has a $100 charge. 
First, create a flowchart that clearly shows all the paths of execution that will exist within your designed solution to this problem. Write a console application that will input the address, property length and width, type of grass and number of trees, and then output the corresponding price.
Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (decision structures).

*/
    
/*
Pseudo code
1. Start the program
2. Taking input of House number, Property depth
and width, type of grass, Number of trees, 
3.In processing, surface area, grass price and 
trees cost. Then add all.
4. Output the total cost 
5. End the program
6.
7.
8.
*/
var readlineSync = require('readline-sync');

function landscapeCalculator(inPropertyDepth, inPropertyWidth, inGrassType, inTreesNumber)
{
    var surfaceArea= inPropertyDepth*inPropertyWidth;

    if (surfaceArea>5000){
        var surfaceCost=500;
    }
    else{
        var surfaceCost=0;
    }

    //Grass type

        if (inGrassType==="FESCUE"){
            var grassTypeCost = 0.05*surfaceArea;
        }
        else if(inGrassType==="BENTGRASS"){
            var grassTypeCost= 0.02*surfaceArea;
        }
        else if(inGrassType==="CAMPUS"){
            var grassTypeCost= 0.01*surfaceArea;
        }

        //tree cost

    var treesCost= inTreesNumber*100;

          return surfaceCost + grassTypeCost + treesCost;
}


function main()
{   //Input
    var houseNumber = parseInt(readlineSync.question("Enter house number: "));
    var propertyDepth = parseInt(readlineSync.question("\nEnter property depth (feet): "));
    var propertyWidth =  parseInt(readlineSync.question("\nEnter property width (feet): "));
    var grassType =  readlineSync.question("\nEnter type of grass (fescue, bentgrass, campus): ").toUpperCase();
    var treesNumber =  parseInt(readlineSync.question("\nEnter the number of trees: "));


    // Processing
    
    const LABOUR_CHARGE = 1000;

    
    //Calculation

    var totalCost= LABOUR_CHARGE + landscapeCalculator(propertyDepth, propertyWidth, grassType, treesNumber);



    //Output
    console.log(`\nTotal cost for house ${houseNumber} is: $${totalCost.toFixed(2)}`);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
