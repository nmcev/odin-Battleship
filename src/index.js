import { Player } from './Player';
import { renderGameBoardOF, stylingBoards, computerBoard, playerBoard, markCell, markComputerCell, updatePlayerBoardDOM, horizontalButton, verticalButton } from './Dom';
import { createGameboard } from './Gameboard';

// Step 1: Create players
const player = new Player();
const computer = new Player();

// Step 2: Set up game boards
export const playerGameboard = new createGameboard();
const computerGameboard = new createGameboard();

// Step 3: Render game boards
renderGameBoardOF(playerBoard);
renderGameBoardOF(computerBoard);

// getting cells
const computerCells = document.querySelectorAll('#computerBoard > .cell');
const playerBoardDiv = document.querySelectorAll("#playerBoard > .cell");
computerBoard.style.cursor = "pointer"
stylingBoards();

function computerTurn() {
    const computerAttacked = computer.takeTurn(playerGameboard);
    const row = computerAttacked.x;
    const col = computerAttacked.y;
    const index = row * 10 + col;


    if (computerAttacked.isSuccessful) {
        markComputerCell(playerBoardDiv, index, true);

        if (playerGameboard.checkingBoard()) {
            alert("Computer Won");
        }
        setTimeout(computerTurn, 1000);
    } else {
        markComputerCell(playerBoardDiv, index, false);
        console.log(`Computer missed at: (${row}, ${col})`);

        computerBoard.style.pointerEvents = 'auto';
    }
}