var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start')

// Quiz timer starting from 60 seconds

function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timerEl.textContent = timeLeft;

            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            window.confirm("Time's up! Take the quiz again?")

        } 
    }, 1000);
}

startBtn.onclick = timer;

