"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    var matrix=[];

    for(var i=0;i<5;i++)
    {   
        // Everytime through outer loop create 1D array
        var rowArray =[];
        for(var j=0;j<5;j++)
        {   
            var randomNumber =Math.floor(Math.random()*(100-1+1));
            rowArray.push(randomNumber)
        }
        matrix.push(rowArray);
    }
    //Tem- OUTPUT RAW ARRAY

    // Print my 2D Array nicely


    for(var i=0;i<matrix.length;i++)
    {
        var lineOutput = "";
        for(var j=0;j<matrix[i].length;j++)
        {
            lineOutput += matrix[i][j] + " ";
        }
        console.log(lineOutput);
    }
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
