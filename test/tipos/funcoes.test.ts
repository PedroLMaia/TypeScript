import { multiplicar, multiplicarPerigosa, saudadacao } from "../../src/tipos/funcoes";

test('Deve retornar uma saudação baseada no nome da pessoa.', () => {
    const s = saudadacao("Pedro")
    expect(s).toBe('Olá Pedro! Passar bem!')
})

test('Deve multiplicar dois numeros.', ()=>{
    const resultado  = multiplicar(4, 5)
    expect(resultado).toBe(20)
})

test('Deve retornar NaN com parametro do tipo string', ()=>{
    const resultado  = multiplicarPerigosa("a", 5)
    expect(resultado).toBeNaN()
})