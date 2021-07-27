export function JSONparse() {

    const texto = `{"name": "Paul" , "age": 30, "married": false}`;

    const objeto = JSON.parse(texto);

    //incluindo um novo objeto no array
    const person = [{ name: `Lia` }, { age: 20 }];
    person.married = false;
    person.name = `Ana`
    console.log(person)

    //deletanto um propriedade do objeto
    let pets = { dog: "Bruce", cat: "Lili" }
    
    delete pets['dog'];
    console.log(pets);

  
    return `
<h2> 1. Converter uma String (texto) para um objeto JSON</h2>
<p> Para isso basta usar a função JSON.parse() passando a string como parâmetro.</p>

<p> const objeto = JSON.parse(texto) </p> 

<hr>

<h2> 2. Converter um objeto JSON para String </h2>
<p> Para isso basta usar a função JSON.stringify() passando o objeto como parâmetro.</p>

<p> Retorno JSON.stringify(objeto): </p>

${JSON.stringify(objeto)}

<hr>

<h2> 3. Ler os dados dos atributos de um JSON </h2>
<p> A primeira é através do ponto (.), você escreve o nome do objeto ponto (.) e o nome do atributo.</p>
<p> A segunda maneira é com colchetes e uma string com o nome do atributo. </p>

<p> Retorno de {objeto.name}:</p>
${objeto.name}

<p> Retorno de {objeto[age]}: </p>

${objeto[`age`]}

<hr>

<h2> 4. Inserir e alterar os dados dos atributos de um JSON </h2>

<p> Os objetos JSON do Javascript são dinâmicos. Isso significa que eles podem ter a sua estrutura modificada.</p>
<p> Logo, você consegue adicionar novos atributos a um objeto dinamicamente, bem como alterar o valor dos atributos já existentes. </p>

<p> Veja o exemplo: </p>

<p> const person = [{name: Lia} , {age: 20}]; </p>
<p> person.married = false; </p>

<hr>

<h2> Como remover propriedade do objeto Json e seu valor </h2>

<p> O operador delete é usado para remove um objeto property.</p>

<p> let pets = { dog: "Bruce", cat: "Lili" } </p>   
<p> delete pets['dog']; <p> 

`
}

