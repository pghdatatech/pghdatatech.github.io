let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;
let guessHistory = [];

const messageEl = document.getElementById('message');
const secretNumberEl = document.getElementById('secret-number');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');
const guessHistoryEl = document.getElementById('guess-history');
const guessInput = document.getElementById('guess');

document.getElementById('check').addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    messageEl.textContent = 'No input or invalid value!';
    return;
  }

  if (guess === secretNumber) {
    document.body.style.backgroundColor = '#4caf50';
    secretNumberEl.textContent = secretNumber;
    secretNumberEl.classList.remove('hidden');
    secretNumberEl.classList.add('correct');
    messageEl.textContent = 'Correct! You guessed it!';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = guess < secretNumber ? 'Too low!' : 'Too high!';
      messageEl.className = guess < secretNumber ? 'too-low' : 'too-high';
      guessHistory.push(guess);
      guessHistoryEl.textContent = `Guess History: ${guessHistory.join(', ')}`;
    } else {
      messageEl.textContent = 'Sorry, game is over. Try to correctly guess next time.';
      scoreEl.textContent = 0;
    }
  }
});

document.getElementById('play').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  score = 10;
  guessHistory = [];
  
  document.body.style.backgroundColor = '#f0f0f0';
  secretNumberEl.textContent = '?';
  secretNumberEl.classList.add('hidden');
  secretNumberEl.classList.remove('correct');
  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  messageEl.className = '';
  guessHistoryEl.textContent = 'Guess History: None';
  guessInput.value = '';
});