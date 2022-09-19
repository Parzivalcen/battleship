const gameBoard = require('../modules/gameBoard');
const Ship = require('../modules/battleShip');

const board = new gameBoard();
const carrier = new Ship(5);

test ('Game Board rows', ()=>{
  expect(board.getBoard.length).toBe(10);
})

test ('Game Board columns', ()=>{
  expect(board.getBoard[0].length).toBe(10);
})

test ('Initial Ship obj', ()=>{
  const obj = {shipName: null, shipLength:null, hitted: 0}
  expect(board.getBoard[0][0]).toEqual(obj);
})

test ('Place ship', ()=>{
  let x = 1;
  let y = 2;
  board.placeShip(carrier, x, y);

  expect(board.getBoard[x][y]).toEqual({shipName: carrier.name, shipLength:carrier.length, hitted: 0})
  for(let i = 0; i < carrier.length; i++){
    expect(board.getBoard[x][y + i]).toEqual({shipName: carrier.name, shipLength:carrier.length, hitted: 0})
  }
})