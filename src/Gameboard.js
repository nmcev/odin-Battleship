import { Ship } from './ship';
const array10x10 = [];
const missedAttack = [];

export function createGameboard() {

  const ships = [];

  const row = 10;
  const column = 10;

  //creating array of 10 * 10 
  for (let index = 0; index < row; index++) {
    const newRow = [];
    for (let j = 0; j < column; j++) {
      newRow.push(null)
    }
    array10x10.push(newRow)
  }

  function placeShipAt(x, y, length) {
    const newShip = Ship(length);// creating new ship

    if (x >= 10 || y >= 10) {
      console.log('cant place ship outside of the board');
      return;
    }

    // Check if there is a ship already at this location
    if (array10x10[x][y] !== null) {
      console.log("Can't place a ship twice");
      return "none";
    }

    array10x10[x][y] = newShip;// set the ship in this[x][y] specific cords  
    ships.push(newShip) // pushing the new ship at the ships array

  }

  
  function receiveAttack(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
      const shipToAttack = array10x10[x][y];
      //checking if there is a ship
      if (shipToAttack == null) {
        console.log('NO Ship there is');
        missedAttack.push({ x, y });
        return;
      }

      console.log(`hits: ${shipToAttack.hit()}`)
      console.log(`IS Sunk: ${shipToAttack.isSunk()}`)

    } else {
      console.log('invalid coordinates. Attack inside the gameBoard')
    }

  }

  function checkingBoard() {
    return ships.every(ship => ship.isSunk());
  }

  function displayMissedAttacks() {
    if (missedAttack.length !== 0) {
      console.log('Missed Attacks: ')
      for (const missed of missedAttack) {
        console.log(`(${missed.x}, ${missed.y})`);
      }
    }
  };


  return {
    placeShipAt,
    receiveAttack,
    checkingBoard,
    displayMissedAttacks,
    array10x10,
    missedAttack
  }

}
