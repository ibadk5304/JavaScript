"use strict";

var fs = require('fs')

/*
  Name: Ibad khan
  Date:20 Nov 2019

  Description: Assignment 4, program 1
*/
/*
  Pseudo code
1.	Start the program
2.	Read the original file into an array
3.  Delete any previous file. 
4.  Random line function called and assign in  which return a random 
4.	Start a for loop to run each sentence, inside the loop if skip line matches than it will delete the line,
    else It will print the line.
5. Another condition set, if letter is less than or equal 20 convert all to Uppercase
  else pring all to lower case.
6. print the altered text output al
7.	End the program

*/

// Function used to find a random number
function randomLine(in_max_line)
{
   
  var return_line = Math.floor(Math.random()* (in_max_line-1))+1;

  return return_line;
}

function main()
{
  // Original File path
  var read_file ="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\Assignments\\Assignment4\\Program 1\\original.txt";

  // Altered file path
  var file_output="E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\Assignments\\Assignment4\\Program 1\\Altered.txt";

  

  // It will read and encode the data
  var file_data = fs.readFileSync(read_file,"utf-8");

  
  
  // Read the file
  var file_data_lines= fs.readFileSync(read_file,"utf-8").split("\r\n");
  
  //  Show the original file using for loop
  console.log("----------------------------------");
  console.log("Original text");
  console.log("----------------------------------");
  for(var i=0; i<file_data_lines.length; i++)// for loop used to show string
  {
    console.log(file_data_lines[i]);
  }
  
  // It used to overwrite the file
  fs.writeFileSync(file_output,"","utf-8");

  // Alter text
  console.log("----------------------------------");
  console.log("Altered Text");
  console.log("----------------------------------");



  // random number function call which will choose a random lone
  var skipLine = randomLine(file_data_lines.length); 

  for(var i=0; i<file_data_lines.length; i++) // First for loop will run whole text 
  {
    if(i ==skipLine)        // if statement i is equal skipLine than It will delete the sentence 
    {
      console.log("");
      fs.appendFileSync(file_output,`\n`,"Utf-8") // write the file

    }
    else // Other wise It will display line
    {
      var count=0; 
      for(var j=0; j<file_data_lines[i].length; j++) // It will run each sentence, to count letter.
      {
        count= count+1;
        
      }
      
      if(count<21)  // if letter count is less than 20 than it will show the sentence Uppercase all letter.
      {
        fs.appendFileSync(file_output,`${i+1}:${file_data_lines[i].toUpperCase()}\n`,"Utf-8") // write the file
        
        console.log(`${i+1}:${file_data_lines[i].toUpperCase()}`); // display console
      }
      else
      {
        fs.appendFileSync(file_output,`${i+1}:${file_data_lines[i].toLowerCase()}\n`,"Utf-8") // write the file

        console.log(`${i+1}:${file_data_lines[i].toLowerCase()}`);  // display console
      }
    }
  }


}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
