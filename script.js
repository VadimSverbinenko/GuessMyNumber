'use strict';

let selectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let hightscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //////////////////////////
  } else if (guess === selectNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = selectNumber;
    document.querySelector('.imes').src =
      'https://media2.giphy.com/media/26FPNS5L0v9wEF6ko/source.gif';

    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }

    //////////////////////////////
  } else {
    check(guess);
  }
});

const winning = function () {
  document.querySelector('.message').textContent = 'You loose!!!';
  document.querySelector('.message').style.color = 'red';
  document.querySelector('.imes').src =
    'https://static.wixstatic.com/media/c76534_7a563f4a0f654cbc81ee7e6a05828c04~mv2.gif';
  document.querySelector('body').style.backgroundColor = '#09e7da';
};
const changeNumber = function (value) {
  document.querySelector('.message').textContent = value;
  score--;
  document.querySelector('.score').textContent = score;
};

const check = function (guess) {
  if (guess > selectNumber) {
    if (score > 1) {
      changeNumber('Number is to hight!');
    } else {
      winning();
    }
  } else if (guess < selectNumber) {
    if (score > 1) {
      changeNumber('Number is to low!');
    } else {
      winning();
    }
  }
};

document.querySelector('.again').addEventListener('click', function () {
  selectNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.imes').src =
    'https://laughingsquid.com/wp-content/uploads/Star-Wars.gif';
  document.querySelector('.message').style.color = ' #eee';
});
