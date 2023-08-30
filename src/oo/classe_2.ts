class Curso2 {
    readonly id: number
    public nome: string | undefined

    constructor(id: number) {
        this.id = id
        if(id < 1) throw new Error('Id invalido')
    }
}

const c1 = new Curso2(123)
// c1.id = 456
c1.nome = 'Iniciando com JAVA'
console.log(c1.id)
console.log(c1.nome)
export {}