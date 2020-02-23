"use strict";
var readlineSync = require('readline-sync');
var fs= require('fs');


// DO NOT EDIT: The main function to house our program code 
function formatDate(in_date) 
{
    var year = in_date.getFullYear(),
        month = in_date.getMonth() + 1, // months are zero indexed
        day = in_date.getDate(),
        hour = in_date.getHours(),
        minute = in_date.getMinutes(),
        second = in_date.getSeconds(),
        hourFormatted = hour, // hour returned in 24 hour format
        minuteFormatted = minute < 10 ? "0" + minute : minute,
        morning = hour < 12 ? "am" : "pm";

    return year + "-" + month + "-" + day + " " + hourFormatted + ":" +
            minuteFormatted +"."+ second;
}
function main()
{
    var notes="";
    // new notes array
    var newNotes=[];
    // output to file
    var outputFullPath="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\InClass\\13 nov\\note_log.txt";
    // var date= new Date();
    // date.toISOString();
    var date= new Date();
    var inputTimes=0;
    var timeStr="";

    while(notes.toLowerCase() !=="q")
    {
        notes=readlineSync.question("Enter your notes/message ('q' to quit):");
        if(notes.toLowerCase() !=="q")
        {
            while(true)
            {
                try
                {
                    inputTimes=parseInt(readlineSync.question("enter how many times you want: "));
                    if(isNaN(inputTimes)|| inputTimes<1)
                    {
                        throw("Error:Please enter again");
                    }
                    if(inputTimes=== 1)
                    {
                        timeStr = inputTimes + " time";
                    }
                    else
                    {
                        timeStr= inputTimes +" times";
                    }
                    break;
                }
                catch(err)
                {
                    console.log(err)
                }
            }
            newNotes.push(`${formatDate(date)} ${notes} ${timeStr}`);
        }
            

    }

    try
    {
        fs.appendFileSync(outputFullPath,newNotes.join("\n")+"\n","Utf-8")
    }
    catch(err)
    {
        console.log("Error to writing files");
    }
}
    
    
    


// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
