


  function getComputerChoice(compChoice){
    let chooseNum = Math.floor(Math.random() * 3);
    if (chooseNum == 0){
        return compChoice = 'Rock';
    }
    else if (chooseNum == 1){
       return compChoice = 'Paper';
    }
    else (chooseNum == 2);{
        return compChoice = 'Scissors';
    }
}

let chooseNum = Math.floor(Math.random() * 3);



function playRound(playerSelection, computerSelection){
    let log = '';

    if (playerSelection === 'Rock')
    if (computerSelection === 'Paper') {
        log = 'You Lose! Paper beats Rock';
      } else if (computerSelection === 'Scissors') {
        log = 'You Win! Rock beats Scissors';
      } else {
        log = "It's a tie";
      }

      return log;
}

let playerSelection = 'Rock';
const computerSelection = getComputerChoice();

function game(){
    playerSelection = answer
    
   for (let i = 0; i < 5; i++) {
       let answer = prompt('Rock, Paper or Scissors');
       ;

   }
}

game()







