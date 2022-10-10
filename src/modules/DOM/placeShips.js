import Ship from "../battleShip";
import gameBoard from "../gameBoard";
// maybe you can convert this into a obj that returns board after being placed in another component
const board1 = new gameBoard();
const board2 = new gameBoard();

const patrol = new Ship(1);
const submarine = new Ship(2);
const destroyer = new Ship(3);
const battleShip = new Ship(4);
const carrier = new Ship(5);
// board1.placeShip(patrol, 1, 1);
// board1.placeShip(submarine, 2, 1);
// board1.placeShip(destroyer, 3, 1);
// board1.placeShip(battleShip, 4, 1);
// board1.placeShip(carrier, 5, 1);

const patrol2 = new Ship(1);
const submarine2 = new Ship(2);
const destroyer2 = new Ship(3);
const battleShip2 = new Ship(4);
const carrier2 = new Ship(5);
board2.placeShip(patrol2, 1, 1);
board2.placeShip(submarine2, 3, 1);
board2.placeShip(destroyer2, 2, 1);
board2.placeShip(battleShip2, 5, 1);
board2.placeShip(carrier2, 8, 1);

const shipsArray1 = [patrol, submarine, destroyer, battleShip, carrier]
const shipsArray2 = [patrol2, submarine2, destroyer2, battleShip2, carrier2]
export {board1, board2, shipsArray1, shipsArray2};