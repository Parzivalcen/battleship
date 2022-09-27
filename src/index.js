import gameLoop from "./modules/DOM/gameLoop";
import gameScreen from "./modules/DOM/gameScreen";
import './styles/mainStyles.scss'
const body = document.body
const title = document.createElement('h1');
body.appendChild(gameScreen.display());

gameLoop.gameLoop();