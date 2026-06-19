// getting a random number from 0 to 999
let raceNumber = Math.floor(Math.random() * 1000);

// did they register early
let registeredEarly = true;

// runner's age
let age = 19;

// if they are an adult AND registered early, add 1000 to their race number
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// checking age and registration time to tell them when to run
if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  // adult but registered late
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  // kids run at 12:30 no matter when they registered
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  // this is for anyone exactly 18 years old
  console.log("Please go see the registration desk.");
}