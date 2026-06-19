// get user choice and make it lowercase
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  // check if they typed a real choice
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error: not a real choice');
  }
};

// make the computer pick randomly
const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// find out who is the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'you win with the cheat code!';
  }

  if (userChoice === computerChoice) {
    return 'game is a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer won';
    } else {
      return 'you won';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer won';
    } else {
      return 'you won';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won';
    } else {
      return 'you won';
    }
  }
};

// start the game
const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  
  console.log('you threw: ' + userChoice);
  console.log('computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();