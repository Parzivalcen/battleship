import player from "../player";
import {board1, board2, shipsArray1, shipsArray2} from "./placeShips";
const gameLoop = {
  playerAttack(e, player, AI){
    const coords = e.getAttribute('data-x-y').split(',').map(Number);
    console.log(coords);
    player.attack(coords[0], coords[1], AI, board2)
    e.classList.add('hit');
    if(board2.getBoard[coords[0]][coords[1]].shipName){
      board2.getBoard[coords[0]][coords[1]].shipName.isSunk();
    }
    console.log(board2.allSunk(shipsArray2))
    player.endTurn();
  },
  
  AIattack(player){
    const coords = player.aiAttackS(board1);
    
    const boardX = document.querySelector(`[data-x-y ="${coords[0]}, ${coords[1]}"]`)
    // console.log(board1.getBoard[coords[0]][coords[1]])
    boardX.classList.add('hit');
    // console.log(boardX, coords);
    player.endTurn();
  },
  
  gameLoop(){
    const player1 = new player('one');
    const AI = new player('AI');
    let allSunk2= board2.allSunk(shipsArray2);
    let allSunk1 = board1.allSunk(shipsArray1);
    // I think using target is a better aproach than event listeners on every square
    document.querySelector('.player-2-board').addEventListener('click',(e)=>{
      if(allSunk2 || allSunk1){
        player1.endTurn();
        AI.endTurn();
        return;
      }

      if(player1.turn) {
        this.playerAttack(e.target, player1, AI);
        // update player 1 all ships sunk status
        allSunk2 = board2.allSunk(shipsArray2);
        if(AI.turn){
          this.AIattack(AI);
          // update player 2 all ships sunk status
          allSunk1 = board1.allSunk(shipsArray1);
          player1.turn = true;
        }
      }
    })

  }
};
export default gameLoop;