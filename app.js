function getComputerChoice(){
    choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * 3);
    return choices[choice]

}



function playRound(playerSelection, computerSelection){
    if( playerSelection == "rock" && computerSelection == "rock"){
        return "Draw!"
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock!"
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors!"
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        return "Draw!"
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beat Paper!"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock!"
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        return "Draw!"
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beat Paper!"
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors!"
    }
}

let comp_choice = getComputerChoice();
let player_choice = prompt("Enter choice: ").toLocaleLowerCase()

console.log(playRound(player_choice, comp_choice))