export function Destructuring() {

    //Array para variáveis:
    const array = [1, 2, 3, 4];

    const [numb1, numb2, numb3, numb4] = array;

    console.log(array);
    console.log(numb1);
    console.log(numb2);
    console.log(numb3);
    console.log(numb4);

    //Objeto para variáveis:
    const objeto = { nome: `Paulo`, idade: 30 };
    const { nome, idade } = objeto;
    console.log(nome, idade);

    //Funções para variáveis:
    function numbers() {
        return [5, 10];
    }

    const [numb5, numb10] = numbers();
    console.log(numb5, numb10)

    //Ignorando elementos
    const lista = ['Maçã', 'Laranja', 'Banana', 'Caqui'];
    let [, , , ultima] = lista;
    console.log(ultima);

    //Destructring com String
    let [a, b, c, d] = "LOVE";
    console.log(a, b, c, d);

    //Destructuring com Rest Operator:
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [primeiro, ...demais] = numeros;
    console.log(primeiro);
    console.log(demais);


    return `

<h2> Array para variáveis:</h2>
<p> const array = [1, 2, 3, 4]; </p>
<p>const [numb1, numb2, numb3, numb4] = array; </p> 
<p> Estes números eram uma array, agora são variáveis individuais: 
${numb1}, ${numb2}, ${numb3} e ${numb4}.</p>

<hr>

<h2> Objeto para variáveis: </h2>
<p>const objeto = {nome: "paulo" , idade: 30};</p>
<p>const {nome, idade} = objeto </p>
<p> O nome dele é ${nome}, e sua idade é  ${idade}.</p>

<hr>

<h2>Outra forma de utilizar o destructuring é atribuindo variáveis </br>
de acordo com o retorno de uma função: </h2>
<p>function numbers() { return [5, 10];}</p>
<p>const [numb5, numb10] = numbers();</p>
Os números ${numb5} e ${numb10} são retornos da função numbers dentro de um array.

<hr>

<h2>Ignorando elementos: </h2>
<p>Caso nosso objetivo não seja utilizar todos os valores do array, 
podemos pular os elementos que não desejamos.</p>
<p>const lista = ['Maçã', 'Laranja', 'Banana', 'Caqui'];</p>
<p>let[, , , 4] = lista</p>
<p>A fruta que desejamos imprimir aqui é a ${ultima};
<p></p>
<hr>

<h2>Destructring com String: </h2>
<p>Destructuring pode atribuir para variáveis qualquer valor que pode ser iterado: </p>
<p> let [a, b, c, d]= "LOVE"; </p>
<p> ${a} - ${b} - ${c} - ${d}</p>
<p> No exemplo acima vemos uma string que foi separada em 4 partes, 
uma para cada variável.</p>
<hr>

<h2>Destructuring com Rest Operator:</h2>
<p>Podemos também fazer uso com a funcionalidade do Rest de separar o 
resto de um array para uma determinada variável </p>
<p> const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];</p>
<p> const [numb1, ...demais] = numeros </p>
<p> Este é o primeiro número do array ${primeiro}, ele foi separado dos 
demais números do array ${demais.join(`, `)}, e agora é uma variável isolada. </p>
<hr>

`


};