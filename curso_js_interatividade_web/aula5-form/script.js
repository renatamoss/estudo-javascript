function enviarDados() {
    let nome = document.getElementById('nome').value;
    let mensagem = document.getElementById('mensagem').value;

    if (nome == "" || nome.length < 3) {
        alert(`Faltou informar um nome válido. Digite seu nome para continuar com sua mensagem.`);

    } else if (nome.length > 3 && mensagem == "" || mensagem.length < 50) {
        alert(`Seu nome é ${nome} porém faltou incluir sua mensagem.`);

    } else {
        alert(`Prezado ${nome} sua mensagem: "${mensagem}" será enviada.`);
    }

    // Email não pode ser vazio e tem que ter: @ e .
    // IndexOf é um método que retorna o elemento com valor se não estiver retorna -1

    // let email = documento.getElementById('email').value;

    // if (email == '' || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
    //     alert (`Insira um e-mail válido`);
    // }else{
    //     alert(`Seu e-mail é ${email}');
    // }

    //Outra forma de fazer: qdo uso operador && tudo tem que retornar verdadeiro:
    let email = documento.getElementById('email').value;

    if (email != '' && email.indexOf('@') != -1 && email.indexOf('.') != -1) {
        alert(`Seu e-mail é ${email}`);
    } else {
        alert(`Insira um email válido`);
    }
}



















// outra forma de fazer

// function enviarDados() {
//     let nome = document.getElementById('nome').value;
//     let mensagem = document.getElementById('mensagem').value;

//     if ((nome != "" && nome.length > 3) && (mensagem != "" && mensagem.length > 50)) {
//         alert(`Prezado ${nome} sua mensagem: "${mensagem}" será enviada.`);

//     } else {
//         alert(`Os dados inseridos são inválidos.);
//     }
// }

