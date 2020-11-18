window.onload = function() {
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }

    function startTimer() {
        tens++;
        if (tens < 9)
            appendTens.innerHTML = "0" + tens;
        if (tens > 9)
            appendTens.innerHTML = tens;
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9)
            appendSeconds.innerHTML = seconds;
        if (seconds > 59) {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minutes > 9)
            appendMinutes.innerHTML = minutes;
    }
}
