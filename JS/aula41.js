var obj = document.getElementById("quad");
var ang = 0;
var anima;

function contador(min, max) {
    document.write(min + "<br>");
    if (min < max) {
        contador(++min, max);
    }
}

function fatorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

// contador(0, 10);
// document.write(fatorial(7));

function gira() {
    obj.style.transform = "rotate(" + ang + "deg)";
    ang += 0.4;
    if (ang > 360) {
        ang = 0;
    }
    anima = requestAnimationFrame(gira);
}
gira();