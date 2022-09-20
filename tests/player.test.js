const Ship = require("../modules/battleShip");
const gameBoard = require("../modules/gameBoard")
const player = require('../modules/player')

describe('Player Tests', ()=>{
  test ('Player name', ()=> {
    const player1 = new player('one');
    expect(player1.playerName).toBe('one')
  })
  
  test ('Player can attack other player', ()=> {
    const board = new gameBoard();
    const player1 = new player('one');
    const player2 = new player('two');
    // player 2 ship
    const patrol = new Ship(1);
    // player 2 places its ship
    board.placeShip(patrol, 1, 1);
    // player 1 attacks player boad on locaction 1,1
    player1.attack(1, 1, player2, board);

    expect(patrol.hit).toBe(1)
  })
})