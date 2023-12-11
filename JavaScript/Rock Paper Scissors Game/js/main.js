//rock paper scissors
let playGame = confirm("let's Play a game of rock , paper, scissors");
if(playGame === true){
   let playerOne = prompt("PLAYER'S Choice :");
   let playerChoice = playerOne.trim().toLowerCase();
   if(playerChoice==="rock" ||playerChoice==="paper" || playerChoice==="scissors")
   {
        // generating random response for Computer
            let computer = Math.floor(Math.random()*3);
                if(computer === 0)
                {
                    computerChoice ="rock";
                }
                else if( computer === 1)
                {
                    computerChoice ="scissors";
                }
                else{
                    computerChoice = "paper";
                }

        if(playerChoice){
                console.log(`PLAYER chose: ${playerChoice}`);
                console.log(`COMPUTER chose: ${computerChoice}`);
                switch(playerChoice){
                    
                    case(computerChoice):
                        console.log("Tie Game !");
                        break;
                    
                    case "rock":
                        computerChoice=== "paper" ? console.log("Computer wins!"):
                        console.log("Player Wins !");
                        break;
                    
                    case "scissors":
                        computerChoice=== "rock" ? console.log("Computer wins!"):
                        console.log("Player Wins !");
                        break;
                    
                    default:
                        computerChoice=== "scissors" ? console.log("Computer wins!"):
                        console.log("Player Wins !");
                        break;
                }
        }
        else{
            alert("Player did not choose a value");
        }
   }
   else{
    console.log("PLAYER  did not choose a Valid Response");
   }

}
else{
    alert("okay , maybe next time !");
}