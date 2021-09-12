var jog;
var vel;
var dx;
var dy;
var px;
var py;
var anima;

function inicia() {
    vel = 5;
    dx = 1;
    dy = 0;
    px = 0;
    py = 0;
    jog = document.getElementById("jogador");
    jog.addEventListener('click', function() {
        cancelAnimationFrame(anima);
    });
    game();
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