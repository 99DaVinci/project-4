// using dummy story
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9 Mile Trail," but it is literally 10 miles long. The scenery is absolutely breathtaking and the weather was nice. I had a freakin great time and I will definitely go again.';

// splitting the text into an array of individual words
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freakin';

// logging the original array just to check it
// console.log(storyWords);

// counting how many words are in the story
let count = 0;
storyWords.forEach(word => {
  count++;
});
console.log('word count: ' + count);

// getting rid of the word literally
storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
});

// fixing the spelling mistake
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

// finding the index of the bad word 
let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});

// changing the bad word to really
storyWords[badWordIndex] = 'really';

// checking if all the words are 10 characters or less
let lengthCheck = storyWords.every(word => {
  return word.length <= 10;
});
console.log('are all words 10 chars or less? ' + lengthCheck);

// finding which word is too long
storyWords.forEach(word => {
  if (word.length > 10) {
    console.log('long word: ' + word);
  }
});

// replacing the long word manually
let longWordIndex = storyWords.findIndex(word => word === 'breathtaking');
if (longWordIndex !== -1) {
    storyWords[longWordIndex] = 'stunning';
}

// putting the array back together into one string
console.log(storyWords.join(' '));