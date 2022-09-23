const Ship = require("../src/modules/battleShip");
const gameBoard = require("../src/modules/gameBoard")
const player = require('../src/modules/player')

describe('Player Tests', ()=>{
  test ('Player name', ()=> {
    const player1 = new player('one');
    expect(player1.playerName).toBe('one')
  })

  test('Players take Turns, player 1', ()=>{
    const board1 = new gameBoard();
    const board2 = new gameBoard();
    const player1 = new player('one');
    const player2 = new player('two');
    player2.endTurn();
    expect(player1.turn).toBe(true);
    expect(player2.turn).toBe(false);
    player1.attack(1, 1, player2, board2);
  })
  
  test('Players take Turns, after attack', ()=>{
    const board1 = new gameBoard();
    const board2 = new gameBoard();
    const player1 = new player('one');
    const player2 = new player('two');
    
    player1.attack(1, 1, player2, board2);
    expect(player1.turn).toBe(false);
    expect(player2.turn).toBe(true);
  })
  
  test ('Board receives other player attack', ()=> {
    const board = new gameBoard();
    const player1 = new player('one');
    const player2 = new player('two');
    // player 2 ship
    const patrol = new Ship(1);
    // player 2 places its ship
    board.placeShip(patrol, 1, 1);
    // player 1 attacks player board on locaction 1,1
    player1.attack(1, 1, player2, board);
    expect(board.getBoard[1][1].hitted).toBe(1)
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

    expect(patrol.hitBox[0]).toBe('hit')
  })
})

describe ('A.I. Player tests', ()=>{
  test ('A.I. attack', ()=>{
    const board1 = new gameBoard(); 
    const player1 = new player('one'); 
    const AIplayer = new player('robot'); 
    // returns random player x, y position.
    expect(AIplayer.aiAttack(player1, board1)).toBe(1);
  })
})