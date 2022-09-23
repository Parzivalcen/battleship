const gameScreen = {
  display(){
    const container = document.createElement('section');
    container.classList.add('container', 'game-screen-container')
    const board = this.renderBoard();
    console.log(board);
    container.innerHTML = `
      <h1>BattleShip</h1>
      <div class="player-1-board">
        ${board}
        <h2>player 1</h2>
      </div>

      <div class="player-2-board">
        <h2>enemy waters</h2>
      </div>
  `
    return container;
  },

  renderBoard(){
    // const board = new gameBoard;
    const boardContainer = document.createElement('div');
    //rows
    for(let i = 0; i < 10; i++){
      const row = document.createElement('div');
      boardContainer.appendChild(row);
      for(let j = 0; j <10; j++){
        row.appendChild(document.createElement('div'));
      }
    }
    return boardContainer.innerHTML;
  }
}

export default gameScreen;