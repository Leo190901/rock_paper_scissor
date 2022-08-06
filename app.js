function getComputerChoice(){
    choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * 3);
    return choices[choice]

}



function playRound(playerSelection, computerSelection){
    if( playerSelection == "rock" && computerSelection == "rock"){
        console.log("Draw!")
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock!")
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors!")
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        console.log("Draw!")
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Scissors beat Paper!")
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock!")
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("Draw!")
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beat Paper!")
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors!")
    }
}

let comp_choice = getComputerChoice();
let player_choice = prompt("Enter choice: ")

playRound(player_choice, comp_choice)