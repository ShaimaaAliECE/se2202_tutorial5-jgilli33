let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
document.getElementById("next-lbl").innerHTML = nextPlayer;
//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.querySelectorAll('td')
    for(let i = 0; i<cells.length; i++){
        cells[i].innerHTML = '<button>[ ]</button>'
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

        let pressed = event.target;
        pressed.innerHTML = nextPlayer;
        if(nextPlayer=='X'){
            nextPlayer='O';
        }
        else nextPlayer = 'X';
        document.getElementById("next-lbl").innerHTML = nextPlayer;
        pressed.disabled=true;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOver = document.getElementById('game-over-lbl')
        gameOver.innerHTML = '<h3>Game Over</h3>';
    }
    if(xWins()){
        let win = document.getElementById('game-over-lbl')
        win.innerHTML = '<h6>Game Over<br>Winner: X</h6>'
    }
    if(oWins()){
        let win = document.getElementById('game-over-lbl')
        win.innerHTML = '<h6>Game Over<br>Winner: O</h6>'
    }
    
    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let count = 0;
    // This function returns true if all the buttons are disabled and false otherwise
    for (i = 0;i<btns.length; i++){
        if (btns[i].disabled===true){
            count++;
        }}
        if(count==btns.length){return true;}
        else{return false;}
}
    let winConditions = [["c1","c2","c3"],["c4","c5","c6"],["c7","c8","c9"],["c1","c4","c7"],["c2","c5","c8"],["c3","c6","c9"],["c1","c5","c9"],["c3","c5","c7"]]

function xWins(){
    let counter;
    for(let i = 0; i < winConditions.length; i++){
        counter=0;
        for(let j = 0; j < winConditions[i].length; j++){
            if(document.getElementById(winConditions[i][j]).innerHTML == '<button disabled="">X</button>'){
                counter++
            }
            if (counter===3){
                for(let k = 0; k<btns.length; k++){
                    btns[k].disabled=true;
                }
                return true;}
        }
    }
}
function oWins(){
    let counter;
    for(let i = 0; i < winConditions.length; i++){
        counter=0;
        for(let j = 0; j < winConditions[i].length; j++){
            if(document.getElementById(winConditions[i][j]).innerHTML == '<button disabled="">O</button>'){
                counter++
            }
            if (counter===3){
                for(let k = 0; k<btns.length; k++){
                    btns[k].disabled=true;
                }
                return true;}
        }
    }
}
