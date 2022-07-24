let clock = document.getElementById("clock");

//Set Time 
setInterval(function() {
    let date = new Date();
    let countDownTime = new Date("00:00:00").getTime();
    let timeleft = countDownTime - date;

    clock.innerHTML = date.toLocaleTimeString('en-GB'); //Method
    

    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    remain.innerHTML = timeleft;
}, 1000);

