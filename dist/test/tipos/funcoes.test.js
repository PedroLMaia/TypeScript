"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcoes_1 = require("../../src/tipos/funcoes");
test('Deve retornar uma saudação baseada no nome da pessoa.', () => {
    const s = (0, funcoes_1.saudadacao)("Pedro");
    expect(s).toBe('Olá Pedro! Passar bem!');
});
test('Deve multiplicar dois numeros.', () => {
    const resultado = (0, funcoes_1.multiplicar)(4, 5);
    expect(resultado).toBe(20);
});
test('Deve retornar NaN com parametro do tipo string', () => {
    const resultado = (0, funcoes_1.multiplicarPerigosa)("a", 5);
    expect(resultado).toBeNaN();
});
//# sourceMappingURL=funcoes.test.js.map