function trocaCarro(c) {
    var obj = document.getElementById("carro");
    if (c == 1) {
        obj.setAttribute("class", "c1");
    }
    if (c == 2) {
        obj.setAttribute("class", "c2");
    }
    if (c == 3) {
        obj.setAttribute("class", "c3");
    }
}

function removerCarro() {
    var obj = document.getElementById("carro");
    obj.removeAttribute("class");
}

function verifica() {
    var obj = document.getElementById("carro");
    if (obj.hasAttribute("class")) {
        window.alert("A tag tem uma classe nela");
    } else {
        window.alert("A tag não tem uma classe nela!");
    }
}