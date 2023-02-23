const appendSeconds = document.querySelector(`#seconds`);
const appendTens = document.querySelector(`#tens`);
const start = document.querySelector(`#button-start`);
const stop1 = document.querySelector(`#button-stop`);
const reset = document.querySelector(`#button-reset`);
const show = document.querySelector(`.show`);
let interval;
var seconds = 00;
var tens = 00;
// format is seconds:tens
function startTimer() {
  tens++;
  // console.log(tens);
  if (tens < 9) {
    appendTens.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    console.log(seconds);
    appendSeconds.innerHTML = '0' + seconds;
    tens = 0;
    appendTens.innerHTML = '0' + tens;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
start.addEventListener(`click`, () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
stop1.addEventListener(`click`, () => {
  clearInterval(interval);
});
reset.addEventListener(`click`, () => {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});
