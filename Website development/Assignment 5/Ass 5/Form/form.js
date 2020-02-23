"use strict"

function otherLanguage()
{
    var englishNo = document.getElementById("languageno");
    var englishYes = document.getElementById("languageyes");

    var otherLanguage= document.getElementById("language");

    if(englishNo.checked)
    {
        otherLanguage.style.backgroundColor="red";
        otherLanguage.required = true;
    }
    else if(englishYes.checked)
    {
        otherLanguage.style.backgroundColor="white";
        otherLanguage.required= false;
    }
}

function countryName()
{
    var otherCountry= document.getElementById("otherCountry");

    var otherCountryField = document.getElementById("otherCountryField");

    if(otherCountry.checked)
    {
        otherCountryField.style.backgroundColor="red";
        otherCountryField.required = true;
    }
    else
    {
        otherCountryField.style.backgroundColor="white";
        otherCountryField.required= false;
    }
}

function allnumeric()
{
    var apartment_number = document.getElementById("Apartment").value;
   
    if(isNaN(apartment_number))
    {
        alert("please input a valid number");
    }
}


function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters)){
        return true;
    }else{
        alert('Please input letters only');
        return false;
    }
  } 


  function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("dateofbirth").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        lblError.innerHTML= "Enter date in mm/dd/yyyy format ONLY."
        return false;
    }
}

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail!");
  } else {
    email.setCustomValidity("");
  }
});