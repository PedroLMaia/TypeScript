class DesafioEstatico {
    nota: number = 9.8 // atributo de instância!
    static notaEstatica: number = 7.9 // atributo de instância!

    // método de classe (estático)
    static executar() {
        const instancia = new DesafioEstatico()
        console.log(instancia.nota)
        console.log(DesafioEstatico.notaEstatica)
    }
}

DesafioEstatico.executar()

const outraInstancia = new DesafioEstatico()
console.log(outraInstancia.nota)