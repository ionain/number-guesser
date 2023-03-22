let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (a, b) => {
    return Math.abs(a - b);
}


const compareGuesses = (user, computer, target) => {
    let userCloseness = getAbsoluteDistance(target, user);
    console.log(`usercloseness: ${userCloseness}`);
    let computerCloseness = getAbsoluteDistance(target, computer);
    console.log(`compcloseness: ${computerCloseness}`);

    if (userCloseness <= computerCloseness) {
        return true;
    } else {
        return false;
    };
     
};

const updateScore = (winner) => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    };
};

const advanceRound = () => {
    currentRoundNumber += 1;
};