import '../../styles/winnerStyle.scss';
const winner = {
  display(){
    const winnerHtml = document.createElement('div');
    winnerHtml.classList.add('winner-display', 'modal');
    winnerHtml.setAttribute('data-visible', false);
    winnerHtml.innerHTML = `
      <div class="winner-message">
        <h1 class="winner-title title">${2} won the battle!</h1>
        <button class="play-again-btn btn">Play again!</button>
      </div>
    `
    return winnerHtml;
  }
}

export default winner;