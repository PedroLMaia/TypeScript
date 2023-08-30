// //nome, preco, desconto(0-1), Funcao precoComDesconto

// type ProdutoFn = {nome: string, preco: number, desconto: 0 | 1 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9}

// let produto: ProdutoFn

// function precoComDesconto(produto: ProdutoFn){
//     const valorFinal = produto.preco - (produto.preco * produto.desconto)
//     console.log(produto)
//     console.log(`Valor com desconto é: ${valorFinal}`)
// }

// produto = {
//     nome: "PS5",
//     preco: 4000,
//     desconto: 0.1
// } 

// precoComDesconto(produto)

// nome, preco, desconto (0-1), Função precoComDesconto

// nome, preco, desconto (0-1), Função precoComDesconto

type Produto = {
    nome: string
    preco: number
    desconto: number
    precoComDesconto: () => number
}

let produto: Produto = {
    nome: 'Caneta',
    preco: 15.95,
    desconto: 0.1,
    precoComDesconto() {
        return this.preco * (1 - this.desconto)
    },
}

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.precoComDesconto())