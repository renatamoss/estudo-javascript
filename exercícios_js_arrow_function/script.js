//Utilizando arrow function no JavaScript
//(a , b) => {
//     return a + b;
// }

//(a , b) => a + b;

let a = 5;
let b = 10;
let c = (num1, num2) => num1 + num2;
console.log(c(a, b));

let nomecompleto = "Renata Marques";
let arrayNome = (nomecompleto) => nomecompleto.split(' '); //retorna um array da string
console.log(arrayNome(nomecompleto));

let contando = ['20', '10'];
let contandoAqui = (contando) => contando.indexOf('20');
console.log(contandoAqui(contando));

let sabores = ['morango', 'limao', 'uva', 'laranja'];
let preferido = (sabores) => sabores.pop();
console.log(preferido(sabores));

let bandeira = ['verde', 'amarelo', 'azul', 'branco', 'roxo'];
let bandeiraBrasil = (bandeira) => bandeira.splice(0, 4);
console.log(bandeiraBrasil(bandeira));

let compras = ['água', 'cerveja', 'pizza'];
let urgente = (compras) => compras.shift();
console.log(urgente(compras));

let estudo = ['javascript', 'bootstrap', 'git', 'node'];
let estudar = (estudo) => estudo.includes('node');
console.log(estudar(estudo));

let filho = 'Samuel';
let filha = 'Sara';
let filhos = (filho, filha) => {
    return filho + ' ' + filha;
}
console.log(filhos(filho, filha));

let clientes = [
    { nome: 'Renata', idade: 40 },
    { nome: 'Samuel', idade: 12 },
    { nome: 'Sara', idade: 8 }];
let clienteMaior = clientes.filter((clientes) => {
    return clientes.idade >= 18;
});
console.log(clienteMaior);

setTimeout(() => {
    console.log("Apareceu depois de 5 segundos!");
}, 5000);

//OBJETO THIS
//O this faz referência ao objeto do qual a função é uma propriedade. 
//Em outras palavras, o this faz referência ao objeto que está chamando a função no momento.
let pessoa = {
    nome: "Renata",
    digaNome() {
        console.log(this.nome);
        console.log(this);
    }
}
pessoa.digaNome();

