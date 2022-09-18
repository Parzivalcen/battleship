class Ship {
  constructor(length, x, y){
    this.name = this.name(length);
    this.length = length;
    this.hitBox = Array(length);
    this.sunk = false;
    this.x = x;
    this.y = y;
  }
  hit(index){
    this.hitBox[index] = 'hit';
  }

  name(length){
    if(length === 5)  return 'carrier'
    else if(length === 4) return 'battleship'
    else if(length === 3) return 'destroyer'
    else if(length === 2) return 'submarine'
    else if(length === 1) return 'patrol boat'
  }

  isSunk(){
    for(let i = 0; i < this.length; i++){
      if(this.hitBox[i] !== 'hit'){
        return this.sunk = false;
      }
    }
    return this.sunk = true;
  }
}

Object.freeze(Ship);
module.exports = Ship;