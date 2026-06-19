// creating the main team object
const team = {
  // starting with 3 football players
  _players: [
    { firstName: 'lionel', lastName: 'messi', age: 36 },
    { firstName: 'cristiano', lastName: 'ronaldo', age: 39 },
    { firstName: 'kylian', lastName: 'mbappe', age: 25 }
  ],
  
  // starting with 3 football games (using soccer scores)
  _games: [
    { opponent: 'real madrid', teamPoints: 2, opponentPoints: 1 },
    { opponent: 'bayern munich', teamPoints: 3, opponentPoints: 0 },
    { opponent: 'liverpool', teamPoints: 1, opponentPoints: 1 }
  ],

  // getter for players
  get players() {
    return this._players;
  },

  // getter for games
  get games() {
    return this._games;
  },

  // method to add a new player
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },

  // method to add a new game
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

// testing the add player method
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

// testing the add game method with a football score
team.addGame('Arsenal', 2, 0);
console.log(team.games);