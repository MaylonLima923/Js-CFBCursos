var mochila = [],
    mochila1 = [],
    mochila2 = [];

mochila1.push("Caderno");
mochila1.push("Estojo");
mochila1.push("Lápis");
mochila1.push("Borracha");
mochila1.push("Apontador");

mochila2.push("Martelo");
mochila2.push("Serrote");
mochila2.push("Régua");
mochila2.push("Chave");
mochila2.push("Garrafa");

// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
mochila = mochila1.concat(mochila2);
document.write("Mochila1:" + mochila1 + "<br>");
document.write("Mochila2:" + mochila2 + "<br>");
document.write("Mochila:" + mochila + "<br>");