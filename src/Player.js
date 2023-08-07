import { createGameboard } from './Gameboard';

export class Player {
    constructor() {
        this.gameboard = new createGameboard()
        this.playedCoordinates = []; // Keep track of coordinates already played
    }

    randomPlay() {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (this.isCoordinatePlayed(x, y));

        this.playedCoordinates.push({ x, y })
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
        const { x, y } = this.randomPlay();
        const isSuccessful = enemyGameboard.receiveAttack(x, y);
        return { x, y, isSuccessful };
    }
}