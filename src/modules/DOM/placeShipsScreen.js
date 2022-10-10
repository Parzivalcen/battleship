import '../../styles/gameStyle.scss';
import player from '../player';
import { board1, shipsArray1 } from './placeShips';
const placeShipsScreen = {
  board(){
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('container', 'game-screen-container')
    const board = this.renderBoard();
    boardContainer.innerHTML = `
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
    const carrierPlaced = false;
    // Add envent listener to board
    const board = document.querySelector('.add-ships');
    board.addEventListener('click', (e)=>{
      //get x and y values
      const square = e.target;
      const coords = e.target.getAttribute('data-x-y').split(',').map(Number);
      player1BoardObj.placeShip(shipsArray1[4], coords[0], coords[1]);
      console.log(square);
      console.log(player1Board[coords[0]][coords[1]])

      for(let i = 0; i < shipsArray1[4].length; i++){
        if(player1Board[coords[0]][coords[1]+i].shipName){
          const squares = board.querySelector(`[data-x-y = "${coords[0]}, ${coords[1]+i}"]`)
          squares.classList.add('ship');
        }

      }
    });
    //First click places carrier and turns a boolean of carrier place to true
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
}
Object.freeze(placeShipsScreen);
export default placeShipsScreen;