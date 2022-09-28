import player from "../player";
import {board1, board2} from "./placeShips";
const gameLoop = {
  playerAttack(e, player, AI){
    const coords = e.getAttribute('data-x-y').split(',').map(Number);
    console.log(coords);
    player.attack(coords[0], coords[1], AI, board2)
    e.classList.add('hit');
    player.endTurn();
  },
  
  AIattack(player){
    const coords = player.aiAttackS(board1);
    
    const boardX = document.querySelector(`[data-x-y ="${coords[0]}, ${coords[1]}"]`)
    boardX.classList.add('hit');
    // console.log(boardX, coords);
    player.endTurn();
  },
  
  gameLoop(){
    const player1 = new player('one');
    const AI = new player('AI');
    // I think using target is a better aproach than event listeners on every square
    document.querySelector('.player-2-board').addEventListener('click',(e)=>{
      if(player1.turn) {
        this.playerAttack(e.target, player1, AI);
        
        this.AIattack(AI);
        player1.turn = true;
      }
    })
  }
};
export default gameLoop;