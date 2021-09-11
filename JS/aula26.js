// div (tag pai) > (indica a tag filho) p (tag filho)
var elementos = document.querySelectorAll("p, h1");
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "green";
}