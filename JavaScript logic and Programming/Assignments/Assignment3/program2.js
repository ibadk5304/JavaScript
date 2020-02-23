"use strict";
/*
Author: Ibad Khan
Date: Oct 11,2019
Description: Message Redaction
*/

var readlineSync = require('readline-sync');


// function used to replace the letter
function redactMessage(inPhrase,inLetter)
{
    
    for(var i=0; i<inPhrase.length;i++)
    {
        
        for(var j=0; j<inLetter.length; j++)
        {
            inPhrase=inPhrase.replace(inLetter[j].toUpperCase(),"_");
            inPhrase=inPhrase.replace(inLetter[j].toLowerCase(),"_");
        }
        
    }
    
    
    
    return inPhrase; // return to the main function
    
}
function main()
{
   var phrase=[]; // empty array for the phrase

    //Used do while so first it will ask and again it will ask
   do
    {
        var phrase = readlineSync.question(`Type a phrase (or quit to exit program):`); 
        var letter= readlineSync.question(`Type a comma-separated list of letters to redact:`);
       
        if(phrase.toUpperCase()!=="QUIT")
        {   
            var phrase= redactMessage(phrase,letter); // call the function
            
            // this is used to count how many letters redacted
            var count=0;
            for(var i=0; i<phrase.length; i++)
            {
                if(phrase[i]==='_')
                {
                    count++;
                }  
            }
            
        

        console.log("Number of letters redacted: "+count);
        console.log("Redacted phrase: "+phrase);
            
        }
        
    } while(phrase.toUpperCase()!=="QUIT");

    // if customers quit than program will end.
    console.log("program done");
}


// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
