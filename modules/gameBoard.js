class gameBoard {
  constructor(){
    this.getBoard = this.fillBoard()
  }

  fillBoard(){
    const board = new Array(10);
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = {emptySquare: true, hitted: 0};
      }
    }
    return board;
  }

  placeShip(ship, x, y){
    for(let i = 0 ; i < ship.length; i++){
      this.getBoard[x][y + i] = {shipName: ship.name, 
        shipSquareID: i, hitted: 0};
    }
  }

  receiveAttack(x, y){

    this.getBoard[x][y].hitted = 1;

    
  }


  
}

module.exports = gameBoard;