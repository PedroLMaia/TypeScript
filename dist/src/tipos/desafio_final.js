"use strict";
function movimentar(valor) {
    this.saldo += valor;
}
const clientes = [
    {
        nome: 'Pedro',
        email: 'p@mail.com',
        contas: [
            { numero: 1, saldo: 13000, movimentar },
            { numero: 2, saldo: 50, movimentar }
        ]
    },
    {
        nome: 'camila',
        email: 'c@mail.com',
        contas: [
            { numero: 3, saldo: 5000, movimentar },
            { numero: 4, saldo: 500, movimentar }
        ]
    }
];
function consultarSaldo(numConta) {
    const conta = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta);
    }).filter(c => c !== undefined)[0];
    return conta ? conta.saldo : "404";
}
console.log(consultarSaldo(2));
//# sourceMappingURL=desafio_final.js.map