"use strict";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    //1. Input and variables
    // var percentoPizzaRestaurent = 0.12; //hard-coded value
    // var numberUSPizzerias = 70000;

    const percentoPizzaRestaurent = 0.12; //hard-coded value;
    const numberUSPizzerias = 70000;

    
    //2. Processing 
    //12/100= 70000 

    var totalUSRestaurents = numberUSPizzerias / percentPizzaRestaurents;

    //3. Output

    console.log("The total number of US Restaurents is" +totalUSRestaurents);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
