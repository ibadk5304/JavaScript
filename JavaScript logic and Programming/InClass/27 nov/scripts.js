"use strict"

function processForm()
{
    var first_name_input= document.getElementById('firstname');
    var last_name_input= document.getElementById('lastname');

    var target_div= document.getElementById('dis');

    var output_message="Order details for "+first_name_input.value+" "+last_name_input.value;

    target_div.innerHTML=output_message;
    
    

   
}

document.getElementById("process_form").addEventListener('click',processForm);