//Private so é vissivel dentro da classe;
//Protected só é visivel dentro da classe e tambem é transmitido por heranca;

class Carro {
    private velocidadeAtual: number = 0
    protected readonly VELOCIDADE_MAXIMA: number = 200

    constructor(public nome: string) {}

    get velocidadeATUAL() { //Para a pegar o valor de alterarVelocidade que é protected;
        return this.velocidadeAtual
    }

    get velocidadeMax() { //Para a pegar o valor de VELOCIDADE_MAXIMA que é protected e readonly;
        return this.VELOCIDADE_MAXIMA
    }

    protected alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta

        if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
            this.velocidadeAtual = novaVelocidade
        }
    }

    acelerar() {
        this.alterarVelocidade(10)
    }
}

const c1 = new Carro('Fusca')
console.log(c1.velocidadeMax);
console.log(c1.velocidadeATUAL)
c1.acelerar()
c1.acelerar()
console.log(c1.velocidadeATUAL)

export {}