"use strict";
var readlineSync = require('readline-sync');
 
function main()
{
   //Input&variables

  /*var teamName = readlineSync.question("Name of the team");*/
  var teamName = "Barcelona";
  var numberWin = parseInt(readlineSync.question("Matches win"));
  var numberLost = parseInt(readlineSync.question("Matches Lost"));

   //Processing

   var totalGame= numberWin + numberLost;
   var wonPercentage = (numberWin/totalGame) *100;

  //Output
  console.log("name of the team: " +teamName+" \nPercentage of game won: " +wonPercentage+ "percent");
}


if (require.main === module)
{
    main();
}
