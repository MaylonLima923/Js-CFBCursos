var px = 0;
var py = 0;

function inicio() {
    document.getElementById("dv1").style.backgroundColor = "rgb(255,0,0)";
    window.alert('Evento keydown Adicionado')
    document.addEventListener("keydown", move);
}

function move() {
    var obj = document.getElementById("dv1");
    var tecla = event.keyCode;
    //37 = Esquerda | 38 = Cima | 39 = Direita | 40 = Baixo | 13 = Enter
    if (tecla == 37) {
        px -= 10;
        obj.style.left = px + "px";
    } else if (tecla == 38) {
        py -= 10;
        obj.style.top = py + "px";
    } else if (tecla == 39) {
        px += 10;
        obj.style.left = px + "px";
    } else if (tecla == 40) {
        py += 10;
        obj.style.top = py + "px";
    } else if (tecla == 13) {
        window.alert("Evento keydown removido!");
        this.removeEventListener("keydown", move);
    }
}

function addEventos() {
    document.getElementById("dv1").addEventListener("click", inicio);
}

window.addEventListener("load", addEventos);