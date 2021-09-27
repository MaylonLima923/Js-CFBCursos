var w, h, px, py;

function info() {
    w = window.innerWidth;
    h = window.innerHeight;
    px = window.screenX;
    py = window.screenY;
    
    painel.innerHTML = "Largura: " + w + " - Altura: " + h + "<br> X: " + px + " - Y: " + py;
}

function inicia() {
    document.getElementById("btnTam").addEventListener("click", info);
    var painel = document.getElementById("painel");
}

window.addEventListener("load", inicia);