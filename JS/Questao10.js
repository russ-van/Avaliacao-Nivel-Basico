var menorNumero = null
var maiorNumero = null

function refazer() {
    location.reload(); 
}

function verificarValor() {

    let numero = parseFloat(document.querySelector("#numero").value)
    let lista = document.querySelector("#lista")
    lista.innerHTML += (`${numero} <br>`)
    


    if (numero > maiorNumero || maiorNumero === null) {
        maiorNumero = numero;
    }

    if (numero < menorNumero || menorNumero === null) {
        menorNumero = numero;
    }

    if (maiorNumero == menorNumero) {
        document.querySelector("#resultado").innerHTML = (`✳️ Este é o primeiro número digitado: ${maiorNumero} `)
        document.querySelector("#refazer").innerHTML = (`<button onclick="refazer()">Refazer ❌</button>`)

    } else {
        document.querySelector("#resultado").innerHTML = (`⬆️ O maior número: ${maiorNumero} <br> ⬇️ O menor número: ${menorNumero}`)
        document.querySelector("#refazer").innerHTML = (`<button onclick="refazer()">Refazer ❌</button>`)
    }
}