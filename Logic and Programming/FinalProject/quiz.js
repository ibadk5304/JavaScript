"use strict"

var countriesInfo = "";
var randomNumber

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
