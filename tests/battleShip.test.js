const Ship = require ('../modules/battleShip');

const carrier = new Ship(5);
describe('ship object', ()=>{

  test('carrier', ()=>{
    expect(carrier.length).toBe(5);
  })
  
test('Carrier name', ()=>{
  expect(carrier.name).toBe('carrier');
})

test('carrier hitbox', ()=>{
  expect(carrier.hitBox.length).toBe(5);
})


test('carrier hitted', ()=>{
  carrier.hitSquare(2)
  expect(carrier.hitBox[2]).toBe('hit');
})

test('carrier NOT sunk', ()=>{
  carrier.isSunk();
  expect(carrier.sunk).toBe(false);
})

test('carrier sunk', ()=>{
  let index = 0;
  for(let i = 0; i < carrier.length; i++){
    carrier.hitSquare(i)
  }
  carrier.isSunk();
    expect(carrier.sunk).toBe(true);
})
})