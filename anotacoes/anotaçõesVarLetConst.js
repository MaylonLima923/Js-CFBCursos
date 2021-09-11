/*
if (true) {
    O var vai funcionar em qualquer lugar do código
    var a = 10;
    O let, apenas onde é declarado
    let b = 10;

    console.log("Dentro do IF");
    console.log(a);
    console.log(b);
}

console.log("Fora do if");
console.log(a);
console.log(b);
*/

if (true) {
    // Uma constante não pode ser reatribuida
    const a = 10
    a = 20;
}