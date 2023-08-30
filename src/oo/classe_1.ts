class Curso {
    private _id: number | undefined
    public nome: string | undefined

    get id() {
        return this._id
    }

    set id(id: number | undefined) {
        if((id ?? 0) > 0) { //id ?? 0 -> se id for nulo ou undefined, o valor dele sera atribuido 0, entao ele fara a comparacao se id for maior que 0.
            this._id = id
        }
    }
}

const c1 = new Curso()
c1.nome = 'Iniciando com JavaScript'
console.log(c1.nome)


const c2 = new Curso()
c2.nome = 'Iniciando com TypeScript'
console.log(c2.nome)


class Curso2 {
    private _id: number | undefined
    public nome: string | undefined

    get id() {
        return this._id
    }

    set id(id: number | undefined) {
        if((id ?? 0) > 0) { //id ?? 0 -> se id for nulo ou undefined, o valor dele sera atribuido 0, entao ele fara a comparacao se id for maior que 0.
            this._id = id
        }
    }
}

const c3 = new Curso2()
c3.id = 123
c3.nome = 'Iniciando com JAVA'
console.log(c3.id)
console.log(c3.nome) 
