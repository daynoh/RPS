/// getting all the variables

const rockBtn = document.querySelector('.choices-container');
console.log(rockBtn)




/*console.log('Wassup fuckers')
let number = [1,2,3]
function getComputerChoice(){
    let val = number[Math.floor(Math.random() * number.length)]
    if (val == 1)
        return 'rock'
    else if (val == 2)
        return 'paper'
    else
        return 'scissors'
}*/
/*
// console.log(getComputerChoice())
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

//const playerSel = 'rock';
//console.log(playRound(playerSel,getComputerChoice()))

function game(rounds){
    let comp_score = 0;
    let player_score = 0;
    for (let i = 0; i < rounds; i++){
        playerSelect = prompt('Choose your champion ')

        val = playRound(playerSelect,getComputerChoice())
        if (val == -1)
            comp_score += 1;
        if (val == 1)
            player_score += 1;

    if (player_score > comp_score)
    {
        console.log('you win')
        console.log(i)
    }
    else if (comp_score > player_score)
    {
        console.log('Computer wins')
    }
    else
        console.log('Draw')

    }
    console.log('your score is ' + player_score)

}

game(5)
*/