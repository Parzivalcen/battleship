import '../../styles/gameStyle.scss';
import '../../styles/mainStyles.scss'
import '../../styles/placeShip.scss';
import player from '../player';
import winner from './displayWinner';
import gameLoop from './gameLoop';
import gameScreen from './gameScreen';
import { board1, shipsArray1 } from './placeShips';

let axis = 'x';
const placeShipsScreen = {
  board(){
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('container', 'game-screen-container', 'place-ship-container')
    const board = this.renderBoard();
    boardContainer.innerHTML = `
    <h1 class="place-ship-title">BattleShip<h1>
    <h1 class="place-ship-title">Place your carrier<h1>
    <button class="change-axis">Change axis: ${axis}</button>
        <div class="player-board add-ships">
          ${board}
        </div>
    `
    return boardContainer;
  },
  // place ships
  // if carrier is place, place the other ship, and so on.
  // with clicks
  ships(){
    const player1BoardObj = board1;
    const player1Board = player1BoardObj.getBoard;
    let carrierPlaced = false;
    let battleShipPlaced = false;
    let destroyerPlaced = false;
    let submarinePlaced = false;
    let patrolPlaced = false;
    // Change where ship is going to be placed
    this.changeAxis();
    // Add envent listener to board
    const board = document.querySelector('.add-ships');
    board.addEventListener('click', (e)=>{
      console.log('click', axis)
      let currentShip = '';
      //get x and y values
      const square = e.target;
      const coords = e.target.getAttribute('data-x-y').split(',').map(Number);
      console.log(coords);
      let shipLength = 0;
      if(!carrierPlaced){
        player1BoardObj.placeShip(shipsArray1[4], coords[0], coords[1], axis);
        console.log(square);
        console.log(player1Board[coords[0]][coords[1]])
        shipLength = shipsArray1[4].length;
        carrierPlaced = true
        currentShip = 'battleship';
      }else if(!battleShipPlaced){
        
        player1BoardObj.placeShip(shipsArray1[3], coords[0], coords[1], axis);
        shipLength = shipsArray1[3].length;
        battleShipPlaced = true
        currentShip = 'destroyer';
      }else if(!destroyerPlaced){
        player1BoardObj.placeShip(shipsArray1[2], coords[0], coords[1], axis);
        shipLength = shipsArray1[2].length;
        destroyerPlaced = true
        currentShip = 'submarine';
      }else if(!submarinePlaced){
        player1BoardObj.placeShip(shipsArray1[1], coords[0], coords[1], axis);
        shipLength = shipsArray1[1].length;
        submarinePlaced = true
        currentShip = 'patrol';
      }else if(!patrolPlaced){
        player1BoardObj.placeShip(shipsArray1[0], coords[0], coords[1], axis);
        shipLength = shipsArray1[0].length;
        patrolPlaced = true
        currentShip = false;
      }

      for(let i = 0; i < shipLength; i++){
        if(player1Board[coords[0]][coords[1]+i].shipName){
          if(coords[0] !==10 && coords[1] !==10){
            const squares = board.querySelector(`[data-x-y = "${coords[0]}, ${coords[1]+i}"]`)
            squares.classList.add('ship');
          }
        }else if(player1Board[coords[0]+i][coords[1]].shipName){
          const squares = board.querySelector(`[data-x-y = "${coords[0]+i}, ${coords[1]}"]`)
          squares.classList.add('ship');
        }

      }
      // check if all ships have been placed, render game board if all placed
      document.querySelector('.place-ship-title').innerHTML = `place your ${currentShip}` 
      if(!currentShip){
        document.querySelector('.place-ship-title').innerHTML = `<button class='play-btn'>play</button>`;
        console.log(player1Board)
      }
      
      this.showGameScreen(document.body);
    });
    // board.addEventListener('mouseover', (e)=>{
    //   e.target.classList.add('boad-hover-effect');
    // });
    //First click places carrier and turns a boolean of carrier place to true\
    
  },

  changeAxis(){
    const changeAxisBtn = document.querySelector('.change-axis');
    changeAxisBtn.addEventListener('click', ()=>{
      axis === 'x'? axis = 'y' : axis = 'x';
      document.querySelector('.change-axis').innerHTML = `Change axis: ${axis}`
      // console.log(axis);
    })
  },

  renderBoard(){
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
        squareCount ++
        row.appendChild(square);
      }
    }
    return boardContainer.innerHTML;
  },
  showGameScreen(body){
    console.log('im show game')
    const playBtn = document.querySelector('.play-btn');
    
    console.log('im show', playBtn)
    if(playBtn){
      document.querySelector('.place-ship-container').remove()
      body.appendChild(gameScreen.display());
      body.appendChild(winner.display())
      winner.playAgain();
      gameScreen.clickOutsideModal();
      gameLoop.gameLoop();
    }


  }
}
Object.freeze(placeShipsScreen);
export default placeShipsScreen;