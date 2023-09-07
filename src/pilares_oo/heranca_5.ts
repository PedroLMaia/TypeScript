// Classe abstrata
abstract class Celular { //Classe abstract é uma classe que não pode ser instanciada, porem pode ser herdada.
    ligar() {
        console.log('em ligação')
    }

    abstract acessarRedeMovel(): void //Método marcado como abstract não pode ter uma implementação dentro da classe abstract e também não pode ser implementado/usado da mesma classe na qual ele é declarado. 
}

// Classe concreta
class IPhone23Pro extends Celular {
    acessarRedeMovel(): void {
        console.log('Usando rede 7.5G')
    } //A classe Iphone23Pro herda da classe Celular e implementa o método acessarRedeMovel herdado da classe abstrata.
}

class GalaxyS57Ultra extends Celular {
    acessarRedeMovel(): void {
        console.log('Usando rede 7.5G')
    } //A classe GalaxyS57Ultra herda da classe Celular e implementa o método acessarRedeMovel herdado da classe abstrata.
    
}

let c1 = new GalaxyS57Ultra()
c1.ligar()
c1.acessarRedeMovel()

c1 = new IPhone23Pro()
c1.ligar()
c1.acessarRedeMovel()

export {}

//NOTA: Em TypeScript, métodos declarados como abstract em interfaces e classes abstratas não podem ter uma implementação na própria interface ou classe abstrata onde são definidos. Esses métodos abstratos são considerados apenas como declarações de assinatura, destinadas a serem implementados em classes concretas ou derivadas.

//NOTA: Quando você declara um método abstrato em uma classe abstrata, você está realizando uma ação chamada "declaração de método abstrato". Isso significa que você está fornecendo uma assinatura de método, incluindo o nome do método e seu tipo de retorno, mas não está fornecendo a implementação real do método na classe abstrata. A declaração de um método abstrato em uma classe abstrata serve como um contrato ou uma promessa de que todas as classes derivadas (subclasses) dessa classe abstrata devem fornecer uma implementação real para esse método abstrato. Portanto, a classe abstrata define o que os métodos devem fazer, mas não como eles devem fazer.
