import { createGameboard } from '../src/Gameboard';
// Test for the createGameboard function
describe('createGameboard', () => {
  test('should place ships correctly on the game board', () => {
    const gameboard = createGameboard();
    gameboard.placeShipAt(0, 0, 4)
    gameboard.placeShipAt(1, 5, 4)
    gameboard.placeShipAt(9, 9, 5)
    // Check if the ships are correctly placed
    expect(gameboard.array10x10[0][0]).not.toEqual(null)
    expect(gameboard.array10x10[1][5]).not.toEqual(null)
    expect(gameboard.array10x10[9][9]).not.toEqual(null)
    expect(gameboard.array10x10[1][4]).toEqual(null)



  });

  test('should handle missed attacks correctly', () => {
    const gameboard = createGameboard();
    gameboard.placeShipAt(0, 0, 3);

    // Perform attacks
    gameboard.receiveAttack(1, 1); // Miss
    gameboard.receiveAttack(0, 0); // Hit
    gameboard.receiveAttack(0, 1); // Hit
    gameboard.receiveAttack(0, 2); // Sunk the ship

    // Check if missed attacks are stored correctly
    expect(gameboard.receiveAttack(1, 1)).toEqual(gameboard.missedAttack[1][1]);
    // Check if checkingBoard function works as expected
    expect(gameboard.checkingBoard()).toBe(true);
  });
});
