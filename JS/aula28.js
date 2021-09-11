var dt = new Date();
var diaSemana = dt.getDay(); // Pega o dia da Semana
var dia = dt.getDate(); // Pega o dia do mês
var mes = dt.getMonth(); // Pega o mês
var ano = dt.getFullYear(); // Pega o ano
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var semanas = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var horas = dt.getHours();
var min = dt.getMinutes();
var sec = dt.getSeconds();

document.write(semanas[diaSemana] + ", " + dia + " de " + meses[mes] + " de " + ano + "<br>");
document.write(horas + ":" + min + ":" + sec);