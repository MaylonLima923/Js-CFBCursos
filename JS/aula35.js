var tmp;

function mudaCor() {
    var obj = document.getElementById("dv1");
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    obj.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// setTimeout(function, tempo) chama a função 1 vez depois daquele periodo de tempo
//var tmp = setTimeout(mudaCor, 300);

// setTimeout(function, tempo) chama a função a cada periodo de tempo
// var tmp = setInterval(mudaCor, 100);

//window.addEventListener("load", mudaCor);

function iniciar() {
    tmp = setInterval(mudaCor, 150);
}

function parar() {
    clearInterval(tmp);
}

function addEventos() {
    document.getElementById("btn1").addEventListener("click", iniciar);
    document.getElementById("btn2").addEventListener("click", parar);
}

window.addEventListener("load", addEventos);