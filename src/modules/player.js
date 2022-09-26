const gameBoard = require('./gameBoard');
class player {
  constructor(name){
    this.playerName = name;
    this.turn = true;
  }

  attack(x, y, attackedPlayer, board){
    board.receiveAttack(x, y);
    this.endTurn();
    attackedPlayer.turn = true;

  }

  endTurn(){
    this.turn = false;
  }

  // Ai functions
  // test
  aiAttack(board1){
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    board1.receiveAttack(x, y);
    this.endTurn();
    return board1.getBoard[x][y].hitted;
  }
  aiAttackS(board1){
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    board1.receiveAttack(x, y);
    this.endTurn();
    return [x, y];
  }

  // getAttackArray(){
  //   const arr = [];
  //   arr.push(this)
  // }


}

module.exports = player;