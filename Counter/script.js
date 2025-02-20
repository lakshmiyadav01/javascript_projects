const display = document.querySelector('#count');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let intervalId; // Store interval ID

start.addEventListener('click', function (e) {
    e.target.disabled = true;
    display.innerText = 0;
    let count = 0;

    intervalId = setInterval(function () { // Store interval ID
        count++;
        display.innerText = count;
    }, 1000);
});

stop.addEventListener('click', function (e) {
    clearInterval(intervalId); // Stop the interval
    display.innerText = 0;
    start.disabled = false;
});
