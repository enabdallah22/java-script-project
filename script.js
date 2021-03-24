
// ><><><><><><><><>< start ><><><><><><><><><>
let userChoice ;
let computerChoice ;
let result ;
let ranNum;


const displayResult = document.getElementById('result');
const computerPick = document.getElementById('compChoice');
const userPick = document.getElementById('userChoice');
const resetBtn = document.getElementById('playAgain');
const possibleChoices = document.querySelectorAll('.choices');
// ................Game start.................
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', fun => {
    userChoice = fun.target.id;
    ranNum = Math.floor(Math.random() * 3 ) + 1;
    generateCompChoice();
    compareChoices ();
    //computer choices as images .......
    if (computerChoice == 'rock') computerPick.innerHTML = 'rock' + '<img src="./images/rock.png">';
    else if (computerChoice == 'paper') computerPick.innerHTML = 'paper' + '<img src="./images/paper.png">';
    else computerPick.innerHTML = 'scissors' + '<img src="./images/scissors.png">';
    // user choices as images .......
    if (userChoice == 'rock') userPick.innerHTML = 'rock' + '<img src="./images/rock.png">';
    else if  (userChoice == 'paper') userPick.innerHTML = 'paper' + '<img src="./images/paper.png">';
    else userPick.innerHTML = 'scissors' + '<img src="./images/scissors.png">';
    displayResult.innerHTML = '>>>' + result + '<<<';
}))

// computer random choice 
function generateCompChoice(){
    if (ranNum == 1)
    computerChoice = 'rock';
    else if (ranNum == 2)
    computerChoice = 'paper';
    else if (ranNum == 3)
    computerChoice = 'scissors';

}
// compare choices function...........................

function compareChoices(){
    //..............tie........
    if(userChoice == computerChoice) result = "!! Tie !!";
    /////..........user win .......
    else if (userChoice == 'scissors' && computerChoice == 'paper')
    result = "!! You Win !!";
    else if (userChoice == 'paper' && computerChoice == 'rock')
    result = "!! You Win !!";
    else if (userChoice == 'rock' && computerChoice == 'scissors')
    result = "!! You Win !!";
    //................computer win.....
    else if (userChoice == 'rock' && computerChoice == 'paper')
    result = "!! Computer Win !!";
    else if (userChoice == 'paper' && computerChoice == 'scissors')
    result = "!! Computer Win !!";
    else if (userChoice == 'scissors' && computerChoice == 'rock')
    result = "!! Computer Win !!";  
}

//play Again function mmmm
function playAgain(){
    computerChoice = '_____';
    computerPick.innerHTML = computerChoice;
    ranNum = 0;
    userChoice = '_____';
    userPick.innerHTML = userChoice;
    displayResult.innerHTML = '_____';
}