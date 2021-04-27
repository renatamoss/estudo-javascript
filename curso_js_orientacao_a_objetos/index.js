//trabalhando com módulos:
//separando as classes por arquivos, utilizar métodos ***import e export***
//executa no node o comando npm init
//foi gerado um arquivo package.json na raiz do projeto(vide arquivo neste projeto)
//no arquivo: adiciona uma nova marcação, "type", recebendo o valor "module".

//Operador new: criando uma instância para a classe;
// new ContaCorrente: é uma referência, ao local q está armazenado o objeto(instanciação);

import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

//conta1, cliente1
const cliente1 = new Cliente("Samuel", 1122233344);
const contaCorrenteSamuel = new ContaCorrente(1001, cliente1);

//conta2, cliente2
const cliente2 = new Cliente("Sara", 88822233309);
const contaCorrenteSara = new ContaCorrente(2002, cliente2);

//conta3, cliente3
const cliente3 = new Cliente("Renata", 99922233309);
const contaCorrenteRenata = new ContaCorrente(3003, cliente3);

contaCorrenteSamuel.depositar(500);
contaCorrenteSara.depositar(100);
contaCorrenteRenata.depositar(8000);

console.log(contaCorrenteSamuel);
console.log(contaCorrenteSara);
console.log(contaCorrenteRenata);

contaCorrenteSamuel.transferir(200, contaCorrenteSara);
console.log(contaCorrenteSara.saldo);

console.log(ContaCorrente.numeroContasCorrentes);






