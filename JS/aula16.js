var mochila = [];

var item1 = ['Faca', 1],
    item2 = ['Corda', 3],
    item3 = ['Cura', 5],
    item4 = ['Camisa', 1];

mochila.push(item1, item2, item3, item4);

for (n = 0; n < mochila.length; n++) {
    for (i = 0; i < 2; i++) {
        if (i == 0) {
            document.write("Item: " + mochila[n][i]);
        };
        if (i == 1) {
            document.write(" - Quantia: " + mochila[n][i]);
        };
    };
    document.write("<br> <br>");
};