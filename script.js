'use strict';

let randNumber = 0;
const generateRandomNumber = () => {
  randNumber = Math.trunc(Math.random() * 6 + 1);
};

let changeImg = randNumber => {
  document.querySelector('.dice').src = `dice-${randNumber}.png`;
};

const btnRollDice = document.querySelector('.btn.btn--roll');

let player1 = 0;
let player2 = 0;
let toggle = 1;

const buttonToggle = arg => {
  document.querySelector('.btn.btn--roll').disabled = arg;
  document.querySelector('.btn.btn--hold').disabled = arg;
};

btnRollDice.addEventListener('click', () => {
  generateRandomNumber();
  changeImg(randNumber);
  if (toggle % 2 == 1) {
    if (randNumber !== 1) {
      player1 = player1 + randNumber;
      document.getElementById('current--0').textContent = player1;
    } else {
      player1 = 0;
      document.getElementById('current--0').textContent = player1;
      document.getElementById('score--0').textContent = player1;
      document.getElementById('name--0').textContent = `💀PLAYER 1 💀`;
      buttonToggle(true);
      toggle = 0;
    }
  } else if (toggle % 2 == 0) {
    if (randNumber !== 1) {
      player2 = player2 + randNumber;
      document.getElementById('current--1').textContent = player2;
    } else {
      player2 = 0;
      document.getElementById('current--1').textContent = player2;
      document.getElementById('score--1').textContent = player2;
      document.getElementById('name--1').textContent = `💀PLAYER 2 💀`;
      buttonToggle(true);
      toggle = 0;
    }
  }
});

const btnHold = document.querySelector('.btn.btn--hold');

btnHold.addEventListener('click', () => {
  toggle++;
  console.log(toggle);
  if (toggle % 2 == 0) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    document.getElementById('score--0').textContent =
      Number(document.getElementById('score--0').textContent) + player1;
  } else {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.getElementById('score--1').textContent =
      Number(document.getElementById('score--1').textContent) + player2;
  }
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player1 = 0;
  player2 = 0;
});

const btnNewGame = document.querySelector('.btn.btn--new');

const resetGame = () => {
  buttonToggle(false);
  buttonToggle(false);
  player1 = 0;
  player2 = 0;
  document.getElementById('name--0').textContent = `PLAYER 1`;
  document.getElementById('name--1').textContent = `PLAYER 2`;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
};

btnNewGame.addEventListener('click', resetGame);
