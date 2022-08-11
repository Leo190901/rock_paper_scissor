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



btns = document.querySelectorAll('button');

let comp_ctr = 0;
let player_ctr = 0;

    btns.forEach(element => {
            element.addEventListener('click', () => {
            
            let container = document.querySelector('.container');
            let div = document.createElement('div');
            div.style.cssText = 'font-weight: bold';
            let p = document.createElement('p');
            
            let comp_choice = getComputerChoice();
            let result = playRound(element.id, comp_choice)

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

            p.innerText = `Score:     Player: ${player_ctr}   Computer: ${comp_ctr}`;
            container.appendChild(p);

            if(comp_ctr >= 5 && player_ctr >= 5){
                div.innerText = `Score:     Player: ${player_ctr}   Computer: ${comp_ctr}   ==>    DRAW!`;
                container.appendChild(div)
                comp_ctr = 0;
                player_ctr = 0;
            }
            else if(comp_ctr >= 5){
                div.innerText = `Score:     Player: ${player_ctr}   Computer: ${comp_ctr}   ==>    YOU LOSE!`;
                container.appendChild(div)
                comp_ctr = 0;
                player_ctr = 0;
            }
            else if(player_ctr >= 5){
                div.innerText = `Score:     Player: ${player_ctr}   Computer: ${comp_ctr}   ==>    YOU WIN!`;
                container.appendChild(div)
                comp_ctr = 0;
                player_ctr = 0;
            }
            })
        });
    
    

