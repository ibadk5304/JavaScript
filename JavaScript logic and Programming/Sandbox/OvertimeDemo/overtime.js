"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{   //Temp hard-coded for now
    var hoursWorked=30;
    var payRate=10;
    
    if(hoursWorked<=40){
        var totalPay= hoursWorked*payRate;
    }
    else{
        var overtimeHours= hoursWorked - 40;
        var overtimePay= overtimeHours*payRate*1.5;
        var totalPay= (hoursWorked * payRate) ;
    }
    

    console.log("Total pay"+totalPay)
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
