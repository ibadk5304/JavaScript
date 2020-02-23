"use strict";
var readlineSync = require('readline-sync');
var fs= require('fs');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    
    // Initializing last name and age variable
    
    var lastName="";
    var age= 0;
    
    // new guest array
    var newGuest=[];
    

    //output csv file
    var outputFullPath="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\Sandbox\\GuestlistV3\\guest.csv";
    // var outputFullPath="F:\\Whatever\\guest?.csv";
    while(lastName.toLowerCase() !== "q")
    {
        lastName= readlineSync.question("Enter guest last name ('q' to quit):");

        if(lastName.toLowerCase() !== "q" )
        {   
            while(true) // be nervous!!!!
            {
                try
                {
                    age=parseInt(readlineSync.question("Enter the guest age:"));
                    if(isNaN(age))
                    {
                        throw("Error;not a number");
                    }
                    break; // will get here if not exception thrown
                }
                
                catch(err)
                {
                    console.log("Error writing to file, please try again later.");
                }
            }

            // here we should add array so don not put q

            newGuest.push(`${lastName},${age}`)
        }
        
    }

    // write array to the output csvv file
    // fs.writeFileSync(outputFullPath,newGuest.join("\n"),"Utf-8")
    try
    {
        fs.appendFileSync(outputFullPath,newGuest.join("\n")+"\n","Utf-8")
    }

    catch(err)
    {
        console.log("Error writing to file: ");
    }
    

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
