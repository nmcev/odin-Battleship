export function Ship(length) {

  const shipLength = length;
  let hits = 0;
  let isShipSunk = false;
  function hit() {
    if (hits < shipLength) {
      hits += 1;
      return hits
    } else {
      return "cant hit more "
    }
  }

  function isSunk() {
    if (hits == shipLength) {
      isShipSunk = true
    }
    return isShipSunk;
  }
  function getLength() {
    return shipLength;
  }
  return {
    hit,
    isSunk,
    getLength
  };
}
