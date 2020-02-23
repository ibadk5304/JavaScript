"use strict";

if(localStorage.nodes == null)
{
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            localStorage.nodes = this.responseText;
            someFunction();
        }
    };
    httpRequest.open("GET", "n.json", true);
    httpRequest.send();
}
else
{
    someFunction();
}

function showAllNodes()
{
    var oldNodes = JSON.parse(localStorage.nodes);
    var targetTable = document.getElementById('dis');

    var newHtml = "";
    newHtml += "<h4>Notes</h4>";
    newHtml += "<table>";
    newHtml += "<thead>";
    newHtml += "<tr>";
    newHtml += "<th>Date & Time</th>";
    newHtml += "<th>Note</th>";
    newHtml += "</tr>";
    newHtml += "</thead>";
    newHtml += "<tbody>";


    for(var i = 0; i < oldNodes.length; i++)
    {
        var r = oldNodes[i];



        newHtml += "<tr>";
        newHtml += `<td>${r["T"]}</td>`;
        newHtml += `<td>${r["N"]}</td>`;
        newHtml += "</tr>";
    }

    newHtml += "</tr>";
    newHtml += "</tbody>";
    newHtml += "</table>";
    // Change html content of the target.
    targetTable.innerHTML = newHtml;

    // change the style 

    // var parent = targetTable.parentNode;
    // parent.removeChild(targetTable);
}

function addNewNodes()
{
    var c_n = JSON.parse(localStorage.nodes);
    var n_n = document.getElementById('n').value;
    var d = new Date();
    var d_f = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    
    var n_e = {
        "T": d_f,
        "N": n_n
    };

    c_n.push(n_e);
    localStorage.nodes = JSON.stringify(c_n);

    someFunction();
}


document.getElementById("lbutton").addEventListener("click", someFunction2);


