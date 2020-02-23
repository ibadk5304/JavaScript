"use strict";
var readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    var studentName =readlineSync.question("Enter the student name: ") ;
    var studentIs= readlineSync.question("Fulltime or Parttime: ").toUpperCase();
    
    if(studentIs==="FULLTIME"){
    var markWeb= parseFloat(readlineSync.question("Please enter mark for web: "));
    var markProg= parseFloat(readlineSync.question("Please enter mark for Prog: "));
    var markWindows=parseFloat(readlineSync.question("Please enter mark for Windows: "));
    var markNet=parseFloat(readlineSync.question("Please enter mark for Networking: "));
    var markDatabase=parseFloat(readlineSync.question("Please enter mark for web: "));
    var markProfDev=parseFloat(readlineSync.question("Please enter mark for Professional Dev: "));

    var totalMark= (markWeb + markProg + markWindows + markNet + markDatabase + markProfDev);
    var markAverage =(totalMark/6);
    console.log("The average mark is : "+markAverage.toFixed(2));

    }
    else if(studentIs==="PARTTIME"){

        var markWeb= parseFloat(readlineSync.question("Please enter mark for web: "));
        var markProg= parseFloat(readlineSync.question("Please enter mark for Prog: "));
        var markProfDev=parseFloat(readlineSync.question("Please enter mark for Professional Dev: "));

        var totalMark= (markWeb + markProg + markProfDev);
        var markAverage =(totalMark/3);
        console.log("The average mark is : "+markAverage.toFixed(2));
        
    }
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
