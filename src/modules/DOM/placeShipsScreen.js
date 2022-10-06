import '../../styles/gameStyle.scss';
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
        square.setAttribute('data-y', j);
        squareCount ++
        row.appendChild(square);
      }
    }
    return boardContainer.innerHTML;
  },
}
Object.freeze(placeShipsScreen);
export default placeShipsScreen;