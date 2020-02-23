"use strict";
//Importin a module called fs file system module, built into node.
var fs = require('fs');



function main()
{
	// Random number between 1 and 25

var offsetNumber = Math.floor(Math.random() * (25 - 1 + 1)) + 1;// generate a random number between 1-25
// creating array of the alphabet, in lower case
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
		  't','u','v','w','x','y','z'];
// array creating an array of punctuation character and spaces	  
var punctuationCharacters = [' ', '.',','];
//Create file input and output path variables
var fileToRead = "E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\InClass\\4 nov\\test_file.txt"; 
var fileToWrite = "E:\\Fall 2019 NSCC\\Prog1700\\prog1700_ik\\InClass\\4 nov\\test_file.txt";
//specify file characters encoding
var encoding = "utf-8";
// Create an empty string varible for ouput message.
var outputMessage = ""; 
// read in the input files contents into a string variable
var inputMessage= fs.readFileSync(fileToRead,encoding); 

// Go through each character of input message one character at a time.

for(var i = 0; i < inputMessage.length; i++)
{
	// check current letter is a punctuation character 
	if(punctuationCharacters.includes(inputMessage[i]))
	{
		//put character in output message without changing
		outputMessage += inputMessage[i];
	}
	else 
	{	// for all letter characters we will replace in output message
		// find the index of the current letter in the alphabet array.
		var alphabetIndex = lettersofAlphabet.indexOf(inputMessage[i].toLowerCase());
		
		// add our random offset to the old index to get a new index 
		// must get modules of 26 so we do not go past  end of array

		var newIndex = (alphabetIndex + offsetNumber) % 26;
		// if the currrent letter is upper case 
		
		if(inputMessage[i].toUpperCase()==inputMessage[i])
		{
			outputMessage += lettersofAlphabet[newIndex].toUpperCase();
		}
		//just add the letter at new offset position in lowercase
		else
		{
			outputMessage += lettersofAlphabet[newIndex];
		}
	}	
}

console.log(outputMessage);
}


if (require.main === module)
{
    main();
}
