var tabela = document.getElementById("tbnotas");
var nota;

for (var i = 1; i < tabela.rows.length; i++) {
    nota = parseFloat(tabela.rows[i].cells[1].innerHTML) + parseFloat(tabela.rows[i].cells[2].innerHTML);
    tabela.rows[i].cells[3].innerHTML = nota;
}

var n = [];

n[0] = document.getElementById("n1");
n[1] = document.getElementById("n2");
n[2] = document.getElementById("n3");
n[3] = document.getElementById("n4");

for (var i = 0; i < n.length; i++) {
    if (n[i].innerHTML < 70) {
        n[i].style.color = "rgb(255, 0, 0)";
    } else {
        n[i].style.color = "rgb(0, 0, 255)";
    }
}