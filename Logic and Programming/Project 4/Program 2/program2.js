"use strict";
/*
    Name: ibad khan
    Date: 23rd November 2019
    Description: Itsy Bitsy Asrdvark. Program 2, Assignment 4.
*/
var fs = require('fs')
var parse= require('csv-parse/lib/sync');

var readlineSync = require('readline-sync');

// function do the process of asking question and store answer. 

function answer_of_story_file(in_parse_sentences) 
{
    var in_answer_array=[]; // this array will store the answer word from the MCQ, will be used in story file.
    
    var option = ["a","b","c","d","e"]; // user will type this option
    
    for(var i=0;i<in_parse_sentences.length; i++) // run whole csv to ask question and give option
    {   
        // Question of MCQ and last part from 1st word of csv
        console.log(`Please chose an ${in_parse_sentences[i][0]}`); 
        
        // this for loop will five 5 option (a-e)
        for(var j=1;j<in_parse_sentences[i].length;j++)
        {
            console.log(`${option[j-1]}) ${in_parse_sentences[i][j]}`);
        }
        do
        {
            var in_answer_input= readlineSync.question(`Enter choice (a-e) : `);// user in put (a-e)
            // if answer is not a-e, show Invalid message and case insensitive
            if
            (
                (in_answer_input.toLowerCase() !== "a") &&
                (in_answer_input.toLowerCase() !== "b") &&
                (in_answer_input.toLowerCase() !== "c") &&
                (in_answer_input.toLowerCase() !== "d") &&
                (in_answer_input.toLowerCase() !== "e")  
            )
            {
                console.log(`Invalid, try again`)
            }
        }while // below are the condition to run again
        (
            (in_answer_input.toLowerCase() !== "a") &&
            (in_answer_input.toLowerCase() !== "b") &&
            (in_answer_input.toLowerCase() !== "c") &&
            (in_answer_input.toLowerCase() !== "d") &&
            (in_answer_input.toLowerCase() !== "e")
        
        );
        
       
        // this condition will send the answer word to in_answer_array.
        if(in_answer_input.toLowerCase() === "a")
        {
            in_answer_array.push(in_parse_sentences[i][1]);
        }
        else if(in_answer_input.toLowerCase() === "b")
        {
            in_answer_array.push(in_parse_sentences[i][2]);
        }
        else if(in_answer_input.toLowerCase() === "c")
        {
            in_answer_array.push(in_parse_sentences[i][3]);
        }
        else if(in_answer_input.toLowerCase() === "d")
        {
            in_answer_array.push(in_parse_sentences[i][4]);
        }
        else if(in_answer_input.toLowerCase() === "e")
        {
            in_answer_array.push(in_parse_sentences[i][5]);
        }
    }

    return in_answer_array; // this is the return which will go to main finction
}

function main()
{
    var read_choice_file ="the_choices_file.csv"; // Read csv file
    
    // this will read choice file and parse the sentences
    var choice_file_sentences = fs.readFileSync(read_choice_file,"utf8");
    var parse_sentences =parse(choice_file_sentences);

    // answer of story file funtion called by the parse-sentences parameter.
    var answer_array= answer_of_story_file(parse_sentences);

    var story_file="the_story_file.txt"; // story file path where answer can be set
    var  read_story_file= fs.readFileSync(story_file,"utf8").split("\n"); // story file read and split in new line

    var parse_story =parse(read_story_file); // parse to 2-D array

    // message of comepleted story
    console.log(`Your completed story:\n`)

    // for loop used to run each sentences of story file
    for(var i=0;i<read_story_file.length;i++)
    {   

        for(var j=0;j<answer_array.length;j++)
        {   
            // Replace the word with answer array in each line.
            read_story_file[i]= read_story_file[i].replace(`_${j+1}_`,answer_array[j].toUpperCase());
                
        }
        console.log(read_story_file[i]); // Display each line
        

    }
     
    // The end.
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
