function recomecar() {
    location.reload(); 
}
document.querySelector("#recomecar").disabled = true;

function fazerContagem() {

    document.querySelector("#iniciar").disabled = true;
    document.querySelector("#recomecar").disabled = false;

    let exibirContador = document.getElementById("contador");
    let contagem = 1;
    let acumuladorNumeros = "Números de 1 a 10: "
    let exibirNumeros = document.querySelector("#exibirNumeros");
    

    function atualizarContador() {
        exibirContador.textContent = contagem;
        exibirNumeros.textContent = acumuladorNumeros
    }

    atualizarContador();

    var intervalo = setInterval(function () {
        
        if (contagem == 9) {
            acumuladorNumeros += (`${contagem} e 10. `)
        }else{
            acumuladorNumeros += (`${contagem}, `)
        }
        
        contagem++;
      
        while (contagem > 10) {
            clearInterval(intervalo);
            document.querySelector("#iniciar").disabled = false;
            document.querySelector("#recomecar").disabled = true;
            exibirContador.textContent = (`🎉`)
            return;
        }

        atualizarContador();

    }, 500);
};