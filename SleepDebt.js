// getting how many hours i slept each night
const getSleepHours = day => {
  day = day.toLowerCase();
  
  if (day === 'monday') { return 8; } 
  else if (day === 'tuesday') { return 7; } 
  else if (day === 'wednesday') { return 6; } 
  else if (day === 'thursday') { return 7; } 
  else if (day === 'friday') { return 9; } 
  else if (day === 'saturday') { return 10; } 
  else if (day === 'sunday') { return 8; }
};

// getting total sleep by adding up all the days
const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

// my ideal total sleep for the week (8 hours a night)
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

// checking if i need more sleep
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('you got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    let extraSleep = actualSleepHours - idealSleepHours;
    console.log('you got ' + extraSleep + ' hours more sleep than needed.');
  } else if (actualSleepHours < idealSleepHours) {
    let sleepDebt = idealSleepHours - actualSleepHours;
    console.log('you should get some rest. you need ' + sleepDebt + ' more hours of sleep.');
  }
};

// start the program
calculateSleepDebt();


/* --- extra practice (task 12) ---
alternate way to do it with literal numbers and passing an argument:

const getActualSleepHours = () => 8 + 7 + 6 + 7 + 9 + 10 + 8;
const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8); 

  if (actualSleepHours === idealSleepHours) {
    console.log('you got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    let extraSleep = actualSleepHours - idealSleepHours;
    console.log('you got ' + extraSleep + ' hours more sleep than needed.');
  } else if (actualSleepHours < idealSleepHours) {
    let sleepDebt = idealSleepHours - actualSleepHours;
    console.log('you should get some rest. you need ' + sleepDebt + ' more hours of sleep.');
  }
};
*/