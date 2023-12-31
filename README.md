# tictactoe

Odin Project | Tic-Tac-Toe project

             1 2 3 4 5 6 7 8 9

BOARD canbe [0,0,0,0,0,0,0,0,0]

X marks 5: [0,0,0,0,X,0,0,0,0]
O marks 8: [0,0,0,0,X,0,0,O,0]

cycle:

        Ask active player for space
        Check if requested space is 0:
            if no, reject and re-ask
        Mark space for active player
        Check for win:
            if no win, switch active player
            if win, alert and end
