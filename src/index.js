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