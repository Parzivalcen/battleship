import winner from "./modules/DOM/displayWinner";
import gameLoop from "./modules/DOM/gameLoop";
import gameScreen from "./modules/DOM/gameScreen";
import placeShipsScreen from "./modules/DOM/placeShipsScreen";
import './styles/mainStyles.scss'
const body = document.body
const title = document.createElement('h1');
body.appendChild(placeShipsScreen.board())
placeShipsScreen.ships();
// placeShipsScreen.showGameScreen(body);
// body.appendChild(gameScreen.display());
// body.appendChild(winner.display())
// gameScreen.clickOutsideModal();
// gameLoop.gameLoop();