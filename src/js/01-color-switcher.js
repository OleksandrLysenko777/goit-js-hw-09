function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = 1000;
let interval = null;

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
refs.btnStart.addEventListener('click', onBtnStartChange);
refs.btnStop.addEventListener('click', onBtnStopChange);
refs.btnStop.disable = true;
function onBtnStartChange() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  interval = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, changeColor);
}
function onBtnStopChange() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(interval);
}
