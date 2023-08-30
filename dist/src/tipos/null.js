"use strict";
const usuarios = [
    { nome: 'Joao', email: 'joao@zmail.com' },
    { nome: 'Pedro', email: 'pedro@zmail.com' },
    { nome: 'Maria', email: 'maria@zmail.com' },
    { nome: 'Gustavo', email: 'gustavo@zmail.com' },
    { nome: 'Amanda', email: 'amanda@zmail.com' },
    { nome: 'Rafaela', email: 'rafaela@zmail.com' },
];
function buscarPorEmail(email) {
    var _a;
    return (_a = usuarios.find((u) => u.email === email)) !== null && _a !== void 0 ? _a : null;
}
console.log(buscarPorEmail('maria@zmail.com'));
console.log(buscarPorEmail('mara@zmail.com'));
//# sourceMappingURL=null.js.map