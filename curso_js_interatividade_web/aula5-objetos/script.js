// Programação estruturada se dá pelo uso de resolução de tarefas, ou seja, 
// um código resolvendo um problema. 

// POO: A programação orientada a objetos tenta fazer com que os problemas sejam 
// resolvidos de forma que possamos resolvê-los futuramente com a mesma eficiência.

// atributos: são as características do objeto
// métodos: são seus comportamentos - tb é um atributo do nosso objeto

let pessoa = {
    nome: 'Ana',
    idade: 23,
    possuiFaculdade: true,
    dados: function () {
        return (`O seu nome é  ${pessoa.nome} e sua idade é ${pessoa.idade}.`);
    },
    possuiDoutorado: false,
}

// para chamar no console coloco nome da variável e . + atributo()

let quadrado = {
    lados: 4,
    perimetro: function (lado) {
        return this.lados * lado;
    },
    area(lado) {
        return lado * lado;
    }
}

let triangulo = {
    lados: 3,
    tipoTriangulo: function (ladoX, ladoY, ladoZ) {
        if (ladoX == ladoY && ladoZ == ladoX && ladoZ == ladoY) {
             return (`Equilatero`)
        }
        else if (ladoX != ladoY && ladoZ != ladoX && ladoZ != ladoY) {
            return (`Escaleno`)
        } else {
            return (`Isosceles`);
        }
    }
}

let carro = {
    cor: 'Cinza',
    modelo: 'Fusca',
    marca: 'Volkswagen',
    quantPortas: 2,
    ano: 2000,
    emMovimento: function () {
        let andando = false;

        return andando ? `Está em movimento.` : `Está parado.`;
    }
}

carro.cor = "Branco"

let propriedadesCarro = `O carro tem as seguintes propriedades ${carro.cor}, ${carro.modelo}, ${carro.marca} e ele ${carro.emMovimento()}`;
let propCarro = 'O carro tem as seguintes propriedades ' + carro.cor;

let meuObj = {}


// Exercícios de Objetos

// Crie um objeto com os seus dados pessoais// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
let meusDados = {
    nome: 'Renata',
    sobrenome: 'Marques',
    nomeCompleto: function () {
        return (`Meu nome completo é ${meusDados.nome} ${meusDados.sobrenome}.`);
    }
}

// Modifique o valor da propriedade salário para 3000
let emprego = {
    salario: 1000,
    empresa: 'First Job',
    nivel: 'Junior',
    aumento: 2000,
    novoSalario: function () {
        salarioAumento = emprego.salario + this.aumento;
        return salarioAumento;
    }
}

// Crie um objeto de um cachorro que tenha três atributos, que late ao ver um homem
let cachorro = {
    nome: 'Pingo',
    dono: 'João',
    lateVerHomem: true,
    late: function () {
        if (lateVerHomem = true) {
            return (`${cachorro.dono} seu cachorro ${cachorro.nome} late muito alto.`);
        } else {
            return(`${cachorro.dono} não escuto seu cachorro ${cachorro.nome} latir.`);
        }
    }
}
