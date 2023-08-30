"use strict";
// //nome, preco, desconto(0-1), Funcao precoComDesconto
let produto = {
    nome: 'Caneta',
    preco: 15.95,
    desconto: 0.1,
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    },
};
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(produto.precoComDesconto());
//# sourceMappingURL=produto.js.map