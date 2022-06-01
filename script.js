function computerPlay(){
  let randomNum = (Math.floor(Math.random()*3+1));
  switch (randomNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "error, unexpected result"
  }
}

function winnerCheck(playerSelection, computerSelection){
  let player = playerSelection.toLowerCase()
  if(player === computerSelection){
    return "You tied!"
  }else if(computerSelection === "paper"){
    return player === "rock" ? "You lose! Paper beats Rock" : "You win! Scissors beats Paper";
  }else if(computerSelection === "rock"){
    return player === "scissors" ? "You lose! Rock beats Scissors" : "You win! Paper beats Rock";
  }else{
    return player === "paper" ? "You lose! Scissors beats Paper" : "You win! Rock beats Scissors";
  }
}

const playerSelection = "PaPer";
const computerSelection = computerPlay();
console.log(winnerCheck(playerSelection, computerSelection));
