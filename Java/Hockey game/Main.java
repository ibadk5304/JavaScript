package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        String PlayerName;                         // Declared data type, no of team and player will be used for input
        int noofTeams= 3;                          //used boolean for the validation
        int playerEachTeam= 4;
        boolean isNameCorrect;
        boolean isGoalCorrect;
        boolean isAssistCorrect;
        int noofGoals =0;
        int noofAssists= 0;
        String Rating;

        String[] TeamNames = new String[noofTeams];

        for (int i = 0; i < TeamNames.length; i++) // this loop will take user input
        {
            Scanner sc = new Scanner(System.in);
            System.out.println("Name of Team "+(i+1)+": ");
            TeamNames[i]= sc.next();                 //It will store the team name in array
        }
        Player[][] Teams = new Player [noofTeams][playerEachTeam]; //Declaring a 2-d Array with size of array mentined
        Player[] playersInTeam = new Player[playerEachTeam];
        for (int i = 0; i < TeamNames.length; i++)
        {
            isNameCorrect = false;                      //Boolean isNameCorrect value initialized as false
            isGoalCorrect = false;
            isAssistCorrect = false;
            for (int j=0; j<playerEachTeam; j++) {
                do {                                    /*Do-While loop. If expression in while is true,
                                                        Action in Do is Complted*/
                    System.out.println("Name of player " + (j + 1) + " from Team " + (i + 1) + ": ");
                    Scanner sc = new Scanner(System.in);
                    PlayerName = sc.next();
                    char[] PlayerNametoArray = PlayerName.toCharArray();  // this will convert the name into array to check size is <4
                    if (PlayerNametoArray.length >= 3) {
                        isNameCorrect = true;
                    }
                    else{
                        System.out.println("Name Too Short!!!");  /*If previous logic is not valid else happen*/
                    }
                } while (isNameCorrect == false);

                do {
                    System.out.println("No. of Goals for " + PlayerName + " : ");
                    try {                                         /*Try block for Error handling. If input from user
                                                                    is not a number, user is asked for new number with
                                                                    warning message*/
                        Scanner sc = new Scanner(System.in);
                        noofGoals = sc.nextInt();
                        if (noofGoals>=0){
                            isGoalCorrect = true;
                        }
                        else{
                            System.out.println("Number error");
                        }
                    }
                    catch(Exception e){                            /*Catch is alternate part of try*/
                        System.out.println("Datatype error");
                        isGoalCorrect = false;
                    }
                }while(isGoalCorrect == false);

                do {
                    System.out.println("No. of Assists for " + PlayerName + " : ");
                    try {
                        Scanner sc = new Scanner(System.in);
                        noofAssists = sc.nextInt();
                        if (noofAssists >= 0) {
                            isAssistCorrect = true;
                        }
                        else{
                            System.out.println("Number error");
                        }
                    }
                    catch(Exception e) {
                        isAssistCorrect = false;
                        System.out.println("Datatype error");
                    }
                }while(isAssistCorrect == false);


                Player Person = new Player(PlayerName, noofGoals, noofAssists );  /*Customezed Class type is Used.
                                                                                  Pre Defined Datatype Player is Called
                                                                                  to save the data about
                                                                                  it's attributes*/
                playersInTeam[j]=Person;
                Teams[i][j]= Person;
            }
            Team TeamLocal= new Team(TeamNames[i],playersInTeam); /*Another Datatype Team is called and data is saved
                                                                  in its attributes*/
        }
        System.out.println("\n\n----Team Stat----");            /*Following for loop for printing Team Stat*/
        for(int i = 0; i < TeamNames.length; i++){
            int TeamTotalGoals =0;
            int TeamTotalAssists =0;
            int TeamTotalGoalsandAssists =0;
            Rating = "";
            System.out.println(TeamNames[i]+" : ");
            for (int j = 0; j < playerEachTeam; j++) {
                TeamTotalGoals = TeamTotalGoals + Teams[i][j].numofGoals;
                TeamTotalAssists = TeamTotalAssists + Teams[i][j].numofAssists;
                TeamTotalGoalsandAssists = TeamTotalGoals + TeamTotalAssists;
                if(TeamTotalGoalsandAssists>20){
                    Rating= "***";
                }
                else if(TeamTotalGoalsandAssists>=10){
                    Rating="**";
                }
                else if(TeamTotalGoalsandAssists>0){
                    Rating="*";
                }
                else{
                    Rating=" ";
                }
            }
            double oldBudget = Math.random() * 100000 + 0; /*Random Number generator for specified range.
                                                           It is done through Math class/Function.
                                                           No need to import separately*/
            double Budget =Math.round(oldBudget*100)/100.00; /*Rounding the number to upto 2 decimal places*/
            System.out.println("G: " +TeamTotalGoals+"\t\tA: "+TeamTotalAssists+
                    "\t\tTotal:"+TeamTotalGoalsandAssists+"\t\tBudget: $"+Budget+
                    "\nRating: "+Rating+"\n");
        }
        System.out.println("\n----Player Stat----");        /*Following for loop for printing Player Stat*/
        for(int i = 0; i < TeamNames.length; i++){
            for (int j = 0; j < playerEachTeam; j++) {
                System.out.println("Team Name: "+TeamNames[i]+"\n"+
                        "\t\tName: "+Teams[i][j].Name+
                        "\t\tG: "+ Teams[i][j].numofGoals+
                        "\t\tA: "+ Teams[i][j].numofAssists+
                        "\t\tTotal: "+(Teams[i][j].numofGoals+Teams[i][j].numofAssists));
            }
        }
    }
}