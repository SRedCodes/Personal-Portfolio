//rock paper scissors
const initGame = () =>{
    const startGame = confirm("let's Play a game of ROCK , PAPER, SCISSORS");
    startGame ? playGame():playLater();

}
//Game flow Function
function playGame(){
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            isInvalidPlayerChoice();
            continue;
        }
        if(!playerChoice){
            abandonPlay();
            break;
        }
         if(playerChoice === evaluatePlayerChoice(playerChoice)){
            const computerChoice = evaluateComputerChoice();
            const  result = computeResult(playerChoice,computerChoice);
            displayResult(result , playerChoice, computerChoice);
            if(playAgain()){
                continue;
            }
            else{
                thankyouForPlaying()
                break;
            }
         }
         else{
            isInvalidPlayerChoice();
            continue;
         }     
            }
        }

const formatPlayerChoice = (playerChoice) =>{
    if(playerChoice){
        return playerChoice.trim().toLowerCase();
    }
    else{
        return false;
    }
}
const playLater = () =>{
    alert("Okay, Maybe next time !");
}

const getPlayerChoice = () =>{
    return prompt("PLAYER'S Choice :");
}

const isInvalidPlayerChoice=()=> {
    alert("Not a Valid Player Choice");
}

const evaluateComputerChoice = () =>{
    const arrayIndex = Math.floor(Math.random()*3);
    const computerArray = ["rock" , "paper" , "scissors"];
    return computerArray[arrayIndex];
}
const evaluatePlayerChoice = (playerChoice) =>{
    if (playerChoice === "rock"||playerChoice === "scissors" ||playerChoice === "paper"){
        return playerChoice;
    }
    else{
        return "";
    }

}
const abandonPlay = () =>{
    alert("Okay Maybe Text Time !");
}
const computeResult = (playerChoice,computerChoice) =>{
    let result = playerChoice === computerChoice ? "Tie Game !" :
    playerChoice ==="rock" && computerChoice ==="paper" ? "computer Wins !":
    playerChoice ==="paper" && computerChoice ==="scissors" ? "computer Wins !":
    playerChoice ==="scissors" && computerChoice ==="rock" ? "computer Wins !":"Player Wins !";
    return result;
    
}
const displayResult=(result , playerChoice, computerChoice)=>{
    alert(`PLAYER chose: ${playerChoice}\nCOMPUTER chose: ${computerChoice}\n${result}`);
}
const playAgain=()=>{
     return confirm("Play Again ?");
}
const thankyouForPlaying = () =>{
    alert("Thankyou for Playing");
}

initGame();