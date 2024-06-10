
// console.log(GAME_MOVE.get('ROCK')); // Output: 1
export const GAME_MOVE = (function () {
    const AVAILABLE_MOVES={
        ROCK: 1,
        PAPER: 2,
        SCISSOR:3
    }
    return {
        getValueByMove: function (move) {
            return AVAILABLE_MOVES[move]
        },
        getMoveByValue: function (value) {
            return Object.keys(AVAILABLE_MOVES).find(key=>AVAILABLE_MOVES[key]=== value)
        }
    }
})()