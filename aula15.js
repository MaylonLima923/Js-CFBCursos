var mochila = [];
var num = [6, 1, 8, 9, 7, 2, 4, 3, 5];
var i = 0;
var numeros;

mochila.push("Caderno");
mochila.push("Estojo");
mochila.push("Lápis");
mochila.push("Borracha");
mochila.push("Apontador");

// while (i < 5) {
//     if (mochila[i] === undefined) {
//         document.writeln("O valor " + (i + 1) + " não existe!" + " <br>");
//     } else {
//         document.writeln(mochila[i] + "<br>");
//     };
//     i++
// };

// o método indexOf() retorna o índice de um valor
//document.write(mochila.indexOf("Estojo"));

// O metodo sort() ordena a array em ordem crescente
num.sort();

// O método reverse() faz o primeiro elemento do array se tornar o último e o último torna-se o primeiro.
num.reverse();

while (i < num.length) {
    document.write(num[i] + "<br>");
    i++;
};

// O método join() junta todos os elementos de um array em uma string e retorna esta string.
// Podemos usar um paramêtro para trocar o caractere de separação
numeros = num.join();
document.write(numeros + "<br>");
numeros = num.join("/");
document.write(numeros + "<br>");