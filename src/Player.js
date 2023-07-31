import { createGameboard } from './Gameboard'
export class Player {
    constructor() {
        this.gameBoard = createGameboard();
        this.playedCoordinates = []; // Keep track of coordinates already played
    }

    randomPlay() {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (this.isCoordinatePlayed(x, y));

        this.playedCoordinates.push({ x, y }); // Record the new coordinates
        return { x, y };
    }


    isCoordinatePlayed(x, y) {
        for (const coord of this.playedCoordinates) {
            if (coord.x === x && coord.y === y) {
                return true; // Coordinate has been played before
            }
        }
        return false; // Coordinate has not been played before
    }

    takeTurn(enemyGameboard) {
        const { row, col } = this.randomPlay();
        enemyGameboard.receiveAttack(row, col);
    }
}