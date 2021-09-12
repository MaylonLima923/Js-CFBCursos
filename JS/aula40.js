var jog;
var vel;
var dx;
var dy;
var px;
var py;
var anima;
var estado;

function inicia() {
    vel = 5;
    dx = 1;
    dy = 0;
    px = 0;
    py = 0;
    estado = 1;
    jog = document.getElementById("jogador");
    jog.addEventListener('click', moverParar);
}

function moverParar() {
    jog = document.getElementById("dv1");
    if (estado == 1) {
        estado = 0;
        jog.style.backgroundColor = "rgb(255, 0, 0)";
        cancelAnimationFrame(anima);
    } else {
        estado = 1;
        jog.style.backgroundColor = "rgb(0, 0, 255)";
        anima = requestAnimationFrame(game);
    }
}

function mover() {
    if (!estado) {
        estado = 1;
        jog.style.backgroundColor = "rgb(255, 0, 0)";
        anima = requestAnimationFrame(game);
    }
}

function parar() {
    if (estado) {
        estado = 0;
        jog.style.backgroundColor = "rgb(255, 0, 0)";
        cancelAnimationFrame(anima);
    } else {
        estado = 1;
        jog.style.backgroundColor = "rgb(0, 0, 255)";
        anima = requestAnimationFrame(game);
    }
}

function game() {
    px += (dx * vel);
    // py += (dy * vel);
    jog.style.left = px + "px";
    // jog.style.top = py + "px";
    if (px > 800) {
        dx = -1;
    }
    if (px < 0) {
        dx = 1;
    }

    anima = requestAnimationFrame(game);
}

window.addEventListener('load', inicia);