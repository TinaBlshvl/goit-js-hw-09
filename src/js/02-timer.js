import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.getElementById("datetime-picker");

const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");
const buttonEl = document.querySelector("button[data-start]");

buttonEl.disabled = true;

let intervalId = null;
let selectedDate = null;
let ms = null;

const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            selectedDate = selectedDates[0];
          ms = selectedDate - options.defaultDate;

          if (ms < 0) {
            Notiflix.Notify.warning("Please choose a date in the future");
          } else {
            buttonEl.disabled = false;
          }
          return;
        },
  dateFormat: "Y-m-d H:i",
};

flatpickr(input, options)

buttonEl.addEventListener("click", startWorkingTime)

function convertMs(ms) {
  ms = selectedDate - Date.now();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  daysEl.textContent = addZero(Math.floor(ms / day));
  hoursEl.textContent = addZero(Math.floor((ms % day) / hour));
  minutesEl.textContent = addZero(Math.floor(((ms % day) % hour) / minute));
  secondsEl.textContent = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  if (ms < 1000) {
    input.disabled = false;
    clearInterval(intervalId);
  }
}

function startWorkingTime() {
  intervalId = setInterval(convertMs, 1000);
  buttonEl.disabled = true;
  input.disabled = true;
}

function addZero(number) {
    return String(number).padStart(2, 0)
}





