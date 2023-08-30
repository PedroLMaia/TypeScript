class Curso {
    constructor(readonly id: number, public nome?: string) {
        if(id < 1) throw new Error('Id invalido')
    }
}

const c1 = new Curso(123)
c1.nome = 'Iniciando com Typescript'
console.log(c1.id)
console.log(c1.nome)

const c2 = new Curso(456, 'Javascript')
console.log(c2.id)
console.log(c2.nome)

export {}