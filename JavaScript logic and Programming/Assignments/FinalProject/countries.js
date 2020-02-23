"use strict"

var countriesInfo = "";

var totalWorldPopulation= 0;
var countryPopulation=0;

var countryArea= 0;
var populationDensityInMile= 0;
var randomNumber= Math.floor((Math.random() * 202) + 0);

window.onload = DisplayCountryData();

function DisplayCountryData() {

    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(), 
        method = 'GET',
        overrideMimeType = 'application/json',
        url = 'countries.json';        // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            
            // PARSE JSON DATA.
            countriesInfo = JSON.parse(xhr.responseText);

            
            var select = document.getElementById('sel');
            for (var i = 0; i < countriesInfo.length; i++) {
                // BIND DATA TO <select> ELEMENT.
                select.innerHTML = select.innerHTML +
                    '<option value="' + countriesInfo[i].Name + '">' + countriesInfo[i].Name + '</option>';
                    totalWorldPopulation = totalWorldPopulation + countriesInfo[i].Population;
                    
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

function DisplayPopulationData(select) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById('msg');

    var currentCountry =  select.options[select.selectedIndex].text;
    currentCountry = currentCountry.split(" ").join("_");

    msg.style.fontSize= "40px"; // CSS appliied for bold font
    msg.innerHTML = '<b>' + currentCountry + '</b>';
    
    
    // flag
    var imgplace = document.getElementById('countryimg');
    var x = document.createElement("IMG");

    imgplace.innerHTML =  x.setAttribute("src","./flags/"+currentCountry+".png");
    imgplace.innerHTML = `<img src="./flags/${currentCountry}.png" />`;

    // Population
    var populationNumber = document.getElementById('populationnumber');

    currentCountry = currentCountry.split("_").join(" ");
    
    for (var i = 0; i < countriesInfo.length; i++) {
        if(countriesInfo[i].Name ==currentCountry )
        {
            countryPopulation = countriesInfo[i].Population;
            countryArea=countriesInfo[i].Area;
            break;
        }
        
    }

    populationNumber.innerHTML = countryPopulation;

    // Change the link of the wiki link
    var wikilink = document.getElementById("wikilink");
``
    wikilink.href = "https://en.wikipedia.org/wiki/"+currentCountry;
}

// This function will give the country percentage
function percent(select)
{
    

    var percent = document.getElementById("percentage");  
    
    
    percent.style.fontWeight= "bold";
    var parcentPopulation = ((countryPopulation / totalWorldPopulation) *100).toFixed(3) ;

    percent.innerHTML= parcentPopulation+"%"; // Sending the percentage in html

}

document.getElementById("sel").addEventListener('change',percent);


// It will calculate the area in mile 

function CalculateAreaInMile(select)
{
    var areaField = document.getElementById('area');


    var radioMile = document.getElementById('areaMile');
    
    
    radioMile.checked=true;
    if(radioMile.checked)
    {
        areaField.innerHTML = countryArea;
    }

    areaField.innerHTML = countryArea; // CSS Applied

}
document.getElementById("sel").addEventListener('change',CalculateAreaInMile);


// If click in km It will show are in km

function CalculateAreaInKm(select)
{
    var areaField = document.getElementById('area');
    
    var radioKm = document.getElementById('areaKm');

    var radioMile = document.getElementById('areaMile');

    var actualArea= countryArea;

    if(radioKm.checked)
    {
        actualArea= countryArea * 1.60934;
        
    }
    areaField.innerHTML = Math.round(actualArea);

}

// Population density according to mile 
function populationDensityMile(select)
{
    populationDensityInMile= countryPopulation/countryArea;

    var densityField= document.getElementById("density");
    var radioDensityMile= document.getElementById("densityMile");

    radioDensityMile.checked=true;
    if(radioDensityMile.checked)
    {
        densityField.innerHTML= populationDensityInMile;
    }

    densityField.innerHTML= Math.round(populationDensityInMile);
}

document.getElementById("sel").addEventListener('change',populationDensityMile);

//Polpulation density according to km 
function populationDensityKm()
{
    var radioDensityKm= document.getElementById("densityKm");
    var densityField= document.getElementById("density");

    if(radioDensityKm.checked)
    {
        var densityAreaKm= countryArea*1.60934;
        var populationDensityInKm= countryPopulation/densityAreaKm;

        densityField.innerHTML= Math.round(populationDensityInKm);


    }
}
