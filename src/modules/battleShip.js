class Ship {
  constructor(length){
    this.name = this.name(length);
    this.length = length;
    this.hitBox = Array(length);
    this.sunk = false;
    this.hit = 0;
  }

  hitSquare(index){
    this.hitBox[index] = 'hit';
  }

  name(length){
    if(length === 5)  return 'carrier'
    else if(length === 4) return 'battleship'
    else if(length === 3) return 'destroyer'
    else if(length === 2) return 'submarine'
    else if(length === 1) return 'patrol boat'
    else if(length < 1) return null;
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

module.exports = Ship;