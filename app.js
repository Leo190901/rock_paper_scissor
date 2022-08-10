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


/*function game(){

    let comp_ctr = 0;
    let player_ctr = 0;

    for(let i = 0; i < 5; i++){
        let comp_choice = getComputerChoice();
        let player_choice = prompt("Enter choice: ").toLocaleLowerCase()
        let result = playRound(player_choice, comp_choice)

        if(result.includes("Win")){
            player_ctr++
        }else if(result.includes("Lose")){
            comp_ctr++
        }else{
            player_ctr++;
            comp_ctr++;
        }

        console.log(player_ctr, comp_ctr)

        console.log(result)
    }

    console.log(`Score:     Player: ${player_ctr}   Computer: ${comp_ctr}`)

    if(player_ctr < comp_ctr){
        console.log("Computer Wins!")
    }else if(player_ctr > comp_ctr){
        console.log("Player Wins!")
    }else{
        console.log("Draw!")
    }

}

game()*/

btns = document.querySelectorAll('button');
console.log(btns)

btns.forEach(element => {
    element.addEventListener('click', () => {
        let comp_choice = getComputerChoice();
        let player_choice = element.id;

        let div = document.createElement('div');
        div.classList.add('result');
        
        let container = document.querySelector('.container');
        container.appendChild(div)

        div.innerText = playRound(player_choice, comp_choice);
        console.log(playRound(player_choice, comp_choice));

    })
    
});
