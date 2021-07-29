function getResult(parametro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parametro * 2.5);
        }, 3000);
    })

}

//EXEMPLO COM PROMISSE
getResult(2)
    .then((result => {
        if (result > 10) {
            console.log("PRIMEIRO GETRESULTADO: Valor maior que 10")
        } else {
            console.log(`PRIMEIRO GETRESULTADO: Valor MENOR que 10`)
            getResult(5)
        }
    })).catch((erro) => {
        console.log(`Deu erro`)
        console.log(erro)
    })
getResult(10)
    .then((result => {
        if (result > 10) {
            console.log("SEGUNDO GETRESULTADO: Valor maior que 10")
        } else {
            console.log(`SEGUNDO GETRESULTADO: Valor MENOR que 10`)
        }
    })).catch((erro) => {
        console.log(`Deu erro`)
        console.log(erro)
    })




//EXEMPLO COM async await
async function main() {
    try {
        if (await getResult(5) > 10) {
            console.log(`O valor que RETORNOU  é maior que 10`)
        } else {
            console.log(`O valor que RETORNOU é MENOR que 10`)
        }
        if (await getResult(3) < 10) {
            console.log(`O valor que RETORNOU é MAIOR que 10`)
        } else {
            console.log(`O valor que RETORNOU é MENOR que 10`)
        }

    } catch (err) {
        console.log(`DEU ERRO`)
        console.log(err)
    }

}



main();

