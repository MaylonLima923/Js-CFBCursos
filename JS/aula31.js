// Variável de escopo global
var nomeCor = "Vermelho";

function cor() {
    // Variável com o escopo limitado a função
    var nomeCor = "Azul";
    document.write(nomeCor + "<br>");
}

cor();
document.write(nomeCor + "<br>");