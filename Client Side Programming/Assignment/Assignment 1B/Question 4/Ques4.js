"use strict"
/*
Start the program 
Take 10 random positive number 
Show that the number is prime or not 

https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
*/

function randomFunction()
{
    var randomNumbers=[];

    for(var i=0;i<10;i++)
    {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }

    function test_prime(n)
    {

    var yes="yes";
    var no ="no";
    
    if (n===1)
    {
        return yes;
    }
    else if(n === 2)
    {
        return yes;
    }else
    {
        for(var x = 2; x < n; x++)
        {
        if(n % x === 0)
        {
            return no;
        }
        }
        return yes;  
    }
    }

    var output = "";

    for(i=0;i<randomNumbers.length;i++)
    {
        output += randomNumbers[i]+"-"+test_prime(randomNumbers[i])+", " ;
    }

    console.log(output);

    
}
randomFunction();