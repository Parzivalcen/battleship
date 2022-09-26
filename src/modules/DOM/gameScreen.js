import './styles/gameStyle.scss';
import gameBoard from '../gameBoard';
import Ship from '../battleShip';
import player from '../player';
const gameScreen = {
  display(){
    const container = document.createElement('section');
    container.classList.add('container', 'game-screen-container')
    const board = this.renderBoard1();
    const board2 = this.renderBoard2();

    container.innerHTML =`
      <h1>BattleShip</h1>
      <div>
        <div class="player-1-board player-board">
          ${board}
        </div>
        <h2>player 1</h2>
      </div>
      
      <div>
        <div class="player-2-board player-board">
          ${board2}
        </div>
        <h2>enemy waters</h2>
      </div>
  `
    return container;
  },

  renderBoard1(){
    const gameBoard = this.placeShipsP1().getBoard;
    // const board = new gameBoard;
    const boardContainer = document.createElement('div');
    //rows
    for(let i = 0; i < 10; i++){
      const row = document.createElement('div');
      row.classList.add('row', `r${i}`);
      boardContainer.appendChild(row);
      for(let j = 0; j <10; j++){
        const square = document.createElement('div');
        square.classList.add('square', `s${j}`);
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
      row.classList.add('row');
      boardContainer.appendChild(row);
      for(let j = 0; j <10; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
      }
    }
    return boardContainer.innerHTML;
  },

  placeShipsP1(){
    const board = new gameBoard();
    const patrol = new Ship(1);
    const submarine = new Ship(2);
    const destroyer = new Ship(3);
    const battleShip = new Ship(4);
    const carrier = new Ship(5);
    board.placeShip(patrol, 1, 1);
    board.placeShip(submarine, 2, 1);
    board.placeShip(destroyer, 3, 1);
    board.placeShip(battleShip, 4, 1);
    board.placeShip(carrier, 5, 1);
    return board;
  },

  AIattack(){
    const AIplayer = new player();
    if(AIplayer.turn){
      AIplayer.aiAttackS(this.placeShipsP1());
      AIplayer.endTurn;
    }

  }
}

export default gameScreen;