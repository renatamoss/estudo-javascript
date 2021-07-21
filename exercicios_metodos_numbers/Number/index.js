export function NumberMetod() {
    const $data = new Date;
    const $dataNumber = Number($data);

    return `
    <div>
        <h2> Number() pode ser usado para converter variáveis ​​JavaScript em números. </h2>
        <p> O métodos Number() também pode converter uma data em um número. </p>
        <p> O Number()método acima retorna o número de milissegundos desde 1.1.1970:  ${$dataNumber} </p>
        <hr>
    </div>
    `
}