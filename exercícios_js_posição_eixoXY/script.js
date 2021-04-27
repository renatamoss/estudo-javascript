//Como pegar a posição do elemento no HTML com Javascript (EIXO X e EIXO Y)
//pode-se utililizar dois métodos: querySellector ou document.getElementById

// let box = document.getElementById('box');
let box = document.querySelector('#box');
let coordenadas = box.getBoundingClientRect();
let botaoCoordenadas = document.getElementById('botaoCoordenadas');

mostraCoordenadas = () => {
    if (coordenadas.x === 25) {
        console.log(`chegou no 25!`);
    }else{
        console.log(`não é 25! as coordenadas são:`);
        console.log(coordenadas);
    }

}

botaoCoordenadas.addEventListener('click', mostraCoordenadas);
