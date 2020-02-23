"use strict";
var readlineSync = require('readline-sync');
/*
    1. Program start
    2. Assign the var p,q,r are true, false, true respectively
    3. process if section 
    4. print the output 
    5. End the program. 
*/

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // var p= true;
    // var q= false;
    // var r= true;


    // if((p || q) && (!(q && r))){
    //     console.log("The if statement is true!");
    // }
    // else{
    //     console.log("The if statement is false!");
    // }



    var pString= readlineSync.question("Enter P value: ");
    var qString= readlineSync.question("Enter P value: ");
    var rString= readlineSync.question("Enter P value: ");

    var p= (pString.toUpperCase()==="TRUE");
    var q= (qString.toUpperCase()==="TRUE");
    var r= (rString.toUpperCase()==="TRUE");
   


    if((p||q)&&(!(q&&r))){
        console.log("something printed");
    }
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
