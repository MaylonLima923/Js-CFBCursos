// O caractere especial barra invertida serve(neste caso) para indicar que as aspas vão entrar como string
// var texto = " CFB Cursos - \"Curso\" de Javascript";

// O caractere especial \n quebra uma linha
var texto = "CFB Cursos - \nCurso\n de Javascript";

// O método toString() converte um valor qualquer em uma string
// var res = num.toString();
// Ele também pode converter bases
// var bin = num.toString(2);
// var oct = num.toString(8);
// var hex = num.toString(16);

// O método trim() Remove os espaços antes e depois da string especificada
// var res = texto.trim();

document.write(texto + "<br>");
window.alert(texto);