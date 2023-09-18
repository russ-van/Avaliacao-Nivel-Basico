let soma = 0

function refazer() {
    location.reload(); 
}

function somarAte100() {

    let numero = parseInt(document.querySelector("#numero").value);


    if (isNaN(numero)) {
        return;
    }

    soma += numero

    numero = "";

    document.querySelector("#exibirSoma").innerHTML = (`A soma dos números digitados é igual a ${soma}.`)

    if (soma === 100) {
        document.querySelector("#atingido").innerHTML = (`O total deu 100 redondo! 💯🎉`)
        document.querySelector("#numeroBotao").disabled = true; // desabilita a entrada de dados ao atingir a meta
        document.querySelector("#numero").disabled = true;
        document.querySelector("#refazer").innerHTML = (`<button onclick="refazer()">Refazer</button>`)

    } else if (soma > 100) {
        document.querySelector("#atingido").innerHTML = (`O total superou o valor de 100! 👀`)
        document.querySelector("#numeroBotao").disabled = true; // desabilita a entrada de dados ao atingir a meta
        document.querySelector("#numero").disabled = true;
        document.querySelector("#refazer").innerHTML = (`<button onclick="refazer()">Refazer</button>`)

    }

    


}