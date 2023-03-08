// create a function to get the computer choice 
function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random() * 3)];
}
// create a function that has no parameter to get the user choice
function playerSelection(){
    let choice = prompt("What is your choice: ");
    return choice.toLowerCase();
}
// create a function that take a the computer and the player  choice as a prameter  and return a number
function playRound(ComputerChoice,playerSelection){
    
     if(playerSelection == ComputerChoice ){
        return 0;}

     else if(playerSelection == "rock" && ComputerChoice == "scissor"){
        return 1;
    
    }
     else if(playerSelection == "scissor" && ComputerChoice == "paper"){
        return 1 ;
    }
    else if(playerSelection == "paper" && ComputerChoice == "rock"){
        return 1 ;

    }
    else {
        return -1;
    }
}
// create a function called game that call the playRound() inside of her 5 times and display the winner

function game(){
    let computer_score = 0, player_score = 0;
    for(let i = 0 ; i <5 ; i++){
        
        let player = playerSelection();
        let computer = getComputerChoice();
        
        if(playRound(computer,player) == 1){
            console.log("you win! " + player +" beat "+computer );
            player_score += 1;
        }
        else if(playRound(computer,player) == 0){
            console.log("tie");
            player_score +=1;
            computer_score +=1;
        }
        else {
            console.log("you lose! " + computer +" beat "+player );
            computer_score += 1;

        }
        if(i == 4){
            if(computer_score < player_score){
                console.log("congrats you win you score is : " + player_score+" computer score : "+ computer_score);
            }
            else if(computer_score > player_score){
                console.log("game over you lose you score is : " + player_score+" computer score : "+ computer_score);

            }
            else {
                console.log("It's a tie you score is : " + player_score+" computer score : "+ computer_score);
            }
        }
    }

    
}
// call the game function
game();