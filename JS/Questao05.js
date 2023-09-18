function checkPrime() {
    let numero = Number(document.getElementById("numero").value);
    let acumulador;


    if (numero == 1) {
        //NÃO é número primo
        document.getElementById("resultado").innerHTML = (`<h3 style="color: rgb(128, 10, 10);"> ✏️ O número ${numero} NÃO é um número primo.</h3>`)
    } else if (numero == 2) {
        //número PRIMO
        document.getElementById("resultado").innerHTML = (`<h3 style="color: rgb(10, 114, 65);"> 💎 O número ${numero} é um número primo.</h3>`)
        return;
    }

    for (let contagem = 2; contagem < numero; contagem++) {

        acumulador = numero % contagem;

        if (numero % contagem == 0) {
            //NÃO é número primo
            document.getElementById("resultado").innerHTML = (`<h3 style="color: rgb(128, 10, 10);"> ✏️ O número ${numero} NÃO é um número primo.</h3>`)
            return;
        } else if (acumulador > 0) {
            //número PRIMO
            document.getElementById("resultado").innerHTML = (`<h3 style="color: rgb(10, 114, 65);"> 💎 O número ${numero} é um número primo.</h3>`)
        }

    }

}