var palavra = window.prompt("Digite a palavra: ");
palavra.toString();
var erros = 0;
var acertos = 0;
var tentativas = 0;
var strAcertos;
var strErros;
var letraUsada;

function procura(letra) {
    if (palavra.toLowerCase().match(letra) == letra) {
        strAcertos += ", " + letra;
        acertos++;
        tentativas++;

        document.write("Você acertou a letra: " + letra + "<br>");
    } else {
        strErros += ", " + letra;
        erros++;
        tentativas++;

        document.write("Você errou a letra: " + letra + "<br>");
    }

    if (erros == 5) {
        document.write("<br> Fim de jogo! Você perdeu!");
        document.write(" A palavra era: " + palavra);
        document.write("<br> Você perdeu em " + tentativas + " tentativas");
    } else {
        if (acertos == palavra.length) {
            document.write("<br> Fim de jogo! Você ganhou!");
            document.write(" A palavra era: " + palavra);
            document.write("<br> Você ganhou em " + tentativas + " tentativas");
        } else {
            jogoForca();
        }
    }
}

function jogoForca() {
    var letra = window.prompt("Digite a letra: ");
    letra.toString().toLowerCase();

    setTimeout(procura(letra), 1000);
}

jogoForca();