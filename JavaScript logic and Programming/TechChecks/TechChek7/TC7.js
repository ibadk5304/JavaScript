"use strict"

function processCalculation()
{
    var weekSalary = document.getElementById('weeklysalary').value;
    var dependentnumber = document.getElementById('numberofdependent').value;

    var target_element =document.getElementById("output");


    var provincialTaxRate = 0.06;
    // provincial tax 
    var provincialTax = weekSalary * provincialTaxRate;
    var federalTaxRate = 0.25;
    // federal tax
    var federalTax = weekSalary * federalTaxRate;
    
    var totalTax = provincialTax + federalTax;

    var dependentTaxDuductionRate = 0.02;
    
    // total dependent tax deduction

    var dependentTaxDeduction  = weekSalary * dependentTaxDuductionRate * dependentnumber;
    var actualTax= totalTax-dependentTaxDeduction;
    // total take home pay
    var totalPay = weekSalary-actualTax;

    var federalTaxMsg = "Your federal tax is: $"+federalTax.toFixed(2) + "<br>";
    var provincialTaxMsg = "Your provincial tax is: $"+provincialTax.toFixed(2)+ "<br>";
    var dependentTotalMsg = "Your dependent tax deduction total is : $"+dependentTaxDeduction.toFixed(2)+ "<br>";
    var homePayMsg = "Your total take-homw pay is: $"+totalPay.toFixed(2);

    target_element.innerHTML = federalTaxMsg + provincialTaxMsg + dependentTotalMsg + homePayMsg;
}

document.getElementById('calculate_tax').addEventListener('click',processCalculation);

