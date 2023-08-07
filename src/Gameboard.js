import { Ship } from './ship';

export class createGameboard {
  constructor() {
    this.array10x10 = [];
    this.ships = [];
    this.missedAttack = [];

    for (let i = 0; i < 10; i++) {
      const newRow = new Array(10).fill(null);
      this.array10x10.push(newRow);
    }
  }

  placeShipAt(x, y, length) {
    const newShip = new Ship(length);

    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      console.log('Cannot place ship outside of the board');
      return;
    }

    if (this.array10x10[x][y] !== null) {
      console.log("Cannot place a ship twice");
      return;
    }

    this.array10x10[x][y] = newShip;
    this.ships.push(newShip);
  }

  receiveAttack(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
      const shipToAttack = this.array10x10[x][y];
      if (!shipToAttack) {
        console.log('No ship there');
        this.missedAttack.push({ x, y });
        return false;
      }

      console.log(`hits: ${shipToAttack.hit()}`);
      console.log(`Is Sunk: ${shipToAttack.isSunk()}`);
      console.log(`hit (${x}, ${y})`)
      return true;
    } else {
      console.log('Invalid coordinates. Attack inside the gameBoard');
    }
  }

  checkingBoard() {
    return this.ships.every(ship => ship.isSunk());
  }

  displayMissedAttacks() {
    if (this.missedAttack.length !== 0) {
      console.log('Missed Attacks:');
      for (const missed of this.missedAttack) {
        return console.log(`(${missed.x}, ${missed.y})`);
      }
    }
    return "No Missing Attack"
  }
}
