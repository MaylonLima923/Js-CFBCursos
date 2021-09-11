// Constantes da classe Math
document.write("<h1>Constantes</h1>");

var constantes = [];

//Retorna o número Euler
var euler = Math.E;

//Retorna o número PI
var pi = Math.PI;

//Retorna a raiz quadrada de 2
var raiz2 = Math.SQRT2;

//Retorna a raiz quadrada de 1⁄2
var raiz1_2 = Math.SQRT1_2;

//Retorna o logaritmo natural de 2
var log2 = Math.LN2;

//Retorna o logaritmo natual de 10
var log10 = Math.LN10;

//Retorna base 2 do logaritmo de E
var log2e = Math.LOG2E;

//Retorna base decimal do logaritmo de E
var log10e = Math.LOG10E;

constantes.push(euler, pi, raiz2, raiz1_2, log2, log10, log2e, log10e);

for (var i = 0; i < constantes.length; i++) {
    document.write(constantes[i] + "<br>");
}