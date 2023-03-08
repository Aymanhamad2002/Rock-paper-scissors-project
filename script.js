// create a function to get the computer choice 
function getComputerChoice(){
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random() * 3)];
}
