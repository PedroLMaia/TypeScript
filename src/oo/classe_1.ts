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
c1.id = -123
c1.nome = 'Iniciando com TypeScript'
console.log(c1.id)
console.log(c1.nome)