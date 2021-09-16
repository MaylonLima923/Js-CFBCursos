var imgs = []
var slider;
var imgAtual;
var maxImg;
var temp;

function preCarregamento() {
    var s = 1
    for (var i = 0; i < 2; i++) {
        imgs[i] = new Image();
        imgs[i].src = "../imgs/aula43/s" + s + ".jpeg";
        s++;
    }
}

function carregarImg(img) {
    slider.style.backgroundImage = "url(" + imgs[img].src + ")";
}

function inicia() {
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length;
    slider = document.getElementById("dvslider");
    carregarImg(imgAtual);
    temp = setInterval(trocaImg, 3000);
}

function trocaImg() {
    imgAtual++;
    if (imgAtual > maxImg) {
        imgAtual = 0;
    }
    carregarImg(imgAtual);
}

window.addEventListener("load", inicia);