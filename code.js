/// getting all the variables

const rockBtn = document.querySelector('.btn.rock')
const paperBtn = document.querySelector('.btn.paper');
let scissorsBtn = document.querySelector('.btn.scissors');


let playerScore = document.querySelector('.player-score').getElementsByTagName('p')[0];
let compScore = document.querySelector('.comp-score').getElementsByTagName('p')[0];

let playerSelection = "";
let matches = 0;

// logic for the game
let number = [1,2,3]


/// getting the computers choice
function getComputerChoice(){
    let val = number[Math.floor(Math.random() * number.length)]
    if (val == 1)
        return 'rock'
    else if (val == 2)
        return 'paper'
    else
        return 'scissors'

}
function playRound(playerSelection, computerSelection)
{
    console.log(playerSelection,computerSelection)
    if (playerSelection == computerSelection){
        //console.log('This is a draw')
        return 0
    }
        
    else if (playerSelection == 'rock'  && computerSelection == 'scissors')
    {
        //console.log('This is a win')
        return 1
    }   
    else if (playerSelection =='paper' && computerSelection == 'rock')
    {
        //console.log('This is a win')
        return 1
    }
    else
    {
        //console.log('You have lost')
        return -1
    }
    
}
let p_s = 0;
let c_s = 0;
rockBtn.addEventListener('click',function(){

    playerSelection = 'rock';
    matches += 1;
    let val = playRound(playerSelection,getComputerChoice())
    if (val > 0){
        p_s += 1
    }
    else if(val < 0){
        c_s += 1;
    }
    else{
        p_s+=0;
    }
    playerScore.innerText =  p_s;
    compScore.innerText = c_s;

})

paperBtn.addEventListener('click',function(){
    playerSelection = 'paper';
    matches += 1;
    
    let val = playRound(playerSelection,getComputerChoice())
    if (val > 0){
        p_s += 1
    }
    else if(val < 0){
        c_s += 1;
    }
    else{
        p_s+=0;
    }
    playerScore.innerText =  p_s;
    compScore.innerText = c_s;
})

scissorsBtn.addEventListener('click',function(){
    playerSelection = 'scissors';
    matches += 1;
    let val = playRound(playerSelection,getComputerChoice())
    if (val > 0){
        p_s += 1
    }
    else if(val < 0){
        c_s += 1;
    }
    else{
        p_s+=0;
    }
    playerScore.innerText =  p_s;
    compScore.innerText = c_s;
})



