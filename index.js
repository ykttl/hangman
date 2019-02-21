var quiz = document.getElementById('quiz');
var type = document.getElementById('type');
var hintBtn = document.getElementById('hintBtn');
var guess = document.getElementById('guess');
var congrats = document.getElementById('congrats');

var word = '';
var hint = '';
var guessedWord = [];

var initWord = () => {
  var randomNum = Math.floor(Math.random() * data.length);
  word = data[randomNum].word.split('');
  hint = data[randomNum].hint;
  quiz.innerHTML = hint;
};

var initGuessedWord = () => {
  for (index in word) {
    guessedWord.push('_');
  }
  guess.innerHTML = guessedWord.join(' ');
};

var init = () => {
  initWord();
  initGuessedWord();
};

document.addEventListener('keypress', e => {
  var keyName = e.key;
  for (i = 0; i < word.length; i++) {
    if (word[i] === keyName) {
      guessedWord[i] = keyName;
      guess.innerHTML = guessedWord.join(' ');
    }
    if (guessedWord.toString() === word.toString()) {
      congrats.innerHTML = 'Correct!';
    }
  }
});

hintBtn.addEventListener('click', () => {
  guessedWord[0] = word[0];
  guessedWord[guessedWord.length - 1] = word[word.length - 1];
  guess.innerHTML = guessedWord.join(' ');
});

init();
