var mochila = [];

mochila.push("Caderno");
mochila.push("Estojo");
mochila.push("Lápis");
mochila.push("Borracha");

// O método unshift() insere um valor no inicio da matriz
mochila.unshift("Apontador");

// O método pop() remove o último valor da array
//mochila.pop();

// O método shift() remove o primeiro valor da matriz
//mochila.shift();

// O método splice() remove um elemento de escolha da matriz
// splice(índice, quais elementos)
mochila.splice(2, 1)


var i = 0;
while (i < 5) {
    if (mochila[i] === undefined) {
        document.writeln("O valor " + (i + 1) + " não existe!" + " <br>");
    } else {
        document.writeln(mochila[i] + "<br>");
    };
    i++
};