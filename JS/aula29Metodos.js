// Métodos da classe Math
document.write("<h1> Métodos </h1>");

var metodos = new Array();

// Retorna o valor absoluto de X
document.write(Math.abs(-5) + "<br>");

// Retorna o arco cosseno de X
document.write(Math.acos(-1) + "<br>");

// Retorna o arco seno de X
document.write(Math.asin(0.5) + "<br>");

// Retorna o arco tangente de X como um valor numérico entre PI/2 e PI/2 radiano
document.write(Math.atan(7) + "<br>");

// Retorna o arco tangente do quociente dos argumentos y e x
document.write(Math.atan2(8, 12) + "<br>");

// Retorna o valor de X arredondado para cima
document.write(Math.ceil(15.3) + "<br>");

// Retorna o valor de X arredondado para baixo
document.write(Math.floor(15.7) + "<br>")

//Retorna o inteiro mais próximo, arredonda para cima ou para baixo
document.write(Math.round(15.3) + " / " + Math.round(15.7) + "<br>");

// Retorna o cosseno de x em radianos
document.write(Math.cos(10) + "<br>");

// Retorna o valor de Ex
document.write(Math.exp(15) + "<br>");

// Número aleatório de 0 a 10
num = Math.floor(Math.random() * 10);
document.write("<h1> Número: " + num + "</h1>");