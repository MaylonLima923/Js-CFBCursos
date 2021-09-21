var texto = document.getElementById("txt").innerHTML;

// O método indexOf Retorna a posição do primeiro caractere especificado a ser encontrado
// var res = texto1.indexOf("j");

// O método lastIndexOf Retorna a posição do último caractere especificado a ser encontrado
// var res = texto1.lastIndexOf("j");

// O método localeComparer() compara duas strings, se forem iguais retorna “0” zero, se a primeira for menor que a segunda retorna “-1” e se for maior, retorna “1”, então qualquer valor diferente de zero significa que as strings não são iguais
// var res = texto1.localeCompare(texto2);

// O método slice() corta uma string de um ponto A até um ponto B especificados e retorna o valor recortado
// var res = texto.slice(3, 10);

// O método split() subdivide uma string sempre que encontrar o caractere especificado como divisor
// var res = texto.split(" ");

// O método substr() funciona de forma semelhante ao método slice(), com uma diferença básica no segundo parâmetro, que indica o tamanho do corte
// var res = texto.substr(0, 3);

// O método toLowerCase() Converte a string inteira para caracteres minúsculos
// var res = texto.toLowerCase();

// O método toUpperCase() Converte a string inteira para carcteres maiscúlos
// var res = texto.toUpperCase();

var res = texto.toUpperCase().substr(22, 10);
document.write(res);