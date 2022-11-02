import '../../styles/winnerStyle.scss';
const winner = {
  display(){
    const winnerHtml = document.createElement('div');
    winnerHtml.classList.add('winner-display', 'modal');
    winnerHtml.setAttribute('data-visible', false);
    winnerHtml.innerHTML = `
      <div class="winner-message">
        <h2 class="winner-title title">${2} won the battle!</h2>
        <button class="play-again-btn btn">Play again!</button>
      </div>
    `
    return winnerHtml;
  },
  playAgain(){
    const playAgainBtn = document.querySelector('.play-again-btn');
    console.log(playAgainBtn);
    playAgainBtn.addEventListener('click', _ => location.reload());
  }
}

export default winner;