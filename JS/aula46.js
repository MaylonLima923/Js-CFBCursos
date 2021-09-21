var texto = document.getElementById("txt").innerHTML;

// O método match() busca uma letra ou palavra dentro de uma string

// var res = texto.match(/Javascript/ig);
// var res = texto.match(/[oa]/ig);
// var res = texto.match(/[^oa]/ig);
// var res = texto.match(/[a-g]/ig);
// var res = texto.match(/\d/ig);
// var res = texto.match(/\w/ig);
// var res = texto.match(/\W/ig);
var res = texto.match(/\d/ig);

document.write(res + ": " + res.length);

document.write("<br>" + res[1]);