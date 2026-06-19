// the phrase i want to translate into whale talk
let input = 'turpentine and turtles';

// whales only use these vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// where we will save the matching letters
let resultArray = [];

// loop through every single letter in the input phrase
for (let i = 0; i < input.length; i++) {
  // console.log('outer loop is at ' + i); 
  
  // whales double their e's and u's, so we check for those first
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  
  // inner loop to check the current letter against our vowels array
  for (let j = 0; j < vowels.length; j++) {
    // console.log('inner loop is at ' + j);
    
    // if the letter matches a vowel, push it into the results array
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// printing the raw array just to check it
// console.log(resultArray);

// squish the array together into one string and make it uppercase
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);