class gameBoard {
  constructor(){
    this.getBoard = this.fillBoard()
  }

  fillBoard(){
    const board = new Array(10);
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = {shipName: null, shipLength: null, hitted: 0};
      }
    }
    return board;
  }

  placeShip(ship, x, y){
    this.getBoard[x][y] = {shipName: ship.name, 
      shipLength: ship.length, hitted: 0}

  }
}

module.exports = gameBoard;