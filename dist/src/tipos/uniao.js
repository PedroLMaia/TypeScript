"use strict";
let nota = 10;
nota = 'A+';
console.log(nota);
let n1 = 7;
n1 = 'C';
console.log(n1);
function imprimirNotaDoAlunos(nota) {
    if (typeof nota === 'number') {
        console.log(`Nota ${nota}`);
    }
    else {
        console.log(`Conceito ${nota}`);
    }
}
n1 = 9.5;
imprimirNotaDoAlunos(n1);
//# sourceMappingURL=uniao.js.map