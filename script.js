
function computerPlay(){
  let randomNum = (Math.floor(Math.random()*3+1));
  switch (randomNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function winnerDialog(playerSelection, computerSelection){
  let player = playerSelection.toLowerCase();
  if(player === computerSelection){
    return "It's a tie!"
  }else if(computerSelection === "paper"){
    return player === "rock" ? "Sorry, you lose! Paper beats Rock" : "You win! Scissors beats Paper";
  }else if(computerSelection === "rock"){
    return player === "scissors" ? "Sorry, you lose! Rock beats Scissors" : "You win! Paper beats Rock";
  }else{
    return player === "paper" ? "Sorry, you lose! Scissors beats Paper" : "You win! Rock beats Scissors";
  }
}


function game(){
  let winner = "No One";
  let computerCount = 0;
  let playerCount = 0;
  for (let i = 0; i < 5; i++){
    let computerSelection = computerPlay();
    let playerSelection = prompt("Rock, paper, or scissors?");
    let text = winnerDialog(playerSelection, computerSelection);
    console.log(text);
    if(text[0] === "Y"){
      playerCount++;
    }else if(text[0] === "S"){
      computerCount++;
    }
  }
  if(playerCount > computerCount){
    winner = "YOU!!"
  }else if (computerCount > playerCount){
    winner = "computer"
  }
  console.log(`And the winner is: ${winner}!`)
}

game();
