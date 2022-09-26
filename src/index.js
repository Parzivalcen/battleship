import gameScreen from "./modules/DOM/gameScreen";
import './modules/DOM/styles/mainStyles.scss'
const body = document.body
const title = document.createElement('h1');
body.appendChild(gameScreen.display());
