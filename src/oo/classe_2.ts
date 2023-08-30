class Curso2 {
    private _id: number
    public nome: string | undefined

    constructor(id: number) {
        this._id = id
        if(id < 1) throw new Error('Id invalido')
    }

    get id(){
        return this._id
    }
}

const c1 = new Curso2(123)
c1.nome = 'Iniciando com JAVA'
console.log(c1.id)
console.log(c1.nome) 