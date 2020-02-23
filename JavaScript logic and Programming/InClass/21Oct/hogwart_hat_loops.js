"use strict";
var readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 

function assignHouse(inLastName)
{
    var assignedHouse = "";

    if(inLastName==="POTTER"){
        assignedHouse= "Gryffindor";
    }
    else if(inLastName==="MALFOY"){
        assignedHouse= "sletherin";
    }
    else
    {
        var selectedHoursNumber =Math.floor(Math.random() * (4 - 1 + 1)) + 1;

        if (selectedHoursNumber === 1){
            assignedHouse= "Gryfindor";
        }
        else if(selectedHoursNumber ===2){
            assignedHouse= "Hefflepuf";
            
        }
        else if(selectedHoursNumber ===3){
            assignedHouse= "Ravenclaw";
        }
        else if(selectedHoursNumber ===4)
        {
            assignedHouse= "sletherin";
        }
    }
    
    return assignedHouse;
    //return "Ravenclaw";

}

function main()
{
    var gryffCount =0;
    var haffleCount=0;
    var ravenCount=0;
    var slythCount = 0;
   
    

    for( var i =0; i < 10; i++)
    {
        var lastName= readlineSync.question("Enter the last name: ").toUpperCase();

        var hogwartsHouse = assignHouse(lastName);

        console.log(`You have been assigned ${hogwartsHouse} door`);
        
        // Count usinf if statement 
        if(hogwartsHouse==="Gryfindor")
        {
            gryffCount++;
        }
        
        else if(hogwartsHouse==="Hefflepuf")
        {
            haffleCount++;
        }
        else if(hogwartsHouse==="Ravenclaw")
        {
            ravenCount++;
        }
        else if(hogwartsHouse==="sletherin")
        {
            slythCount++;
        }
    }

   
    
    // output all the counts
    console.log(`Gryfindor number ${gryffCount}`);
    console.log(`Helffle cuff number ${slythCount}`) ;
    console.log(`Ravenclaw number ${haffleCount}`);
    console.log(`Sletherinf number ${ravenCount}`) ;
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
