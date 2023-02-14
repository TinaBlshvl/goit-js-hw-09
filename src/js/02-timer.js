import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.getElementById("datetime-picker");

const days = document.querySelector(span[data-days]);
const hours = document.querySelector(span[data-hours]);
const minutes = document.querySelector(span[data-minutes]);
const seconds = document.querySelector(span[data - seconds]);
const button = document.querySelector(span[data - start]);

button.addEventListener("click", startWorkingTime)

let intervalId = null;
let selectedDate = null;
let ms = null;

function startWorkingTime() {
  intervalId = setInterval(convertMs, 1000);
  button.disabled = true;
}

function addZero(number) {
    return String(number).padStart(2, 0)
}

flatpickr(input, options)

const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            console.log(selectedDates[0]);
        },
  dateFormat: "Y-m-d H:i",
        
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    ms = selectedDate - options.defaultDate;

    if (ms < 0) {
      window.alert("Please choose a date in the future")
    } else {
      button.disabled = false;
    }
    return;
  }

};

function convertMs(ms) {
  ms = selectedDate - Date.now();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addZero(Math.floor(ms / day));
  const hours = addZero(Math.floor((ms % day) / hour));
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



