import { Player } from './Player';
import { renderGameBoardOF, computerBoard, playerBoard, markCell, markComputerCell, updatePlayerBoardDOM, horizontalButton, verticalButton, header } from './Dom';
import { createGameboard } from './Gameboard';
import './style.css'
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
const h1 = document.getElementById('header');

computerCells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (playerGameboard.ships.length == 5) {
            const row = Number(cell.dataset.row);
            const col = Number(cell.dataset.col);

            const playerAttacked = computerGameboard.receiveAttack(row, col);

            if (playerAttacked) {
                markCell(cell, true);
                if (computerGameboard.checkingBoard()) {
                    alert("Player won!");
                    computerBoard.style.pointerEvents = "none";
                } else {
                    computerBoard.style.pointerEvents = "auto";

                }
            } else {
                markCell(cell, false);
                computerBoard.style.pointerEvents = "none";
                header.textContent = "Computer Turn";
                header.style.fontSize = '1.8rem';
                header.style.color = '#eee';
                header.style.fontWeight = 'bold';
                setTimeout(computerTurn, 1000);
            }
        } else {
            alert("Not enough ships to attack!")
        }

    });
});

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
    header.textContent = "Player Turn";
}

let isPlacingShips = true;
const shipLengths = [5, 4, 3, 3, 2];
let currentShipIndex = 0;

playerBoardDiv.forEach(cell => {
    cell.addEventListener('click', () => {
        if (isPlacingShips) {
            const row = Number(cell.dataset.row);
            const col = Number(cell.dataset.col);
            let shipLength = shipLengths[currentShipIndex];
            const placementResult = playerGameboard.placeShipAt(row, col, shipLength, verticalButton.checked);

            if (placementResult) {
                // checking if it placed 
                updatePlayerBoardDOM(playerGameboard.array10x10)
                currentShipIndex++;

                if (currentShipIndex === shipLengths.length) {
                    isPlacingShips = false;

                    h1.textContent = "You can play now";
                    h1.style.color = "#eee";
                    h1.style.fontSize = "2rem";
                    h1.style.fontWeight = "bold";
                    h1.style.textAlign = "center";
                    h1.style.marginTop = "2rem";
                    h1.style.marginBottom = "2rem";

                }
            } else {
                console.log(`Cannot place ship at (${row}, ${col})`);
            }

        }
    });
});

computerGameboard.placeShipsRandomly(shipLengths);
