const gameBoard = require('../modules/gameBoard');
class player {
  constructor(name){
    this.playerName = name;
  }

  attack(x, y, attackedPlayer, board){
    board.receiveAttack(x, y);

  }
}

module.exports = player;