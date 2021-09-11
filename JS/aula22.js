var a;
try {
    a = prompt('Digite um número de 1 a 10:');
    if (a > 10 || a < 1) {
        throw new Error('Número inválido, o valor deve ser maior ou igual a 10');
    }
    document.write(a)
} catch (e) {
    document.write('Erro: ' + e.message);
} finally {
    document.write('<br> Fim do tratamento')
}