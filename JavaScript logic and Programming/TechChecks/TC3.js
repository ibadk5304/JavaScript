"use strict";
/*
Author: Ibad khan
Date: 4 Oct 2019
Description: Tech check 3. Grade point Calculator.
*/

var readlineSync = require('readline-sync');

// DO NOT EDIT: The main function to house our program code 
function main()
{   console.log("\n \n Grade point Calculator\n");

    var A= 4.0;
    var B= 3.0;
    var C= 2.0;
    var D= 1.0;
    var F= 0.0;
   
    var grade =readlineSync.question("Please enter a letter grade: ").toUpperCase();
    var numericGrade=0;
   
    var modifier = readlineSync.question("Please enter a modifier (+, - or nothing): ");
    

   
   
  

    if (grade === "A"){
        numericGrade=A;
        if (modifier==="+"){
            numericGrade=numericGrade + 0.0;
        }
        else if (modifier==="-"){
            numericGrade=numericGrade - 0.3;
        } 
        else if (modifier==="NOTHING"){
            numericGrade=numericGrade - 0.0;
        } 
    }
    else if (grade === "B"){
        numericGrade=B;
        if (modifier==="+"){
            numericGrade=numericGrade + 0.3;
        }
        else if (modifier==="-"){
            numericGrade=numericGrade - 0.3;
        } 
        else if (modifier==="NOTHING"){
            numericGrade=numericGrade - 0.0;
        } 
    }

    else if (grade === "C"){
        numericGrade=C;
        if (modifier==="+"){
            numericGrade=numericGrade + 0.3;
        }
        else if (modifier==="-"){
            numericGrade=numericGrade - 0.3;
        } 
        else if (modifier==="NOTHING"){
            numericGrade=numericGrade - 0.0;
        } 
    }

    else if (grade === "D"){
        numericGrade=D;
        if (modifier==="+"){
            numericGrade=numericGrade + 0.3;
        }
        else if (modifier==="-"){
            numericGrade=numericGrade - 0.3;
        } 
        else if (modifier==="NOTHING"){
            numericGrade=numericGrade - 0.0;
        } 
    }

    else if (grade === "F"){
        numericGrade=F;
        if (modifier==="+"){
            numericGrade=numericGrade + 0.3;
        }
        else if (modifier==="-"){
            numericGrade=numericGrade - 0.3;
        } 
        else if (modifier==="NOTHING"){
            numericGrade=numericGrade - 0.0;
        } 
    }
    else {
        console.log("you entered an invalid letter grade")
    }
    
    console.log("\nThe numeric value is: " + numericGrade);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
