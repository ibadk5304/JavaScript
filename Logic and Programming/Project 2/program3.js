/*
Author: Ibad Khan
Date: Oct 16,2019
Description:  Write a program that computes monthly insurance according to the following schedule: 
If you are ‘Male’ and your age is 	But less than 	the price of the vehicle multiplied by 
15 or greater 	25 	25% / 12 
25 	40 	17% / 12 
40 	70 	10% / 12 
If you are ‘Female’ and your age is 	But less than 	the price of the vehicle multiplied by 
15 or greater 	25 	20% / 12 
25 	40 	15% / 12 
40 	70 	10% / 12 
 
First, create a flowchart that clearly shows all of the paths of execution that will exist within your designed solution to this problem. Then, write a console application that will input the sex and price of vehicle, and then output the corresponding monthly insurance amount. 
Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (decision structures).


*/
    
/*
Pseudo code
1. Start the program
2. Taking input of data usage 
3.Promt to add a function called dataChargeCalculator.
4.In processing, four condition.
5. Output the Total charge 
6. End the program
*/
var readlineSync = require('readline-sync');

function insuranceCalculator(inCustomerGender, inCustomerAge, inVehiclePrice)
{
    if (inCustomerGender==="MALE")
        {
            if(inCustomerAge>=15 && inCustomerAge<25){
                monthlyInsurance= (inVehiclePrice*0.25)/12;
            }
            else if(inCustomerAge>=25 && inCustomerAge<40){
                monthlyInsurance= (inVehiclePrice*0.17)/12;
            }
            else if(inCustomerAge>=40 && inCustomerAge<70){
                monthlyInsurance= (inVehiclePrice*0.10)/12;
            }
        }
    else if (inCustomerGender==="FEMALE")
        {
            if(inCustomerAge>=15 && inCustomerAge<25){
                monthlyInsurance= (inVehiclePrice*0.20)/12;
            }
            else if(inCustomerAge>=25 && inCustomerAge<40){
                monthlyInsurance= (inVehiclePrice*0.15)/12;
            }
            else if(inCustomerAge>=40 && inCustomerAge<70){
                monthlyInsurance= (inVehiclePrice*0.10)/12;
            }
        }

        return monthlyInsurance;
}


function main()
{   //Input
    var customerGender = readlineSync.question("\nAre you 'Male' or 'Female': ").toUpperCase();
    var customerAge = parseInt(readlineSync.question("\nEnter you Age: "));
    var vehiclePrice = parseInt(readlineSync.question("\nEnter the purchase price of vehicle: "));
   

    var monthlyInsurance = insuranceCalculator(customerGender, customerAge, vehiclePrice);
    
    

    //Output
    console.log(`\nYour monthly insurance will be: $${monthlyInsurance.toFixed(2)} \n`);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
