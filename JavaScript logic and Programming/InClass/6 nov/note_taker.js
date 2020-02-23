"use strict";
var readlineSync = require('readline-sync');
var fs= require('fs');


// DO NOT EDIT: The main function to house our program code 
function main()
{
    
    var notes="";
    // new notes array
    var newNotes=[];
    // output to file
    var outputFullPath="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\InClass\\6 nov\\note_log.txt";
    var date= new Date();
    date.toISOString();

    while(notes.toLowerCase() !=="q")
    {
        notes=readlineSync.question("Enter your notes/message ('q' to quit):");
        
        if(notes.toLowerCase() !=="q")
        {
            newNotes.push(`${date} ${notes}`);
            
            
        }
        
    }

    fs.appendFileSync(outputFullPath,newNotes.join("\n")+"\n","Utf-8")
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
