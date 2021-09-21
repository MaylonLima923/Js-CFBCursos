var texto = document.getElementById("txt").innerHTML;
var txt2 = " - texto de teste";

// O método serach() procura pela ocorrência e retorna sua posição dentro da string, a posição é em relação ao primeiro caractere da ocorrência
// var res = texto.search(/aula/i);

// O método replace() substitui uma string por outra
// var res = texto.replace(/curso/ig, "aula");

// O método charAT() retorna o caractere na posição indicada como parâmetro do método
// var res = texto.charAt(11);

// O método charCodeAt() retorna o código do caractere na posição indicada como parâmetro do método
// var res = texto.charCodeAt(11);

// O método fromCharCode() retorna o código em caractere
// document.write(String.fromCharCode(res));

// O método concat() concatena, funde, une, junta uma string em outra, no código a seguir juntamos as strings txt1 e txt2.
var res = texto.concat(" - aula 47 do curso de javascript" + txt2);

document.write(res);