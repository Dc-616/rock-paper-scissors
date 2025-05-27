/*creat rock paper sicor
1.creat function thet return randormly from 3 choise V
2.creat function thet return a prompt thet let the user choose from 3 option
3.creat to place holder (let) for humen score and computer score
4.creat function thet return a decleretion of the correct score 
5.logic for the game-game start (prompt?) round X and then show the score and start another round
--game logic--
game start user choose 
pc turn
function thet can check win condetions
case will handel from user chosie
check if user choose same as pc if yes atart the round agine with prompt thet explain.
switch statment 
user chose papaer - if pc choose "rock"
add to humen score +1
else pc + 1
extra on the 2 other option
keep going until 1 score go to 5
when score go to 5 prompt the winner  
creat function thet decler winner its get a parameter of the first one who score 5
if function get parameter from pc score decler pc win vis vera 
play game logic -
start function
check if of the score is 5
if its 5 show wining massage
if pc score is 5 pc win msg
if humen score is 5 humen win msg

*/


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} ;


function getComputerChoice (){
let randomNum= getRandomInt(3);
let computerChoice = randomNum 
switch(computerChoice) {
  case 0:
    computerChoice = "rock"
    break;
  case 1:
     computerChoice = "paper"
    break;
     case 2:
     computerChoice = "scissors"
    break;
}
return computerChoice
} ;

function getHumanChoice (){
 let HumanChoice = prompt("choose one : rock/paper/scissors");
HumanChoice = HumanChoice.toLowerCase() ;
return HumanChoice
} ;

let humanScore = 0 ;
let pcScore = 0 ;

function playRound () {
   let human = getHumanChoice ();
   let computer = getComputerChoice () ;
   let roundWinCondetion = false

   while (human===computer) {
      alert("It's a tie! Try again.");
      human = getHumanChoice ();
      computer = getComputerChoice () ;
}
   switch(human) {
  case "rock":
    if (computer === "paper" ) {
    pcScore++
    }
    else {humanScore++ 
    roundWinCondetion = true}
    break;
      case "paper":
    if (computer === "scissors" ) {
    pcScore++
    }
    else {humanScore++ 
    roundWinCondetion = true}
    break;
      case "scissors":
    if (computer === "rock" ) {
    pcScore++
    }
    else {humanScore++ 
    roundWinCondetion = true}
    break;
}
if (roundWinCondetion) {
 prompt(`Human wins this round! Score: Human - ${humanScore}, Computer - ${pcScore}`);
}
else  prompt(`computer wins this round! Score: Human - ${humanScore}, Computer - ${pcScore}`);
} 


function playGame () {
playRound ()
while (humanScore === 5||pcScore === 5) {
if (humanScore > pcScore ){
  prompt (`Human wins the game! Score: Human - ${humanScore}, Computer - ${pcScore} gg`)
}
else prompt (`Pc wins the game! Score: Human - ${humanScore}, Computer - ${pcScore} you lost :<`)
}
playGame ()

}

playGame ()