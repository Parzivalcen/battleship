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

  placeShip(ship, x, y, axis = 'x'){
    console.log('placeShip', x, y);
    // How do you check if it is at border??
    // I dont think is worth it to keep trying just style it and finish the lesson.
    if(x <= 9 && y <= 9 && axis === 'x'){
      for(let i = 0 ; i < ship.length; i++){
        this.getBoard[x][y + i] = {shipName: ship, 
          shipSquareID: i, hitted: 0, sunk: ship.sunk};
        }
      }else if(axis === 'y') {
        for(let i = 0 ; i < ship.length; i++){
          console.log(i);
          this.getBoard[x + i][y] = {shipName: ship, 
            shipSquareID: i, hitted: 0, sunk: ship.sunk};
          console.log(this.getBoard[x + i][y]);
          }
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