// Quiz timer starting from 60 seconds

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timerEl.textContent = timeLeft;

            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            alert("Time's up!")
        } 
    }, 1000);
}