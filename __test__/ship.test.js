/* eslint-disable no-undef */
import Ship from '../src/ship';

test('should correctly increase the number of hits when hit() is called', () => {
  const ship = Ship(4);
  ship.hit();// 3
  expect(ship.isSunk()).toBe(false);
  ship.hit();// 2
  expect(ship.isSunk()).toBe(false);
  ship.hit();// 1
  expect(ship.isSunk()).toBe(false);
  ship.hit();// 0
  expect(ship.isSunk()).toBe(true);
});
test('should correctly determine if the ship is sunk', () => {
  const ship = Ship(3);
  expect(ship.isSunk()).toBe(false);
  ship.hit();// 2
  expect(ship.isSunk()).toBe(false);
  ship.hit();// 1
  expect(ship.isSunk()).toBe(false);
  ship.hit();// 0
  expect(ship.isSunk()).toBe(true);
});
