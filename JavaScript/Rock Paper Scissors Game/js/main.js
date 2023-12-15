//rock paper scissors
let playGame = confirm("let's Play a game of rock , paper, scissors");
if(playGame){
    while(playGame){
        let playerOne = prompt("PLAYER'S Choice :");
        if(playerOne || playerOne === ""){
            let playerChoice = playerOne.trim().toLowerCase();
            if(playerChoice==="rock" || playerChoice==="paper" || playerChoice==="scissors"){
                const arrayIndex = Math.floor(Math.random()*3);
                const computerArray = ["rock" , "paper" , "scissors"];
                const computerChoice= computerArray[arrayIndex];
                console.log(`computer array choice : ${computerChoice}`);
                alert(`PLAYER chose: ${playerChoice}\nCOMPUTER chose: ${computerChoice}`);
                switch(playerChoice){ 
                    case(computerChoice):
                        alert("Tie Game !"); break;
                    case "rock":
                        computerChoice=== "paper" ? alert("COMPUTER wins!"):
                        alert("PLAYER Wins !"); break;
                    case "scissors":
                        computerChoice=== "rock" ? alert("COMPUTER wins!"):
                        alert("PLAYER Wins !");break;
                    default:
                        computerChoice=== "scissors" ? alert("COMPUTER wins!"):
                        alert("PLAYER Wins !");break;
                }
            }
            else{
                alert("Please enter Valid response");
                continue;
            }
            playGame = confirm("Play Again ?");
            if(playGame){
                continue;
            }
            else{
                alert("thankyou for Playing");
            }
        }
        else{
            alert("okay Maybe next Time !");
            break;
        }
    }
}
else{
    alert("okay , maybe next time !");
}