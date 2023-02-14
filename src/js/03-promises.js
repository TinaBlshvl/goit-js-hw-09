import Notiflix, { Notify } from 'notiflix';

const formEl = document.querySelector(".form");

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const firstDelay = Number(document.getElementsByName("delay")[0].value);
    const step = Number(document.getElementsByName("step")[0].value);
    const amount = document.getElementsByName("amount")[0].value;

    for (let i = 0; i < amount; i += 1) {
        let position =  i + 1;
        let delay = firstDelay + step * i;

        createPromise(position, delay)
        .then(({ position, delay }) => {
            Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
            Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
    }

}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                // Fulfill
                resolve({ position, delay });
            } else {
                // Reject
                reject({ position, delay })
            }
        }, delay);
    });
}