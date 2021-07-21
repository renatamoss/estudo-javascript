export function StringIncludes() {
    const $phrase = `The more you read, the better you write.`
    const $word = $phrase.includes("read");

    return `
<div>
    <p> O includes()método retorna verdadeiro se uma string contém um valor especificado. </p>
    <h2> ${$phrase} </h2>
    <p> Se a palabra "read" constar na frase, o retorno será: ${$word} </p>
    </hr>
</div>
`
}