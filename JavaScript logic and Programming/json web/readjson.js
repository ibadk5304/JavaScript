var xmlhttp = new XMLHttpRequest();
var data = "JSON_SELECT_RETURN.json";

var JSONINFO = "";

xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
    //myFunction(this.responseText);
    JSONINFO = this.responseText;
  }
}
xmlhttp.open("GET", data, true);
xmlhttp.send();

function myFunction() {
  var arr = JSON.parse(JSONINFO);
  var i;
  var out = "<table>";
  out += "<tr><td>Name</td><td>Address</td><td>contact age</td></tr>"
  for(i = 0; i < arr.length; i++) {
    out += "<tr><td>" + 
    arr[i].name_field +
    "</td><td>" +
    arr[i].address_field +
    "</td><td>" +
    arr[i].contact_age +

    "</td></tr>";
  }
  out += "</table>";
  document.getElementById("table").innerHTML = out;
}

document.getElementById("dataBtn").addEventListener('click',myFunction);