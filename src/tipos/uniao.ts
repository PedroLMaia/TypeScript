let nota: number | string = 10
nota = 'A+'

console.log(nota)

type NotaOuConteito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

let n1: NotaOuConteito = 7
n1 = 'C'

console.log(n1)

function imprimirNotaDoAlunos(nota: NotaOuConteito){
    if(typeof nota === 'number'){
        console.log(`Nota ${nota}`)
    } else {
        console.log(`Conceito ${nota}`)
    }
}

n1 = 9.5
imprimirNotaDoAlunos(n1)