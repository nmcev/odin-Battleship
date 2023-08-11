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
  placeShipsRandomly(shipLength) {
    for (length of shipLength) {
      let isPlaced = false;
      while (!isPlaced) {
        const row = Math.floor(Math.random() * 10)
        const col = Math.floor((Math.random()) * 10)
        const isHorizontal = Math.random() < 0.5
        if (this.placeShipAt(row, col, length, isHorizontal)) {
          isPlaced = true;
        }
      }
    }
  }

  placeShipAt(x, y, length, isHorizontal = true) {
    const newShip = new Ship(length);



    for (let i = 0; i < length; i++) {
      const targetX = isHorizontal ? x + i : x;
      const targetY = isHorizontal ? y : y + i;

      if (targetX >= 10 || targetY >= 10 || this.array10x10[targetX][targetY] !== null) {
        console.log("Cannot place a ship here");
        return false;
      }
    }

    for (let i = 0; i < length; i++) {
      const targetX = isHorizontal ? x + i : x;
      const targetY = isHorizontal ? y : y + i;

      this.array10x10[targetX][targetY] = newShip;
    }

    this.ships.push(newShip);
    return true;
  }

  receiveAttack(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
      const shipToAttack = this.array10x10[x][y];
      if (!shipToAttack) {
        this.missedAttack.push({ x, y });
        return false;
      }


      return true;
    }
  }

  checkingBoard() {
    return this.ships.every(ship => ship.isSunk());
  }
}
