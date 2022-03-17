const readlineSync = require('readline-sync');

let player1Name = readlineSync.question('PLAYER 1: May I have your name? ');
console.log(`Hi, ${player1Name}!`);
let player2Name = readlineSync.question('PLAYER 2: May I have your name? ');
console.log(`Hi, ${player2Name}!`);
let player1Input = readlineSync.question(
  `${player1Name}, please choose one of the following: rock, paper, scissors `
);
let player2Input = readlineSync.question(
  `${player2Name}, please choose one of the following: rock, paper, scissors: `
);
console.log(`${player1Name} selected: ${player1Input}`);
console.log(`${player2Name} selected: ${player2Input}`);

let winner = compare(player1Input, player2Input);

function compare(a, b) {
  if (a === 'rock') {
    if (b === 'rock') {
      return 'draw';
    } else if (b === 'paper') {
      return 'player2';
    } else if (b === 'scissors') {
      return 'player1';
    }
  } else if (a === 'paper') {
    if (b === 'rock') {
      return 'player1';
    } else if (b === 'paper') {
      return 'draw';
    } else if (b === 'scissors') {
      return 'player2';
    }
  } else if (a === 'scissors') {
    if (b === 'rock') {
      return 'player2';
    } else if (b === 'paper') {
      return 'player1';
    } else if (b === 'scissors') {
      return 'draw';
    }
  }
}

if (winner === 'player1') {
  console.log(`${player1Name} is the winner! 🏆`);
} else if (winner === 'player2') {
  console.log(`${player2Name} is the winner! 🏆`);
} else {
  console.log(`It's a draw! Play again!`);
}
