"use strict"

function endOfTerm ()
{
    var target = document.getElementById('target');
var currentDate = new Date();
var countDownDate = new Date ("December 13,2019 16:30:25").getTime();


var totalMilisecond = countDownDate- currentDate;
var totalSeconds = totalMilisecond / 1000;

var totalHours = Math.floor(totalSeconds/3600);

var days = Math.floor(totalHours/24);

var hours = totalHours - (days*24);

totalSeconds = totalSeconds - (days *3600*24) - (hours*3600);

var minutes= Math.floor(totalSeconds/60);
var seconds = Math.floor( totalSeconds-(minutes*60));

target.innerHTML= `Days: ${days}<br/> Hours: ${hours}<br/> 
Minutes:${minutes} <br/>Seconds: ${seconds}`;

};
