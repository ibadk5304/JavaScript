"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    var selectedHoursNumber =Math.floor(Math.random() * (4 - 1 + 1)) + 1;;

    // //determine their Hogwarts house
    // if (selectedHoursNumber === 1){
    //     console.log("You have been assigned gryffindor door");
    // }

    // // Final message 
    // console.log(" Thanks for using Hogwart,s Sorting Hat!")

    //determine their Hogwarts house

    if (selectedHoursNumber === 1){
        console.log("You have been assigned gryffindor door");
    }
    else if(selectedHoursNumber ===2){
        console.log("You have been assigned Hefflepuf!");
    }

    else if(selectedHoursNumber ===3){
        console.log("You have been assigned Ravenclaw!");
    }

    else if(selectedHoursNumber ===4)
    {
        console.log("You have been assigned gryffindor door");
    }
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
