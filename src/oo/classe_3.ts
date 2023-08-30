class Produto {
    constructor(
        readonly id: number, 
        readonly nome: string, 
        readonly preco: number, 
        readonly desc: number = 0
    ) {
        if(id <= 0) throw new Error('Id inválido')
        if(nome.length < 2) throw new Error('Nome pequeno')
		if(nome.length > 250) throw new Error('Nome grande')
		if(preco <= 0) throw new Error('Preço inválido')
		if(desc < 0 || desc > 0.8) throw new Error('Desconto inválido')
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto(1, 'Caneta', 12.5, 0.1)
const p2 = new Produto(2, 'Notebook', 7860.78)
console.log(p1.nome ,p1.precoFinal)
console.log(p2.nome ,p2.precoFinal)

export {}