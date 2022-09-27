import Ship from "../battleShip";
import gameBoard from "../gameBoard";
const placeShips = {
  placeShipsP1(){
    const board = new gameBoard();
    const patrol = new Ship(1);
    const submarine = new Ship(2);
    const destroyer = new Ship(3);
    const battleShip = new Ship(4);
    const carrier = new Ship(5);
    board.placeShip(patrol, 1, 1);
    board.placeShip(submarine, 2, 1);
    board.placeShip(destroyer, 3, 1);
    board.placeShip(battleShip, 4, 1);
    board.placeShip(carrier, 5, 1);
    return board;
  },

  placeShipsAI(){
    const board = new gameBoard();
    const patrol = new Ship(1);
    const submarine = new Ship(2);
    const destroyer = new Ship(3);
    const battleShip = new Ship(4);
    const carrier = new Ship(5);
    board.placeShip(patrol, 1, 1);
    board.placeShip(submarine, 3, 1);
    board.placeShip(destroyer, 2, 1);
    board.placeShip(battleShip, 5, 1);
    board.placeShip(carrier, 8, 1);
    return board;
  },
}

export default placeShips;