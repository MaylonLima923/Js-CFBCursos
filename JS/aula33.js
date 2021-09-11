function msg() {
    window.alert('CFB Cursos');
}

function cor1() {
    document.getElementById("dv1").style.backgroundColor = "rgb(255,255,255)";
}

function cor2() {
    document.getElementById("dv1").style.backgroundColor = "rgb(0, 0, 0)";
}

// Inicialização de eventos
function addEventos() {
    document.getElementById("dv1").addEventListener("click", msg);
    document.getElementById("dv1").addEventListener("mouseover", cor2);
    document.getElementById("dv1").addEventListener("mouseout", cor1);
}
window.addEventListener("load", addEventos);