var xmlhttp = new XMLHttpRequest();
var data = "crayola.json";

var crayolaInfo = "";

xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
    //myFunction(this.responseText);
    crayolaInfo = this.responseText;
  }
}
xmlhttp.open("GET", data, true);
xmlhttp.send();

function myFunction() {
  var arr = JSON.parse(crayolaInfo);
  var i;
  var out = "<table>";
  out += "<tr><td>Name</td><td>Hex Value</td><td>RGB Value</td><td>Colour</td></tr>"
  for(i = 0; i < arr.length; i++) {
    out += "<tr><td>" + 
    arr[i].name +
    "</td><td>" +
    arr[i].hex +
    "</td><td>" +
    arr[i].rgb +
    "</td><td style='background-color:" + arr[i].hex + "'>" +
    //arr[i].style.backgroundColour.rgb +
    "</td></tr>";
  }
  out += "</table>";
  document.getElementById("table").innerHTML = out;
}

document.getElementById("sel").addEventListener('change',myFunction);