        // Como usar arrays
        var cor = [];
        // O Método push() insere um valor no final da array
        cor.push('Vermelho');
        cor.push('Preto');
        cor.push('Branco');
        cor.push('Azul');
        cor.push('Verde');
        cor[5] = 'Amarelo';
        cor[6] = 'Cinza';
        cor.push('Rosa');

        for (var i = 0; i < 7; i++) {
            document.write(cor[i] + '<br>');
        }