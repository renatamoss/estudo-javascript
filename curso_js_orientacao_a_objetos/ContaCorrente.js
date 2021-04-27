//early return: se condição id não atende, return já para o código;
//_cliente: underline determina atributto como **privado**;

//set: assessor para manipular atributo de forma controlada (não usa _ acessor sempre é público)
//set: boa prática para garantir que a atribuição de propriedades está sempre segura.

//get: assessor somente de leitura(retorno):
//cpf: atributo único, é necessário protegermos tornando-o privado
//que traria a necessidade de um assessor **getter** para recuperá-lo.

//Construtores são utilizados para inicializar os atributos.

//static: para que o atributo seja inerente à classe como um todo, 
//e não das instâncias individualmente, para isso usa-se a palavra reservada static.

//organizar o código da classe ContaCorrente: (atributos encapsulados)
//separando atributos públicos e privados na parte superior
//seguidos dos assessores 
//seguido do constructor
//e por fim listando os métodos.


import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroContasCorrentes = 0;
  
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroContasCorrentes += 1;
    }

    sacar(valor) { //métodos de saldo: sacar, depositar e transferir;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return (valor);
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return; //early return
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo;" //OBS: é possível adicionar atributos dinâmicamente em JS.
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

