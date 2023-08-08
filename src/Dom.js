export const computerBoard = document.getElementById('computerBoard')
export const playerBoard = document.getElementById('playerBoard'); // Assuming there's an element with the ID 'player-board' in the HTML file
const content = document.getElementById('content');
const body = document.querySelector('body')

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
        cell.style.cursor = 'pointer';

        elementToAppend.appendChild(cell);
    }
}

export function stylingBoards() {
    body.style.height = '100vh'
    body.style.margin = '0'
    content.style.backgroundColor = '#F6F4EB'
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

renderGameBoardOF(playerBoard);
export const playerBoardDiv = document.querySelectorAll("#playerBoard > div");
