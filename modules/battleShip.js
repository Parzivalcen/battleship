class Ship {
  constructor(length){
    this.name = this.name(length);
    this.length = length;
    this.hitBox = Array(length);
    this.sunk = false;
    this.x = null;
    this.y = null;
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