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

console.log(computerPlay())
