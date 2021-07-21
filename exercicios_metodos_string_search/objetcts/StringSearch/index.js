function StringSearch() {
    const $phrase = `The more you listen, the better you speak.`
    const $word = $phrase.search("The");

    return `
<div>
    <p> O search()método pesquisa uma string para um valor especificado e retorna a posição da correspondência:</p>
    <h2> ${$phrase} </h2>
    <p> Veja o retorno da método aqui, a localização da palavra "The" é ${$word}. </p>
    <hr>
</div>
`;
}

export default StringSearch;