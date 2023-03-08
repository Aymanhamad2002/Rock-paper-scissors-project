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
