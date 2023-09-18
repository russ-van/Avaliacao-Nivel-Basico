function somarPares() {
    document.querySelector("#iniciar").disabled = true;

    let exibirResultado = document.querySelector("#resultado")
    let exibirSoma = document.querySelector("#resultadoSoma")
    let contagemSoma = 1;
    let soma = 2;



    function atualizarContador() {
        exibirResultado.innerHTML = (`Valor somado: ${contagemSoma}.`) 
    }
    function atualizarSoma() {
        exibirSoma.innerHTML = (`Total da soma: ${soma}.`);

    }

    atualizarContador();
    atualizarSoma();

    contagemSoma = 2;

    atualizarContador();

    var intervalo = setInterval(function () {

        contagemSoma = contagemSoma + 2;
        soma = soma + contagemSoma;

        while (contagemSoma > 100) {
            clearInterval(intervalo);
            document.querySelector("#iniciar").disabled = false;
            return;
        }

        atualizarContador();
        atualizarSoma();

    }, 200);

}