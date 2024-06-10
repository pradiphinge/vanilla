import { GAME_MOVE } from "./src/js/constants.mjs";
import { getRandomIntInclusive } from "./src/js/utilities.mjs";

window.makeMove =  function moveClickHandler(e){
    let playerMove = GAME_MOVE.getValueByMove(e.currentTarget.id);
    let computerMove = getRandomIntInclusive(1, 3);
    let winner = playerMove > computerMove ? 'Player' : playerMove < computerMove ? 'Computer' : 'It\'s a Tie';
    document.getElementById("gameResult").innerHTML = "You selected "+ GAME_MOVE.getMoveByValue(playerMove) + "while Computer selected " +GAME_MOVE.getMoveByValue(computerMove)+". Winner is " + winner;
} 