import { StringindexOf } from "../../components/indexOf/index.js";
import { StringlastIndexOf } from "../../components/indexOf/index.js";

function IndexOf() {
    const $indexof = `
<div>
    <h2> O indexOf()método retorna o índice de (a posição de) a first ocorrência de um texto especificado em uma string. </h2>
    <p> The more you listen, the better you speak. </p>
    <p> MÉTODO indexOF(): Esta é a localização da primeira String "more" dentro da frase acima: ${StringindexOf()} </p>
    <hr>
    <h2> O lastIndexOf()método retorna o índice da última ocorrência de um texto especificado em uma string: </h2>  
    <p> The more you read, the better you write. </p>
    <p> MÉTODO lastIndexOf(): Esta é a localição da última String "you" na frase acima: ${StringlastIndexOf()} </p>

    <h3> Ambos indexOf(), e lastIndexOf()retorna -1 se o texto não for encontrado. </h3>
    <h3> Ambos os métodos aceitam um segundo parâmetro como a posição inicial para a pesquisa. </h3>
    <hr>
</div>
`;
    return $indexof;

}

export default IndexOf;

