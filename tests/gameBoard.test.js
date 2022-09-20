const gameBoard = require('../modules/gameBoard');
const Ship = require('../modules/battleShip');

const board = new gameBoard();
const carrier = new Ship(5);
describe("Game Board Object", ()=>{

  test ('Game Board rows', ()=>{
    expect(board.getBoard.length).toBe(10);
})

test ('Game Board columns', ()=>{
  expect(board.getBoard[0].length).toBe(10);
})

test ('Initial Ship obj', ()=>{
  const obj = {emptySquare: true, hitted: 0}
  expect(board.getBoard[0][0]).toEqual(obj);
})

test ('Place ship', ()=>{
  let x = 1;
  let y = 2;
  board.placeShip(carrier, x, y);
  
  
  for(let i = 0; i < carrier.length; i++){
    expect(board.getBoard[x][y + i]).toEqual({shipName: carrier.name, 
      shipSquareID: i, hitted: 0, sunk: false});
    }   
    // console.log(board.getBoard); 
  })
  
  test ('Hit Ship', ()=>{
    let x = 1;
    let y = 2;
    board.receiveAttack(x, y);
    expect(board.getBoard[x][y].hitted).toBe(1);
    
    carrier.hitSquare(board.getBoard[x][y].shipSquareID);
    expect(carrier.hitBox[0]).toBe('hit');
  })
  
  test ('Sink ship', ()=>{
    let x = 2;
    let y = 2;
    const patrolBoat = new Ship(1);
    board.placeShip(patrolBoat, x, y);

    square = board.getBoard[x][y].shipSquareID;
    board.receiveAttack(x, y);
    patrolBoat.hitSquare(square);
    
    
    patrolBoat.isSunk();
    expect(patrolBoat.sunk).toBe(true);
  })
  
  test ('Failed Shot', ()=>{
    let x = 2;
    let y = 7;
    const patrolBoat = new Ship(1);
    board.placeShip(patrolBoat, x, y);
    
    square = board.getBoard[x][6].shipSquareID;
    board.receiveAttack(x, 6);
    expect(board.getBoard[x][6].hitted).toBe(1);
    
    patrolBoat.isSunk();
    expect(patrolBoat.sunk).toBe(false);
  })
  
  test ('Check if all ship inside are sunk', ()=>{
    let x = 2;
    let y = 2;
    const board = new gameBoard();
    const patrolBoat = new Ship(1);
    const patroluka = new Ship(1);
    board.placeShip(patrolBoat, x, y);
    board.placeShip(patroluka, x+4, y);
    const shipsArray = [patrolBoat, patroluka]
    board.receiveAttack(x, y);
    board.receiveAttack(x+4, y);
    square = board.getBoard[x][y].shipSquareID;
    square = board.getBoard[x+4][y].shipSquareID;
    
    patrolBoat.hitSquare(square);
    patroluka.hitSquare(square);
    
    console.log(patrolBoat.sunk);
    expect(board.allSunk(shipsArray)).toBe(true);
  })
})