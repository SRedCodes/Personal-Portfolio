// //rock paper scissors
// let playerOne = "rock";
// let computer = "paper";

// switch(playerOne){

//     case(computer):

//         console.log("Tie Game !");
//         break;

//     case ("rock"):
//         if( computer === "paper"){
//             console.log(" Computer wins !");
//         }
//         else{
//             console.log("playerOne wins !");
//         }
//     break;
//     case ("paper"):
//         if( computer === "scissors"){
//             console.log(" Computer wins !");
//         }
//         else{
//             console.log("playerOne wins !");
//         }
//     break;
//     default:
//         if( computer === "rock"){
//             console.log(" Computer wins !");
//         }
//         else{
//             console.log("playerOne wins !");
//         }
//     break;
let playerOne="scissors";
let computer="rock";

playerOne===computer ? console.log("Tie Game !"):
playerOne ==="rock"  && computer ==="paper" ? console.log("Computer Wins!"):
playerOne ==="paper"  && computer ==="scissors" ? console.log("Computer Wins!"):
playerOne ==="scissors"  && computer ==="rock" ? console.log("Computer Wins!"):console.log("playerOne Wins!");

