import { createGameboard } from '../src/Gameboard';
test('should place ships correctly on the game board', () => {
const gameboard = new createGameboard();
gameboard.placeShipAt(0, 0, 4);
gameboard.placeShipAt(1, 5, 4);
gameboard.placeShipAt(9, 5, 5); // Fix coordinates for testing

// Check if the ships are correctly placed
expect(gameboard.array10x10[0][0]).not.toEqual(null);
expect(gameboard.array10x10[1][5]).not.toEqual(null);
expect(gameboard.array10x10[9][5]).toEqual(null); // Update this line
expect(gameboard.array10x10[1][4]).toEqual(null);
});
