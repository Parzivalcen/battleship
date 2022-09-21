class gameBoard {
  constructor(){
    this.getBoard = this.fillBoard()
  }

  fillBoard(){
    const board = new Array(10);
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = {shipName: false, emptySquare: true, hitted: 0};
      }
    }
    return board;
  }

  placeShip(ship, x, y){
    for(let i = 0 ; i < ship.length; i++){
      this.getBoard[x][y + i] = {shipName: ship, 
        shipSquareID: i, hitted: 0, sunk: ship.sunk};
    }
  }

  receiveAttack(x, y){
    // if x, y .name === a boat name, hit that boat
    this.getBoard[x][y].hitted = 1;
    if(this.getBoard[x][y].shipName.name){
      this.getBoard[x][y].shipName.hitSquare(this.getBoard[x][y].shipSquareID);
    }


    
  }

  allSunk(shipsArray){
    for(let i = 0;  i < shipsArray.length; i ++){
      if(shipsArray[i].sunk === false) return false;
    }
    return true;
  }

  
}

module.exports = gameBoard;