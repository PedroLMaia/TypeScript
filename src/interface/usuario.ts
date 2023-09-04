interface Usuario {
    id: number
    nome: string
    email: string
    senha?: string
}

const usuarioLogado: Usuario = {
    id: 123,
    nome: 'João',
    email: 'joao@zmail.com',
    senha: '123456'
}

console.log(usuarioLogado.id)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.email)
console.log(usuarioLogado.senha)

export {}