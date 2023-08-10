export const computerBoard = document.getElementById('computerBoard')
export const playerBoard = document.getElementById('playerBoard'); // Assuming there's an element with the ID 'player-board' in the HTML file
const content = document.getElementById('content');
const body = document.querySelector('body')
import backgroundImage from '../assets/resource/background.jpg';

export function renderGameBoardOF(elementToAppend) {
    let totalCells = 10 * 10
    for (let i = 0; i < totalCells; i += 1) {
        let cell = document.createElement('div')
        const row = Math.floor(i / 10);
        const col = i % 10;

        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.className = 'cell'

        cell.style.width = "50px"
        cell.style.height = "50px"
        cell.style.border = "1px solid black"
        cell.style.display = "inline-block"
        cell.style.float = 'left';
        elementToAppend.appendChild(cell);
    }
}

export function stylingBoards() {
    body.style.height = '100vh'
    body.style.margin = '0'
    body.style.backgroundImage = `url(${backgroundImage})`
    content.style.display = 'flex'
    content.style.justifyContent = 'center'
    content.style.alignItems = 'center'
    content.style.height = '100vh'
    content.style.gap = '1.82rem'
    playerBoard.style.maxWidth = '550px'
    computerBoard.style.maxWidth = '550px'

}

export function markCell(cell, hit) {
    if (hit) {
        cell.style.backgroundColor = 'red'; // hit
    } else {
        cell.style.backgroundColor = 'black'; // missed
    }

}
export function markComputerCell(board, index, hit) {
    if (hit) {
        board[index].style.backgroundColor = 'red';//hit
    }
    else {
        board[index].style.backgroundColor = '#333';
    }
}

export function updatePlayerBoardDOM(gameboard) {
    const boardCells = playerBoard.querySelectorAll('.cell');

    for (let i = 0; i < boardCells.length; i++) {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const cell = boardCells[i];

        const ship = gameboard[row][col];
        if (ship !== null) {
            cell.style.backgroundColor = "#333"
        }
    }
}