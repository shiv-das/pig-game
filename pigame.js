let sum1 = 0;
let sum2 = 0;
let score1 = 0;
let score2 = 0;
/*const dicedisplay = function () {
document.querySelector('.dice').src = */
document.querySelector('.dice').classList.add('hidden');
document.querySelector('.btn--roll').addEventListener('click', function () {
  let dicenum = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').classList.remove('hidden');
  if (dicenum === 1) {
    document.querySelector('.dice').src = 'dice-1.png';
    sum1 = 0;
    sum2 = 0;
    if (
      document.querySelector('.player--0').classList.contains('player--active')
    ) {
      sum1 = 0;
      document.getElementById('current--0').textContent = 0;
      document.querySelector('.player--1').classList.add('player--active');
      document.querySelector('.player--0').classList.remove('player--active');
    } else {
      sum2 = 0;
      document.getElementById('current--1').textContent = 0;
      document.querySelector('.player--0').classList.add('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
    }
  } else {
    if (dicenum === 2) document.querySelector('.dice').src = 'dice-2.png';
    else if (dicenum === 3) document.querySelector('.dice').src = 'dice-3.png';
    else if (dicenum === 4) document.querySelector('.dice').src = 'dice-4.png';
    else if (dicenum === 5) document.querySelector('.dice').src = 'dice-5.png';
    else document.querySelector('.dice').src = 'dice-6.png';
    console.log(dicenum);
    if (
      document.querySelector('.player--0').classList.contains('player--active')
    ) {
      sum1 = sum1 + dicenum;
      console.log(sum1);
      document.getElementById('current--0').textContent = sum1;
    } else {
      sum2 = sum2 + dicenum;
      console.log(sum2);
      document.getElementById('current--1').textContent = sum2;
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (
    document.getElementById('score--0').textContent >= 100 ||
    document.getElementById('score--1').textContent >= 100
  ) {
    if (document.getElementById('score--0').textContent >= 100)
      document.querySelector('.player--0').classList.add('player--winner');
    else document.querySelector('.player--1').classList.add('player--winner');
  }
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    score1 = score1 + sum1;
    sum1 = 0;
    document.getElementById('score--0').textContent = score1;
    document.getElementById('current--0').textContent = 0;
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  } else {
    score2 = score2 + sum2;
    sum2 = 0;
    document.getElementById('score--1').textContent = score2;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.dice').classList.add('hidden');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  sum1 = 0;
  sum2 = 0;
  score1 = 0;
  score2 = 0;
  if (document.querySelector('.player--0').classList.contains('player--winner'))
    document.querySelector('.player--0').classList.remove('player--winner');
  else document.querySelector('.player--1').classList.remove('player--winner');
});
