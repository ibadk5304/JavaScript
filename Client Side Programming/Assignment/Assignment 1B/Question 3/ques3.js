"use strict"

/*
    https://www.w3schools.com/howto/howto_js_countdown.asp

    I followed the above link
    
*/

function countDown()
{
    var deadline = new Date("Feb 3, 2020 15:37:25").getTime(); 
    var x = setInterval(function() 
    { 
    var now = new Date().getTime(); 
    
    var t = deadline - now; 
    
    // ****Struggle with dividing weeks
    var weeks = Math.floor(t/(1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(t%(1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 

    console.log("There are "+ weeks + " weaks, " +days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds until my next birthday!");
    },1000);
}

countDown();