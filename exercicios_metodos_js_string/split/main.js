const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

<p> Uma string pode ser convertida em uma matriz com o split()método. </p>

<p> Hoje é ${Split()}. </p>


`);

function Split() {

    const $exemplo = `Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday`;
    const $exemploSplit = $exemplo.split(`,`);

    console.log($exemplo) //string
    console.log($exemploSplit) //array

    return $exemploSplit[0];

}