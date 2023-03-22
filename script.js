'use strict';

let randNumber = 0;
const generateRandomNumber = () => {
  randNumber = Math.trunc(Math.random() * 6 + 1);
};

let changeImg = randNumber => {
  document.querySelector('.dice').src = `dice-${randNumber}.png`;
};

const btnRollDice = document.querySelector('.btn.btn--roll');

let score = 0;
let player1 = 68;
let player2 = 69;
let currentPlayer = player1;
let toggle = 1;

const buttonToggle = arg => {
  document.querySelector('.btn.btn--roll').disabled = arg;
  document.querySelector('.btn.btn--hold').disabled = arg;
};

btnRollDice.addEventListener('click', () => {
  generateRandomNumber();
  changeImg(randNumber);
  if (currentPlayer === player1) {
    if (randNumber !== 1) {
      score = score + randNumber;
      document.getElementById('current--0').textContent = score;
    } else {
      score = 0;
      document.getElementById('current--0').textContent = score;
      document.getElementById('score--0').textContent = score;
      document.getElementById('name--0').textContent = `💀PLAYER 1 💀`;
      buttonToggle(true);
    }
  } else if (currentPlayer === 69) {
    if (randNumber !== 1) {
      score = score + randNumber;
      document.getElementById('current--1').textContent = score;
    } else {
      score = 0;
      console.log('you rolled 1!!!!!!');
      document.getElementById('current--1').textContent = score;
      document.getElementById('score--1').textContent = score;
      document.getElementById('name--1').textContent = `💀PLAYER 2 💀`;
      buttonToggle(true);
    }
  }
});

const btnHold = document.querySelector('.btn.btn--hold');

btnHold.addEventListener('click', () => {
  toggle++;
  if (toggle % 2 === 0) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    currentPlayer = player2;
    document.getElementById('score--0').textContent =
      Number(document.getElementById('score--0').textContent) + score;
  } else {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    currentPlayer = player1;
    document.getElementById('score--1').textContent =
      Number(document.getElementById('score--1').textContent) + score;
  }
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  score = 0;
});

const btnNewGame = document.querySelector('.btn.btn--new');

const resetGame = () => {
  buttonToggle(false);
  buttonToggle(false);
  score = 0;
  document.getElementById('name--0').textContent = `PLAYER 1`;
  document.getElementById('name--1').textContent = `PLAYER 2`;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
};

btnNewGame.addEventListener('click', resetGame);
