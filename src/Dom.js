export const computerBoard = document.getElementById('computerBoard')
export const playerBoard = document.getElementById('playerBoard'); // Assuming there's an element with the ID 'player-board' in the HTML file
const content = document.getElementById('content');
const body = document.querySelector('body')
export const header = document.querySelector('#header');
const topic = document.getElementById('topic');
import backgroundImage from '../assets/resource/background.svg';
import shipImage from '../assets/resource/ship.svg';
import skullImage from '../assets/resource/hunted.svg';
import crossMark from '../assets/resource/cross.svg';
import './style.css'


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
        cell.style.border = "1px solid #eee"
        cell.style.display = "inline-block"
        cell.style.float = 'left';
        elementToAppend.appendChild(cell);
    }
}

export function stylingBoards() {
    body.style.margin = '0'
    body.style.backgroundImage = `url(${backgroundImage})`;
    body.style.backgroundSize = "cover";

    content.style.display = 'flex'
    content.style.justifyContent = 'center'
    content.style.alignItems = 'center'
    // content.style.height = '100vh'
    content.style.gap = '1.82rem'
    playerBoard.style.maxWidth = '550px'
    computerBoard.style.maxWidth = '550px'

}

export function markCell(cell, hit) {
    if (hit) {
        cell.style.backgroundImage = `url(${skullImage})`;
        cell.style.backgroundSize = "cover";

    } else {
        cell.style.backgroundImage = `url(${crossMark})`
        cell.style.backgroundSize = "cover";
    }

}
export function markComputerCell(board, index, hit) {
    if (hit) {
        board[index].style.backgroundImage = `url(${skullImage})`;
    }
    else {
        board[index].style.backgroundImage = `url(${crossMark})`;
        board[index].style.backgroundSize = "cover";
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
            cell.style.backgroundImage = `url(${shipImage})`
            cell.style.backgroundSize = "cover";
        }
    }
}


export const horizontalButton = document.createElement('input');
export const verticalButton = document.createElement('input');

export function renderButtonForOrientation() {
    const orientationContainer = document.createElement('div');

    // Horizontal button
    horizontalButton.setAttribute('type', 'radio');
    horizontalButton.setAttribute('value', 'horizontal');
    orientationContainer.appendChild(horizontalButton);

    const horizontalLabel = document.createElement('label');
    horizontalLabel.textContent = "Horizontal";
    orientationContainer.appendChild(horizontalLabel);

    // Vertical button
    verticalButton.setAttribute('type', 'radio');
    verticalButton.setAttribute('value', 'vertical');
    orientationContainer.appendChild(verticalButton);

    const verticalLabel = document.createElement('label');
    verticalLabel.textContent = "Vertical";
    orientationContainer.appendChild(verticalLabel);

    header.appendChild(orientationContainer);

    // Style for button and label
    orientationContainer.style.display = 'flex';
    orientationContainer.style.alignItems = 'center';
    orientationContainer.style.marginRight = '10px';

    // place the input
    body.style.overflowY = 'hidden'
    horizontalLabel.style.color = "#eee";
    verticalLabel.style.color = '#eee';
    body.style.height = '90vh';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    header.style.marginRight = '60rem';
    header.style.marginBottom = '1rem';

    const buttonStyle = 'margin-right: 5px; cursor: pointer;';
    horizontalButton.style = buttonStyle;
    verticalButton.style = buttonStyle;

    // Initial orientation
    let currentOrientation = 'horizontal';


    // Set initial orientation
    horizontalButton.checked = (currentOrientation === 'horizontal');
    verticalButton.checked = (currentOrientation === 'vertical');


    // Add change event listener to handle selection
    horizontalButton.addEventListener('change', () => {
        if (horizontalButton.checked) {
            console.log("Orientation: Horizontal");
            currentOrientation = 'horizontal';
            verticalButton.checked = false;
        }

    });

    verticalButton.addEventListener('change', () => {
        if (verticalButton.checked) {
            console.log("Orientation: Vertical");
            currentOrientation = 'vertical';
            horizontalButton.checked = false;
        }
    });

}

function topicSection() {
    topic.textContent = "Battle Ship";
    topic.style.marginBottom = '4rem';
    topic.style.fontSize = '3rem';
    topic.style.fontWeight = '700';
    topic.style.color = "#cccc00";
}

topicSection();
renderButtonForOrientation();
