function relogio() {
    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

    if (hor < 10) {
        hor = '0' + hor;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    var horas = hor + ':' + min + ':' + sec;

    document.getElementById("rel").value = horas;
}

var tempo = setInterval(relogio, 1000);