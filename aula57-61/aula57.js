// elementos
var vBtIniciar;
var vBola;
var vCpu;
var vJogador;
var vPaineltxtPontos;
// Controle de animação
var game, vFrames;
// Posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;
// Direção de acordo com a tecla
var dirJy;
// Posições iniciais
var posJogIniY = 180;
var posJogIniX = 10;
var posCpuIniY = 180;
var posCpuIniX = 930;
var posBolaIniX = 470;
var posBolaIniY = 240;
// Tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140;
var bolaW = 20, bolaH = 20;
// Direção
var bolaX, bolaY;
var cpuY = 0;
// Velocidade
var velBola, velJogador, velCpu;
// Controle
var pontos = 0;
var tecla;
var jogo = false;

function controlaJog() {
    if (jogo) {
        posJogadorY += velJogador * dirJy;
        if ((posJogadorY + barraH >= campoH) || (posJogadorY <= 0)) {
            posJogadorY += (velJogador * dirJy) * -1;
        }
        vJogador.style.top = posJogadorY + "px";
    }
}

function controlaCpu() {
    if (jogo) {
        if ((posBolaX > (campoW / 2)) && (bolaX > 0)) {
            // Movimentar CPU
            if ((posBolaY > ((posCpuY + (barraH / 2))) + velCpu)) {
                // Mover para baixo
                if ((posCpuY + barraH) <= campoH) {
                    posCpuY += velCpu;
                }
            } else if (posBolaY + (bolaH / 2) < (posCpuY + (barraH / 2)) - velCpu) {
                // Mover para cima
                if (posCpuY >= 0) {
                    posCpuY -= velCpu;
                }
            }
        } else {
            // Posicionar no centro
            if ((posCpuY + (barraH / 2)) < (campoH / 2)) {
                posCpuY += velCpu;
            } else if ((posCpuY + (barraH / 2)) > (campoH / 2)) {
                posCpuY -= velCpu;
            }
        }
        vCpu.style.top = posCpuY + "px";
    }
}

function controlaBola() {
    // Movimentação da Bola
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    // Colisão Jogador
    if ((posBolaX <= posJogadorX + barraW) && 
        ((posBolaY + bolaH >= posJogadorY) && 
        (posBolaY <= posJogadorY + barraH))) {
            bolaY = (((posBolaY + (bolaH / 2)) - (posJogadorY + (barraH / 2))) / 32);
            bolaX *= -1;
    }
    
    // Colisão CPU
    if ((posBolaX >= posCpuX - barraW) && 
    ((posBolaY + bolaH >= posCpuY) && 
    (posBolaY <= posCpuY + barraH))) {
        bolaY =  (((posBolaY + (bolaH / 2)) - (posCpuY + (barraH / 2))) / 32);
        bolaX *= -1;
    }

    // Limites Inferior e Superior
    if ((posBolaY >= 480) || (posBolaY <= 0)) {
        bolaY *= -1;
    }

    // Saiu da tela Direita e Esquerda
    if (posBolaX >= (campoW - bolaW)) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos++;
        vPaineltxtPontos.value = pontos;
        jogo = false;
    }
    
    if (posBolaX <= 0) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos--;
        vPaineltxtPontos.value = pontos;
        jogo = false;
    }

    vBola.style.top = posBolaY + "px";
    vBola.style.left = posBolaX + "px";
}  

function teclaDw() {
    tecla = event.keyCode;
    if (tecla == 38) {
        dirJy = -1
    } else if (tecla == 40) {
        dirJy = 1;
    }
}

function teclaUp() {
    tecla = event.keyCode;
    if (tecla == 38) {
        dirJy = 0
    } else if (tecla == 40) {
        dirJy = 0;
    }
}

function game() {
    if (jogo) {
        controlaJog();
        controlaBola();
        controlaCpu();
    }
    vFrames = requestAnimationFrame(game);
}

function inicia() {
    if (!jogo) {
        velBola = velJogador = velCpu = 8;
        cancelAnimationFrame(vFrames);
        jogo = true;
        dirJy = 0;
        bolaY = 0;
        if (Math.random() * 10 < 5) {
            bolaX = -1;
        } else {
            bolaX = 1;
        }
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posJogadorX = posJogIniX;
        posCpuY = posCpuIniY;
        posCpuX = posCpuIniX;
        game();
    }
}

function inicializa() {
    velBola = velJogador = velCpu = 8;
    vBtIniciar = document.getElementById("btnIniciar");
    vBtIniciar.addEventListener("click", inicia);
    vJogador = document.getElementById("dvJogador");
    vCpu = document.getElementById("dvCpu");
    vBola = document.getElementById("dvBola");
    vPaineltxtPontos = document.getElementById("txtPontos");

    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
}

window.addEventListener("load", inicializa);