//Tic-Tac-Toe by Christopher Bogs
//Odin Project Intermediate Javascript

function Gameboard() {

    const board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];  
    
    //what if we made x=2 and o=3, and blanks 0?  multiplying across gives 0, a multiple of 2, or of 3?

    //get the board for the UI
    const getBoard = () => board;

    //place a marker
    const placeMarker = (player, row, column) => {
        board[row][column] = player["marker"];
    }

    return { board, getBoard, placeMarker };

}



// function Player() {
//     const createPlayer = (marker) => {
//         const player = [{
//             playerMarker: marker,
//             playerScore: 0
//         }];
        
//     }

//     //increment score
//     const incScore = () => playerScore++;

//     //report score
//     const reportScore = () => playerScore;

//     return { createPlayer, incScore, reportScore };
// }


function GameController() {

    //set a flag for when we have a winner
    const winFlag = false;

    // create board

    const board = Gameboard();

    // create two players

    const player = [
        {
            name: "xPlayer",
            marker: "X"
        },
        {
            name: "oPlayer",
            marker: "O"
        }
    ];

    let activePlayer = player[0]; //start with X


    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player[0] ? player[1] : player[0];
    }

    const getActivePlayer = () => activePlayer;

    // main loop

    while (!winFlag) {

    // prompt x for location

    let currentColumn = 0;
    let currentRow = 0;

    
    let rowPromptMessage = ("Row to place " + activePlayer.marker + "?");
    let columnPromptMessage = ("Column to place " + activePlayer.marker + "?");

    currentRow = prompt(rowPromptMessage);
    currentColumn = prompt(columnPromptMessage); // need some validation here

    // place x in location
    console.log("Placing marker " + activePlayer.marker + " in row " + currentRow + ", column " + currentColumn);
    board.placeMarker(activePlayer, currentRow, currentColumn);

    printBoard();

    // evaluate
    // if no win, prompt o for location
    
    // switch player
    switchPlayerTurn();

    }

    // report win/loss
    // increment winner's score
    // restart

    // console.log("Before place: " + board.getBoard());

    // board.placeMarker(player[0], 0, 0);

    // console.log("After place: " + board.getBoard());

    // board.placeMarker(player[1], 2, 2);

    // console.log("After place: " + board.getBoard());


    function printBoard(){
        const thisBoard = board.getBoard();
        let row1 = thisBoard[0];
        let row2 = thisBoard[1];
        let row3 = thisBoard[2];

        console.log(row1 +"\n" + row2 + "\n" + row3);

        return;
    }
    

}

const game = GameController();