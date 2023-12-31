//Tic-Tac-Toe by Christopher Bogs
//Odin Project Intermediate Javascript

function GameController() {
  //set a flag for when we have a winner
  const winFlag = false;

  // create board

  const board = Gameboard();

  // create two players

  const player = [
    {
      name: "xPlayer",
      marker: "X",
    },
    {
      name: "oPlayer",
      marker: "O",
    },
  ];

  let activePlayer = player[0]; //start with X

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === player[0] ? player[1] : player[0];
  };

  const getActivePlayer = () => activePlayer;

  // main loop

  do {
    promptPlayer();

    printBoard();

    // evaluate
    // if no win, prompt o for location

    // switch player
    switchPlayerTurn();
  } while (winFlag === false);

  // report win/loss
  // increment winner's score
  // restart

  // console.log("Before place: " + board.getBoard());

  // board.placeMarker(player[0], 0, 0);

  // console.log("After place: " + board.getBoard());

  // board.placeMarker(player[1], 2, 2);

  // console.log("After place: " + board.getBoard());

  function Gameboard() {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    //get the board for the UI
    const getBoard = () => board;

    //place a marker -- let's incorporate the vacancy checking here
    const placeMarker = (player, space) => {
      if (board[space - 1] === 0) {
        board[space - 1] = player["marker"];
        return true;
      } else return false;
    };

    return { board, getBoard, placeMarker };
  }

  function printBoard() {
    const thisBoard = board.getBoard();
    let row1 = thisBoard[0] + "|" + thisBoard[1] + "|" + thisBoard[2];
    let row2 = thisBoard[3] + "|" + thisBoard[4] + "|" + thisBoard[5];
    let row3 = thisBoard[6] + "|" + thisBoard[7] + "|" + thisBoard[8];

    console.log(row1 + "\n" + row2 + "\n" + row3);

    return;
  }

  function promptPlayer() {
    let promptMessage = "Space to place an " + activePlayer.marker + "?";
    let currentSpace = 0;

    currentSpace = prompt(promptMessage);

    board.placeMarker(activePlayer, currentSpace);
  }

  // function promptPlayer() {
  //   let currentColumn = 0;
  //   let currentRow = 0;

  //   let goodRow = false;
  //   let goodColumn = false;
  //   let spaceIsEmpty = false;

  //   const thisBoard = board.getBoard();

  //   while (!spaceIsEmpty) {
  //     while (!goodRow) {
  //       let rowPromptMessage = "Row to place " + activePlayer.marker + "?";
  //       currentRow = prompt(rowPromptMessage);

  //       if (
  //         currentRow >= 0 &&
  //         currentRow <= 2 &&
  //         currentRow != null &&
  //         currentRow != undefined
  //       ) {
  //         console.log("Row is now " + currentRow);
  //         goodRow = true;
  //       } else {
  //         console.log("Pick a better number");
  //         goodRow = false;
  //       }
  //     }

  //     while (!goodColumn) {
  //       let columnPromptMessage =
  //         "Column to place " + activePlayer.marker + "?";
  //       currentColumn = prompt(columnPromptMessage);

  //       if (
  //         currentColumn >= 0 &&
  //         currentColumn <= 2 &&
  //         currentColumn != null &&
  //         currentColumn != undefined
  //       ) {
  //         console.log("Row is now " + currentColumn);
  //         goodColumn = true;
  //       } else {
  //         console.log("Pick a better number");
  //         goodColumn = false;
  //       }
  //     }

  //     // check to make sure the column/row are empty
  //     if (thisBoard[currentRow][currentColumn] != 0) {
  //       console.log("That location has already been claimed!");
  //       spaceIsEmpty = false;
  //       promptPlayer();
  //     } else {
  //       spaceIsEmpty = true;
  //     }
  //   }

  //   // place x in location
  //   console.log(
  //     "Placing marker " +
  //       activePlayer.marker +
  //       " in row " +
  //       currentRow +
  //       ", column " +
  //       currentColumn
  //   );
  //   board.placeMarker(activePlayer, currentRow, currentColumn);
  // }

  // function checkInput(value){

  // }
}

const game = GameController();
