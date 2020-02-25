"use strict";
/*
Author: Ibad Khan
Date: Oct 11,2019
Description: Girl Guide Cookie Sell-off
*/


var readlineSync = require('readline-sync');

// DO NOT EDIT: The main function to house our program code 

function findAverage(inNumberOfBoxes,inNumberOfGuide) 

{
    var total=0;
    
    for(var i=0; i<inNumberOfBoxes.length; i++)
    {
        total += inNumberOfBoxes[i];
    }

    var average =   total/inNumberOfGuide;

    return average.toFixed(1);
}

function main()
{
    var numberOfGuide = parseInt(readlineSync.question(`Enter the number of guides selling cookies: `));
    var guideNames=[];
    var numberOfBoxes=[];
    for(var i=0; i<numberOfGuide;i++)
    {
        var inputGuideName=readlineSync.question(`\nEnter the name of guide #${i+1}:`);
        
        var inputBoxes=parseInt(readlineSync.question(`Enter the number of boxes sold by ${inputGuideName}:`));

        guideNames.push(inputGuideName);
        numberOfBoxes.push(inputBoxes);

      
    }
    //Average
    var average=findAverage(numberOfBoxes,numberOfGuide);
    
    console.log("\nThe average number of boxes sold by each guide was: "+average);
   
    
    console.log("\nGuide\t\tPrizes Won");
    console.log("------------------------------------------------------------------------------------------------------");
   
    // Used for loop to find the prize won 
    for(var i=0;i<numberOfGuide;i++)
    {   
        var prize='';
        
        if(numberOfBoxes[i]===Math.max(...numberOfBoxes))  //Used Math.max to find the maximum number
        {
            prize="Trip to Girl Guide Jamboree in Aruba"
        }
        
        else if(numberOfBoxes[i]>average)
        {
            prize="Super seller Badge"
        }
        else if(numberOfBoxes[i]>0 && numberOfBoxes[i] !=Math.max(...numberOfBoxes) &&numberOfBoxes[i]<average)
        {
            prize="Left over cookies"
        }
        else if(numberOfBoxes[i]===0)
        {
            prize=""
        }

        console.log(`${guideNames[i]}\t\t-${prize}`);
    }

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
