import '../../styles/gameStyle.scss';
import gameBoard from '../gameBoard';
import Ship from '../battleShip';
import {board1, board2} from './placeShips';
import player from '../player';
const gameScreen = {
  display(){
    const container = document.createElement('section');
    container.classList.add('container', 'game-screen-container')
    const board = this.renderBoard1();
    const board2 = this.renderBoard2();

    container.innerHTML =`
      <h1>BattleShip</h1>
      
        <div class="boards-container">

          <div class="player-1-board player-board">
            ${board}
            <h2>player 1</h2>
          </div>
          
          
            <div class="player-2-board player-board">
              ${board2}
              <h2>enemy waters</h2>
            </div>
          </div>
        
      
  `
    return container;
  },

  renderBoard1(){
    const gameBoard = board1.getBoard;
    // const board = new gameBoard;
    const boardContainer = document.createElement('div');
    //rows
    let squareCount = 0;
    for(let i = 0; i < 10; i++){
      const row = document.createElement('div');
      row.classList.add('row', `r${i}`);
      boardContainer.appendChild(row);
      for(let j = 0; j <10; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('data-x-y', `${i}, ${j}`);
        square.setAttribute('data-y', j);
        squareCount ++
        if(gameBoard[i][j].shipName){
          square.classList.add('ship');
        }
        row.appendChild(square);
      }
    }
    return boardContainer.innerHTML;
  },

  renderBoard2(){
    // const board = new gameBoard;
    const boardContainer = document.createElement('div');
    //rows
    for(let i = 0; i < 10; i++){
      const row = document.createElement('div');
      row.classList.add('row', `r${i}`);
      boardContainer.appendChild(row);
      for(let j = 0; j <10; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('data-x-y', `${i}, ${j}`);
        square.setAttribute('data-y', j);
        row.appendChild(square);
      }
    }
    return boardContainer.innerHTML;
  },

  clickOutsideModal(){
    let modals = document.querySelectorAll('.modal');
    modals.forEach((modal)=>{
      modal.addEventListener('click', (e)=>{
        if(e.target.classList.contains('modal')){
          modal.setAttribute('data-visible', false);
        }
      });
    });
  }
}

export default gameScreen;