import 'bootstrap';
import './scss/index.scss';
import shuffle from './shuffle';

let countdown = document.querySelector('.countdown');
let timer;
const playAgain = document.querySelector('.play-again');

const word = 'HELLO';
const arr = word.split('');

const letters = document.querySelectorAll('.letter');

const randomArr = []; //eg.[2,0,4,3,1]

//shuffle letters
shuffle(arr, randomArr, letters);

// countdown
setTimeout(function () {
  const hasTouchscreen = 'ontouchstart' in window;

  if (hasTouchscreen) {
    let timeleft = 4;
    timer = setInterval(function () {
      if (timeleft === 0) {
        location.reload();
      } else {
        countdown.innerHTML = `<span class="countdown">${timeleft}</span> seconds remaining`;
      }
      timeleft -= 1;
    }, 1000);
  } else {
    let timeleft = 5;
    timer = setInterval(function () {
      if (timeleft === 0) {
        location.reload();
      } else {
        countdown.innerHTML = `${timeleft} seconds remaining`;
      }
      timeleft -= 1;
    }, 1000);
  }
}, 4000);


// isCorrectOrder
const message = document.querySelector('.message');
let clickCount = -1;

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener('click', (e) => {
    clickCount++;
    
    if (clickCount === arr.length - 1) {
      message.innerHTML = `<h1>Bravo!</h1>`;
      playAgain.style = `display: block`;
      clearInterval(timer);
    }

    let letter = e.target.value;

    if (letter === arr[clickCount]) {
      e.target.setAttribute("disabled", "true");

    } else {
      location.reload();
    }
  });
}

//playAgain button
playAgain.addEventListener('click', () => {
  location.reload();
});