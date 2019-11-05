let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    let target = Math.floor(Math.random()*10);
    return target;
}

function compareGuesses(human, computer, target) {
    if (((human >= computer) && (human <= target)) || ((human <= computer) && (human >= target))) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    winner === 'human' ? humanScore ++ : computerScore ++;
}

function advanceRound() {
    currentRoundNumber ++;
}