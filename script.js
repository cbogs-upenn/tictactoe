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

    console.log("Start of game: " + board);

    // main loop

    while (!winFlag) {

    // prompt x for location

    promptPlayer();

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

    function promptPlayer(){

        let currentColumn = 0;
        let currentRow = 0;
       
        let goodRow = false;
        let goodColumn = false;
        let spaceIsEmpty = false;

        while (!spaceIsEmpty){

            while (!goodRow) {
            let rowPromptMessage = ("Row to place " + activePlayer.marker + "?");
            currentRow = prompt(rowPromptMessage);    

            if ((currentRow >= 0) && (currentRow <= 2) && (currentRow != null) && (currentRow != undefined)) {
                console.log("Row is now " + currentRow);
                goodRow = true;
            } else {
                console.log("Pick a better number");
                goodRow = false;
                }
            }

            while (!goodColumn) {
                let columnPromptMessage = ("Column to place " + activePlayer.marker + "?");
                currentColumn = prompt(columnPromptMessage);    
        
                if ((currentColumn >= 0) && (currentColumn <= 2) && (currentColumn != null) && (currentColumn != undefined)) {
                    console.log("Row is now " + currentColumn);
                    goodColumn = true;
                } else {
                    console.log("Pick a better number");
                    goodColumn = false;
                    }
            }

            // check to make sure the column/row are empty
            if (board[currentRow][currentColumn] != 0){
                console.log("That location has already been claimed!");
                spaceIsEmpty = false;
            } else {spaceIsEmpty = true;}
    }
    
        // place x in location
        console.log("Placing marker " + activePlayer.marker + " in row " + currentRow + ", column " + currentColumn);
        board.placeMarker(activePlayer, currentRow, currentColumn);

    }

    function checkInput(value){

    }
    

}

const game = GameController();