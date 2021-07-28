//ternario com parâmetro
function qualNome(nome) {
    console.log(nome ? `o nome dela é ${nome}` : `Não tem nome`);
}
qualNome(`Paulo`)

//outra forma de fazer o exemplo acima, atribuindo valor default inicial
function temPet(pet = `(Não tem pet)`) {
    console.log(pet ? `o nome do seu pet é ${pet}` : pet);
}
temPet()

//ternário com variável
function podeBeber() {
    let idade = 17;
    podeBeber = (idade >= 18) ? 'Pode consumir bebidas.' : 'Não posso consumir bebidas.';
    console.log(podeBeber);
}
podeBeber()

function maiorIdade(idade) {
    acompanhado = false;
    if (idade > 18) {
        console.log(`Liberado`)
    } else {
        podeEntrar = (idade < 18 && acompanhado) ? `Está acompanhado, liberado.` : `É menor e não está acompanhado`
        console.log(podeEntrar)
    }
}
maiorIdade(10)

function study(ask = true) {
    while (ask) {
        console.log(`You are study now.`)
        break;
    }
}
study(ask = false)

