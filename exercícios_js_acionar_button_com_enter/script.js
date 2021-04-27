//evento.key: mapear o teclado
//evento keypress: aciono o enter
document.addEventListener("keypress", function (evento) {
    if (evento.key === "Enter") {
        const btn = document.querySelector("#send");
        btn.click();
    }
});