type OperacaoFn = (a: number, b: number) => number
type NumeroOrTexto = string | number

let operacao: OperacaoFn
let opx: OperacaoFn
let x: NumeroOrTexto
x = 'teste'
x = 123

function somar(n1: number, n2: number): number {
    return n1 + n2
}

function multiplicar(n1: number, n2: number): number {
    return n1 * n2
}

operacao = somar
console.log(operacao(2, 5))

operacao = multiplicar
console.log(operacao(2, 5))